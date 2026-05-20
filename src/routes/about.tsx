import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Guillermina Valdivia" },
      {
        name: "description",
        content:
          "Guillermina Valdivia is an independent automotive designer based in Andalusia, working on concept vehicles, exterior surfacing and visual research.",
      },
    ],
  }),
  component: About,
});

const experience = [
  ["2024 — Now", "Independent Designer", "Concept & exterior commissions"],
  ["2022 — 2024", "Pininfarina", "Exterior Designer"],
  ["2020 — 2022", "Volkswagen Group", "Junior Exterior Designer"],
  ["2018 — 2020", "Royal College of Art", "MA Vehicle Design, London"],
];

const recognition: Array<[string, React.ReactNode, string?]> = [
  [
    "Car Design Award",
    <a
      href="https://www.autobild.es/noticias/estos-son-los-ganadores-concurso-kia-auto-bild-276305?utm_source=twitterfeed&utm_medium=twitter"
      target="_blank"
      rel="noreferrer"
      className="text-copper hover:underline"
    >
      KIA Glare
    </a>,
  ],
  [
    "Car Design Finalist Top10 Spain / Top 41 at international level",
    <a
      href="https://www.autopista.es/concurso-de-diseno-autopista-nissan-ganadores-y-finalistas_28027_113.html"
      target="_blank"
      rel="noreferrer"
      className="text-copper hover:underline"
    >
      Nissan Defy
    </a>,
  ],
  [
    "",
    <a
      href="https://www.autopista.es/conductoras/el-diseno-de-coches-tambien-cosa-de-mujeres_137079_102.html"
      target="_blank"
      rel="noreferrer"
      className="text-copper hover:underline"
    >
      Women in Automotive Design.
    </a>,
    "Women in Automotive Design.",
  ],
];


function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-24 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">About</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          I'm Guillermina, an
          <em className="not-italic text-copper"> automotive designer </em>
          working between Andalusia and the rest of the world.
        </h1>
      </section>

      <section className="relative h-[55vh] w-full overflow-hidden">
        <img
          src={aboutImg}
          alt="Guillermina Valdivia sketching a concept car on a tablet"
          loading="lazy"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">About me</p>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed max-w-3xl">
          <p>
            I've spent the last six years designing exteriors — first inside
            two large European studios, and since 2024 on my own. My focus is
            simple: vehicles that feel calm, considered, and built to age well.
          </p>
          <p className="text-muted-foreground">
            I draw on paper, model in clay when I can, and finish in digital
            surfacing. I take on a small number of projects each year so every
            line is the right one. Most of the work shown here is personal
            research; some is commissioned and shared with the client's blessing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Experience</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {experience.map(([when, role, detail]) => (
            <div
              key={role}
              className="py-6 grid md:grid-cols-12 gap-3 items-baseline"
            >
              <span className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {when}
              </span>
              <span className="md:col-span-4 font-display text-xl md:text-2xl">
                {role}
              </span>
              <span className="md:col-span-5 text-muted-foreground">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Recognition</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {recognition.map(([name, detail]) => (
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
          Say hello
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
