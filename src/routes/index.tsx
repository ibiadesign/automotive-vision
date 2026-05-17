import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroCar from "@/assets/hero-car.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guillermina Valdivia — Automotive Designer" },
      {
        name: "description",
        content:
          "Portfolio of Guillermina Valdivia, an independent automotive designer based in Barcelona. Concept cars, exterior surfacing and visual research.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroCar}
          alt="Lumen GT concept — matte black grand tourer with copper accents"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
          <p className="eyebrow mb-6">Guillermina Valdivia — Selected Work, 2026</p>
          <h1 className="font-display text-[14vw] md:text-[8vw] leading-[0.9] tracking-tight max-w-5xl">
            Automotive design,
            <br />
            shaped with <em className="not-italic text-copper">intention</em>.
          </h1>
          <div className="mt-10 flex items-center gap-10">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em]"
            >
              <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-copper transition-all duration-500" />
              View the work
            </Link>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
            >
              About me
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-12 z-10 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          Lumen GT · Concept · 2025
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <p className="eyebrow md:col-span-3">A short note</p>
        <div className="md:col-span-9 max-w-4xl">
          <p className="font-display text-3xl md:text-5xl leading-tight">
            I'm an independent automotive designer working between concept,
            surfacing and visual research — drawn to proportion, restraint, and
            the quiet confidence of a well-resolved line.
          </p>
          <div className="hairline mt-12 mb-8 max-w-md" />
          <p className="text-muted-foreground max-w-xl">
            This is a selection of personal and commissioned work from the last
            three years. Each project is an attempt to answer the same question:
            what does a vehicle look like when nothing is added for its own sake?
          </p>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-4">Selected Work — 2023 / 2025</p>
            <h2 className="font-display text-5xl md:text-7xl">Recent studies.</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] group"
          >
            <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-copper transition-all duration-500" />
            All projects
          </Link>
        </div>

        <div className="space-y-32">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group grid md:grid-cols-12 gap-8 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-8 relative overflow-hidden bg-card aspect-[16/10]">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              <div className="md:col-span-4 md:px-6">
                <p className="eyebrow mb-4">
                  {String(i + 1).padStart(2, "0")} · {p.year}
                </p>
                <h3 className="font-display text-4xl md:text-5xl leading-tight group-hover:text-copper transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {p.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                  <span className="w-8 h-px bg-copper" />
                  Read the project
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
