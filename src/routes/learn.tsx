import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — Guillermina Valdivia" },
      {
        name: "description",
        content:
          "Courses and mentorship for aspiring car designers. From sketching basics to advanced digital renders.",
      },
    ],
  }),
  component: LearnPage,
});

const courses = [
  {
    vol: "Vol. 0",
    title: "Intro project — full process",
    price: "14,99 €",
    status: "available" as const,
    href: "https://guiyedesign.gumroad.com/l/From0toCarDesigner",
  },
  {
    vol: "Vol. 1",
    title: "Line & form — basic sketching",
    price: "19,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 2",
    title: "Perspective for car design",
    price: "29,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 3",
    title: "Copic marker colouring",
    price: "39,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 4",
    title: "Wheels & design elements",
    price: "19,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 5",
    title: "Digital colouring — PSD",
    price: "34,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 6",
    title: "Advanced digital renders",
    price: "39,99 €",
    status: "soon" as const,
    href: "#",
  },
  {
    vol: "Vol. 7",
    title: "AI-assisted renders",
    price: "19,99 €",
    status: "soon" as const,
    href: "#",
  },
];

const mentorshipItems = [
  {
    title: "Portfolio review",
    desc: "I'll dedicate 45 min session, feedback and corrections on your sketches",
  },
  {
    title: "Design guidance",
    desc: "Feel free to ask for direction and process",
  },
  {
    title: "Sketching session",
    desc: "Work through a sketch problem",
  },
  {
    title: "Who is this for",
    desc: "Design students and beginners",
  },
];

function LearnPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADER */}
      <section className="pt-40 md:pt-48 pb-20 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">Learn</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          Courses & mentorship
        </h1>
        <p className="mt-8 text-muted-foreground max-w-xl leading-relaxed">
          Resources built from real industry-level projects. Learn the process
          behind the work — from first sketch to final render.
        </p>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40">
        <p className="eyebrow mb-12">Courses</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <a
              key={c.vol}
              href={c.href}
              target={c.status === "available" ? "_blank" : undefined}
              rel={c.status === "available" ? "noreferrer" : undefined}
              className={`group block rounded-sm p-6 transition-colors border ${
                c.status === "available"
                  ? "border-copper/40 bg-card hover:border-copper/70"
                  : "border-border/40 bg-card/50 hover:bg-card"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] font-medium ${
                    c.status === "available"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {c.status === "available" ? "Available" : "Soon"}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {c.vol}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl leading-tight group-hover:text-copper transition-colors duration-500">
                {c.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">{c.price}</p>
            </a>
          ))}
        </div>
      </section>

      {/* MENTORSHIP */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40">
        <p className="eyebrow mb-12">Mentorship</p>

        <div className="bg-card border border-border/40 rounded-sm p-8 md:p-12">
          <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
            {mentorshipItems.map((item) => (
              <div key={item.title}>
                <h4 className="font-display text-xl md:text-2xl leading-tight">
                  {item.title}
                </h4>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="hairline my-10" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-display text-2xl">From 45 € / session</p>
            <a
              href="https://calendar.app.google/4VwiDpoQiiv7oASM6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-copper/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-copper hover:bg-copper hover:text-background transition-colors duration-300"
            >
              Book a session
            </a>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40">
        <p className="eyebrow mb-12">Free resources</p>

        <div className="bg-card border border-border/40 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              10 common mistakes in car design sketching
            </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-lg">
              Free PDF guide. Enter your email and get it instantly.
            </p>
          </div>
          <a
            href="https://guiyedesign.gumroad.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-copper/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-copper hover:bg-copper hover:text-background transition-colors duration-300 shrink-0"
          >
            Download free
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
