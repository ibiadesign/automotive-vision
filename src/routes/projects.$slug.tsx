import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Halden` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — Halden` },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl mb-6">Project not found</h1>
      <Link to="/projects" className="text-xs uppercase tracking-[0.3em] text-copper">
        ← Back to work
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <p className="eyebrow mb-4">Error</p>
      <h1 className="font-display text-3xl mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-6 max-w-md">{error.message}</p>
      <button onClick={reset} className="text-xs uppercase tracking-[0.3em] text-copper">
        Try again
      </button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const sketches = project.sketches ?? [];
  const renders = project.gallery ?? [];

  const allImages = useMemo<LightboxImage[]>(
    () => [
      ...sketches.map((src: string, i: number) => ({ src, alt: `${project.title} — sketch ${i + 1}` })),
      ...renders.map((src: string, i: number) => ({ src, alt: `${project.title} — render ${i + 1}` })),
    ],
    [sketches, renders, project.title],
  );
  const sketchesOffset = 0;
  const rendersOffset = sketches.length;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openAt = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allImages.length) % allImages.length));
  const nextImg = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allImages.length));


  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24">
          <p className="eyebrow mb-6">
            {project.category} · {project.year}
          </p>
          <h1 className="font-display text-[9.5vw] md:text-[5.5vw] leading-[1.05] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 border-b border-border">
        <div className="md:col-span-7 max-w-2xl space-y-6">
          <p className="eyebrow">Overview</p>
          <p className="font-display text-2xl md:text-3xl leading-snug">
            {project.summary}
          </p>
          {project.body.map((para: string, i: number) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border">
          <p className="eyebrow mb-8">Project Information</p>
          <dl className="space-y-6">
            {[
              ["Brand", project.client],
              ["Project Type", project.projectType ?? project.category],
              ["Discipline", project.discipline ?? project.category],
              ["Duration", project.duration ?? project.year],
              ["Software Used", project.software ?? "—"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4">
                <dt className="col-span-5 eyebrow self-start pt-1">{k}</dt>
                <dd className="col-span-7 text-base md:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {/* INSPIRATION */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">Inspiration</p>
          </div>
          <div className="md:col-span-8 max-w-3xl">
            <p className="font-display text-3xl md:text-4xl leading-snug text-copper">
              “{project.inspiration}”
            </p>
          </div>
        </div>
      </section>

      {/* SKETCHES */}
      <section className="border-t border-border mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Sketches & Process</p>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Early ideation, silhouette studies and surfacing explorations that
              shaped the final direction of {project.title}.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {(sketches.length > 0
            ? sketches
            : (Array.from({ length: 10 }).map(() => null) as (string | null)[])
          ).map((src, i) =>
            src ? (
              <button
                key={i}
                type="button"
                onClick={() => openAt(sketchesOffset + i)}
                className="group block w-full aspect-[4/3] overflow-hidden bg-card border border-border focus:outline-none focus:ring-2 focus:ring-copper"
                aria-label={`Open sketch ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.title} — sketch ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ) : (
              <div
                key={i}
                className="aspect-[4/3] bg-card border border-border flex items-center justify-center text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                Sketch {String(i + 1).padStart(2, "0")}
              </div>
            )
          )}
        </div>
      </section>

      {/* RENDERS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-24">
          <p className="eyebrow mb-10">Final Design</p>
        </div>
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          {renders.map((src: string, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => openAt(rendersOffset + i)}
              className="group block w-full aspect-[4/3] overflow-hidden bg-card border border-border focus:outline-none focus:ring-2 focus:ring-copper"
              aria-label={`Open render ${i + 1}`}
            >
              <img
                src={src}
                alt={`${project.title} — render ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* VIDEO ANIMATION */}
      <section className="border-t border-border mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Animation</p>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              A short film capturing the motion, light and atmosphere of the
              project.
            </p>
          </div>
        </div>
        {project.animation ? (
          <div className="relative aspect-video w-full bg-card border border-border overflow-hidden">
            <video
              src={project.animation}
              poster={project.animationPoster}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="relative aspect-video w-full bg-card border border-border overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-copper flex items-center justify-center">
                <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-copper ml-1" />
              </div>
              <p className="eyebrow">Video coming soon</p>
            </div>
          </div>
        )}
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32">
        <p className="eyebrow mb-6">Next Project</p>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block"
        >
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl group-hover:text-copper transition-colors duration-500">
              {next.title}
            </h2>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {next.category} · {next.year}
            </span>
          </div>
          <div className="hairline mt-8" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
