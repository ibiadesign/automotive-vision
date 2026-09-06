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
  ["2026 — Now", "Public Service Vehicle Development", "Transportation Design Intern"],
  ["2025", "CUPRA", "Collaboration project with UPV"],
  ["2024 — 2025", "Genesis Europe", "Collaboration project with UPV"],
];

const studies = [
  ["2023 — 2026", "MA in Transportation Design", "UPV, Valencia"],
  ["2016 — 2018", "MA in Industrial Design", "Nebrija University, Madrid"],
  ["2009 — 2013", "Bachelor’s Degree in Fine Arts", "UGR, Granada"],
];

const courses: Array<[string, React.ReactNode, string]> = [
  [
    "2022 — (Oct — Nov)",
    "Professional Car Design: The Basics",
    "ArtCenter College of Design",
  ],
  [
    "2023 — (Feb — Apr) & (Apr. — Jun)",
    "Professional Car Design: Intermediate",
    "ArtCenter College of Design",
  ],
  [
    "2023 — (Jun — Jul)",
    "Professional Car Design: Advanced",
    "ArtCenter College of Design",
  ],
];

const recognition: Array<{ key: string; name: React.ReactNode; detail: React.ReactNode }> = [
  {
    key: "kia",
    name: "Car Design Award",
    detail: (
      <a
        href="https://www.autobild.es/noticias/estos-son-los-ganadores-concurso-kia-auto-bild-276305?utm_source=twitterfeed&utm_medium=twitter"
        target="_blank"
        rel="noreferrer"
        className="text-copper hover:underline"
      >
        KIA Glare
      </a>
    ),
  },
  {
    key: "nissan",
    name: (
      <div className="space-y-1">
        <span className="text-foreground block">
          Car Design Finalist — Top 10 Spain / Top 41 Worldwide
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Interview
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Defy as Concept Art for the next contest
        </span>
      </div>
    ),
    detail: (
      <div className="space-y-1 text-right">
        <a
          href="https://www.autopista.es/concurso-de-diseno-autopista-nissan-ganadores-y-finalistas_28027_113.html"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block font-display text-xl md:text-2xl"
        >
          Nissan Defy
        </a>
        <a
          href="https://www.autopista.es/conductoras/el-diseno-de-coches-tambien-cosa-de-mujeres_137079_102.html"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Women in Automotive Design
        </a>
        <a
          href="https://www.autopista.es/noticias-motor/las-5-dudas-mas-habituales-de-nuestro-concurso-de-diseno_136933_102.html"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Banner link
        </a>
      </div>
    ),
  },
  {
    key: "nissan-veron",
    name: (
      <div className="space-y-1">
        <span className="text-foreground block">
          Car Design Finalist — Top 10 Spain
        </span>
      </div>
    ),
    detail: (
      <div className="space-y-1 text-right">
        <a
          href="https://www.autopista.es/concurso-de-diseno-autopista-2015-los-finalistas_29541_113.html"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block font-display text-xl md:text-2xl"
        >
          Nissan Veron
        </a>
      </div>
    ),
  },
  {
    key: "fiberdiode",
    name: (
      <div className="space-y-1">
        <span className="text-foreground block">
          Car Design finalist at international level
        </span>
      </div>
    ),
    detail: (
      <div className="space-y-1 text-right">
        <Link
          to="/sketchbook"
          hash="fiberdiode"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Fiberdiode
        </Link>
      </div>
    ),
  },
  {
    key: "f1",
    name: (
      <div className="space-y-1">
        <span className="text-foreground block">Future F1 Design</span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Born of Future F1 Design Group from contest
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Graphic Design Intern at C&D
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          &nbsp;
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          First Steps
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          brainstorming
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Sketching ideas
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Rethinking ideas
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Key Concepts
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Aesthetic and Technical Design
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          First Sight
        </span>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          Final Concepts
        </span>
      </div>
    ),
    detail: (
      <div className="space-y-1 text-right">
        <a
          href="https://www.caranddriver.com/es/formula-1/a43348/los-10-mejores-dibujos-que-ilustran-las-ideas-del-grupo-de-trabajo-f1-del-f/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block font-display text-xl md:text-2xl"
        >
          Ferrari F1 MS Tribute
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a38719/nace-el-grupo-de-trabajo-f1-del-futuro-de-caranddriverthef1com/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          DF Concept 2023
        </a>
        <a
          href="https://x.com/CardriverF1/status/580465778715193344"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Graphic Art Illustration
        </a>
        <span className="block text-sm md:text-base font-sans text-muted-foreground normal-case tracking-normal">
          &nbsp;
        </span>
        <a
          href="https://www.caranddriver.com/es/formula-1/a39045/primeros-pasos-de-la-f1-del-futuro-en-caranddriverthef1com/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          First Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a39215/aprobadas-las-primeras-ideas-del-grupo-de-trabajo-f1-del-futuro/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Second Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a39575/el-grupo-de-trabajo-f1-del-futuro-avanza-en-sus-ideas/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Third Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a39945/nueva-vuelta-de-tuerca-a-las-ideas-del-grupo-de-trabajo-f1-del-futuro/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Fourth Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a42730/el-grupo-de-trabajo-f1-del-futuro-dibuja-las-lineas-de-los-nuevos-monoplaza/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Fifth Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a39945/nueva-vuelta-de-tuerca-a-las-ideas-del-grupo-de-trabajo-f1-del-futuro/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Sixth Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/g12111/el-grupo-de-trabajo-f1-del-futuro-maquilla-sus-ideas-en-busca-de-mas-compet/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Seventh Article
        </a>
        <a
          href="https://www.caranddriver.com/es/formula-1/a43348/los-10-mejores-dibujos-que-ilustran-las-ideas-del-grupo-de-trabajo-f1-del-f/"
          target="_blank"
          rel="noreferrer"
          className="text-copper hover:underline block text-sm md:text-base font-sans normal-case tracking-normal"
        >
          Eighth Article
        </a>
      </div>
    ),
  },
];



function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-24 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">About</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          I design vehicles with
          <em className="not-italic text-copper"> emotion </em>
          and <em className="not-italic text-copper">purpose</em>.
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
          <p className="text-muted-foreground">
            I've always been drawn to vehicles with presence — forms that
            communicate emotion, character and intention without needing
            explanation. Today, I explore that through transportation design,
            blending artistic intuition with digital development and visual
            storytelling.
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

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Studies</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {studies.map(([when, role, detail]) => (
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

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Courses</p>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {courses.map(([when, role, detail]) => (
            <div
              key={when}
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
          {recognition.map(({ key, name, detail }) => (
            <div
              key={key}
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

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 space-y-10">
        <Link
          to="/about"
          hash="contact"
          className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em]"
        >
          <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-copper transition-all duration-500" />
          Let's talk
        </Link>

        <div id="contact" className="scroll-mt-32 space-y-8">
          <a
            href="mailto:guiyedesign@gmail.com"
            className="font-display text-3xl md:text-4xl hover:text-copper transition-colors block"
          >
            guiyedesign@gmail.com
          </a>

          <ul className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.instagram.com/ibiadesign/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/guillerminavaldivia/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/guillerminavaldivia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
