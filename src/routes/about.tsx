import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Halden Automotive Design" },
      {
        name: "description",
        content:
          "Halden is an independent automotive design studio working on concept vehicles, exterior surfacing and brand language.",
      },
    ],
  }),
  component: About,
});

const credits = [
  ["Polestar", "Exterior consulting · 2024"],
  ["Confidential OEM", "Saloon programme · 2023"],
  ["Pininfarina", "Surfacing study · 2022"],
  ["RCA, London", "Guest lectures · 2021–"],
];

const services = [
  ["Concept Design", "Vision projects, show cars, brand-defining studies."],
  ["Exterior Surfacing", "Class-A surface direction and production support."],
  ["Design Language", "Brand DNA, line-up cohesion, signature definition."],
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-24 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">The Studio</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          A small studio, working at the
          <em className="not-italic text-copper"> intersection </em>
          of design, engineering and restraint.
        </h1>
      </section>

      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={aboutImg}
          alt="Designer sketching a concept car on a tablet"
          loading="lazy"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Approach</p>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed max-w-3xl">
          <p>
            Halden was founded on the belief that the next generation of
            vehicles should be quieter — not only in sound, but in form. We
            design exteriors and brand languages for marques that value
            longevity over novelty.
          </p>
          <p className="text-muted-foreground">
            Our process is deliberate. We sketch on paper, build in clay, and
            refine in digital surfaces. Each project is led by a single
            designer, supported by a tight network of CMF, engineering and
            visualisation collaborators.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Services</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {services.map(([title, desc]) => (
            <div
              key={title}
              className="py-8 grid md:grid-cols-3 gap-6 items-baseline"
            >
              <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
              <p className="md:col-span-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Selected Collaborators</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {credits.map(([name, detail]) => (
            <div
              key={name}
              className="py-6 flex items-baseline justify-between gap-6"
            >
              <span className="font-display text-xl md:text-2xl">{name}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-right">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em]"
        >
          <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-copper transition-all duration-500" />
          Begin a conversation
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
