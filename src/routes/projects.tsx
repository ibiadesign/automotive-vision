import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work — Halden Automotive Design" },
      {
        name: "description",
        content:
          "A selection of concept vehicles, exterior surfacing studies and brand language work by Halden.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-20 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">Index · {projects.length} Projects</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          Selected work, 2023 — 2025.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32 grid gap-px bg-border md:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group relative bg-background overflow-hidden aspect-[5/4]"
          >
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              width={1600}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.year}</span>
              </div>
              <div>
                <p className="eyebrow mb-3">{p.category}</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight group-hover:text-copper transition-colors duration-500">
                  {p.title}
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md">
                  {p.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
