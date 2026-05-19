import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-12 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">Contact</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl text-current">
          Let's start a <span className="text-copper">conversation</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 space-y-12">
          <div>
            <p className="eyebrow mb-3">Direct</p>
            <a
              href="mailto:hello@guillerminavaldivia.com"
              className="font-display text-3xl md:text-4xl hover:text-copper transition-colors"
            >
              hello@guillerminavaldivia.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Based in</p>
            <p className="leading-relaxed">
              Granada, Spain
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Available for commissions and collaborations worldwide
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {["Instagram", "Behance", "LinkedIn", "Vimeo"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 hover:text-copper transition-colors"
                  >
                    <span className="w-6 h-px bg-border group-hover:bg-copper transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-7 space-y-10"
        >
          {sent ? (
            <div className="border border-copper/40 p-10 text-center">
              <p className="eyebrow mb-4">Thank you</p>
              <p className="font-display text-3xl">
                Your message is on its way.
              </p>
              <p className="text-muted-foreground mt-3">
                I reply to every message personally, usually within two days.
              </p>
            </div>
          ) : (
            <>
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company / Studio (optional)" name="company" />
              <Field
                label="Tell me about the project"
                name="message"
                textarea
                required
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] pt-4"
              >
                <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-copper transition-all duration-500" />
                Send message
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b border-border focus:border-copper outline-none py-3 transition-colors text-lg placeholder:text-muted-foreground/40";
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  );
}
