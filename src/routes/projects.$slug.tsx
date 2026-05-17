import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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

      {/* META */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 grid md:grid-cols-4 gap-8 border-b border-border">
        {[
          ["Client", project.client],
          ["Role", project.role],
          ["Year", project.year],
          ["Discipline", project.category],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="eyebrow mb-3">{k}</p>
            <p className="text-lg">{v}</p>
          </div>
        ))}
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Overview</p>
        </div>
        <div className="md:col-span-8 space-y-6 max-w-3xl">
          <p className="font-display text-2xl md:text-3xl leading-snug">
            {project.summary}
          </p>
          {project.body.map((para: string, i: number) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="space-y-px">
        {project.gallery.map((src: string, i: number) => (
          <div key={i} className="w-full">
            <img
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
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
