import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import contactImg from "@/assets/contact-portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Guillermina Valdivia" },
      {
        name: "description",
        content:
          "Get in touch with Guillermina Valdivia for concept work, exterior design and visual research collaborations.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-16 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">Contact</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl text-current">
          Let's start a <span className="text-copper">conversation</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40 grid md:grid-cols-12 gap-16 md:gap-24 items-start">
        <div className="md:col-span-5 md:pt-8 space-y-14">
          <div>
            <p className="eyebrow mb-3">Direct</p>
            <a
              href="mailto:guiyedesign@gmail.com"
              className="font-display text-3xl md:text-4xl hover:text-copper transition-colors"
            >
              guiyedesign@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Based in</p>
            <p className="leading-relaxed">Andalusia, Spain</p>
            <p className="text-muted-foreground text-sm mt-2 max-w-sm">
              Automotive & industrial design projects, visual development and
              creative collaborations worldwide.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-copper transition-colors"
                >
                  <span className="w-6 h-px bg-border group-hover:bg-copper transition-colors" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/guillerminavaldivia"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-copper transition-colors"
                >
                  <span className="w-6 h-px bg-border group-hover:bg-copper transition-colors" />
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guillerminavaldivia/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-copper transition-colors"
                >
                  <span className="w-6 h-px bg-border group-hover:bg-copper transition-colors" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-7">
          <img
            src={contactImg}
            alt="Guillermina Valdivia discussing automotive design sketches at an exhibition"
            loading="lazy"
            className="w-full h-auto object-cover aspect-[3/4]"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
