import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/citroen-urban-resqore")({
  head: () => {
    const p = getProject("citroen-urban-resqore");
    const title = "Urban ResQore — Citroën · Master Thesis";
    const desc =
      "Emergency veterinary response reimagined for future cities. A Master Thesis transportation design project in collaboration with Citroën.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  component: UrbanResQorePage,
});

function UrbanResQorePage() {
  const project = getProject("citroen-urban-resqore")!;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) {
      setPlaying(true);
      return;
    }
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.cover}
          alt="Urban ResQore — cover render placeholder"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24">
          <p className="eyebrow mb-6">Master Thesis Project · 2024</p>
          <h1
            className="font-display leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.2vw, 4.5rem)" }}
          >
            Urban ResQore
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80">
            Emergency veterinary response reimagined for future cities.
          </p>
        </div>
      </section>

      {/* OVERVIEW — two columns */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 border-b border-border">
        <div className="md:col-span-7 max-w-2xl space-y-6">
          <p className="eyebrow">Overview</p>
          <p className="font-display text-2xl md:text-3xl leading-snug">
            Cities are built around human mobility, yet emergency care for
            animals often remains slow, fragmented and dependent on
            conventional transport. Urban ResQore explores a new approach: an
            autonomous electric ambulance designed specifically for small and
            medium-sized animals in urban environments.

            Compact, quiet and purpose-built for veterinary intervention, the
            vehicle combines autonomous navigation with dedicated medical
            equipment, allowing faster response times while reducing stress
            during transport. Its architecture prioritises accessibility,
            safety and animal wellbeing, creating a mobile care unit adapted
            to the realities of modern cities.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Developed as a Master Thesis project for Citroën, Urban ResQore
            rethinks emergency mobility through autonomy, electrification and
            animal-centred design. The project investigates how future urban
            services could provide specialised veterinary assistance with the
            same efficiency and availability expected from human emergency
            systems.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border">
          <p className="eyebrow mb-8">Project Information</p>
          <dl className="space-y-6">
            {[
              ["Brand", "Citroën"],
              ["Project Type", "Master Thesis"],
              ["Discipline", "Transportation Design"],
              ["Duration", "2 months · 2024"],
              ["Software Used", "Photoshop · Vizcom"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4">
                <dt className="col-span-5 eyebrow self-start pt-1">{k}</dt>
                <dd className="col-span-7 text-base md:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {/* DEVELOPMENT & PACKAGING */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Process</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Development &amp; Packaging
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Early ideation, package studies and proportion work that defined
              the vehicle's footprint, sight lines and interior architecture.
            </p>
          </div>
        </div>

        {/* Editorial staggered layout */}
        <div className="space-y-6">
          {/* Row 1 — full width */}
          <Placeholder label="Layout Image 01" ratio="aspect-[21/9]" />

          {/* Row 2 — two columns */}
          <div className="grid md:grid-cols-2 gap-6">
            <Placeholder label="Layout Image 02" ratio="aspect-[4/3]" />
            <Placeholder label="Layout Image 03" ratio="aspect-[4/3]" />
          </div>

          {/* Row 3 — asymmetric 5/7 */}
          <div className="grid md:grid-cols-12 gap-6">
            <Placeholder
              label="Layout Image 04"
              ratio="aspect-[4/5]"
              className="md:col-span-5"
            />
            <Placeholder
              label="Layout Image 05"
              ratio="aspect-[4/5] md:aspect-auto md:h-full"
              className="md:col-span-7"
            />
          </div>

          {/* Row 4 — single full-width */}
          <Placeholder label="Layout Image 06" ratio="aspect-[16/9]" />

          {/* Row 5 — asymmetric 7/5 with vertical offset */}
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <Placeholder
              label="Layout Image 07"
              ratio="aspect-[16/10]"
              className="md:col-span-7"
            />
            <Placeholder
              label="Layout Image 08"
              ratio="aspect-[4/5]"
              className="md:col-span-5 md:mt-16"
            />
          </div>
        </div>
      </section>

      {/* FINAL RENDERS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-24 md:pt-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <p className="eyebrow mb-4">Showcase</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Final Design
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 max-w-xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Final renders presenting the resolved exterior and the calm,
                clinical interior environment designed for animal care.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 md:space-y-16 pb-24 md:pb-32">
          <Placeholder
            label="Final Render 01"
            ratio="aspect-[21/9]"
            wrapperClassName="w-full"
            rounded={false}
          />
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-2 gap-6">
            <Placeholder label="Final Render 02" ratio="aspect-[4/5]" />
            <Placeholder label="Final Render 03" ratio="aspect-[4/5]" />
          </div>
          <Placeholder
            label="Final Render 04"
            ratio="aspect-[16/9]"
            wrapperClassName="w-full"
            rounded={false}
          />
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <Placeholder label="Final Render 05" ratio="aspect-[21/9]" />
          </div>
        </div>
      </section>

      {/* ANIMATION */}
      <section className="border-t border-border mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Motion</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Animation
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              A short film capturing the Urban ResQore in motion through the
              city — light, sound and presence.
            </p>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-card border border-border overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            controls={playing}
            playsInline
            preload="metadata"
            poster={project.cover}
          >
            {/* Drop the MP4 here when ready */}
            {/* <source src="/path/to/urban-resqore.mp4" type="video/mp4" /> */}
          </video>

          {!playing && (
            <button
              type="button"
              onClick={playVideo}
              className="absolute inset-0 flex items-center justify-center bg-background/40 hover:bg-background/30 transition-colors group"
              aria-label="Play Urban ResQore animation"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-copper flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-copper ml-1" />
                </div>
                <p className="eyebrow">Urban ResQore Animation</p>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 border-t border-border">
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

function Placeholder({
  label,
  ratio,
  className = "",
  wrapperClassName,
  rounded = false,
}: {
  label: string;
  ratio: string;
  className?: string;
  wrapperClassName?: string;
  rounded?: boolean;
}) {
  const base = (
    <div
      className={`relative ${ratio} bg-card border border-border overflow-hidden flex items-center justify-center ${
        rounded ? "rounded-sm" : ""
      } ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.25_0.02_60/0.4),transparent_60%)]" />
      <span className="relative eyebrow text-muted-foreground">{label}</span>
    </div>
  );

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{base}</div>;
  }
  return base;
}
