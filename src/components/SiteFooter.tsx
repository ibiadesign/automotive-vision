import { Link } from "@tanstack/react-router";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="eyebrow mb-4">Portfolio</p>
          <p className="font-display text-3xl leading-tight">
            Guillermina Valdivia<span className="text-copper">.</span>
          </p>
          <p className="text-muted-foreground text-sm mt-3 max-w-xs">
            Independent automotive designer. Concept work, exterior surfacing
            and visual research.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Based in</p>
          <p className="text-sm leading-relaxed">
            Granada, Spain<br />
            <span className="text-muted-foreground">Available for projects worldwide</span>
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-copper transition-colors"
                >
                  <span className="w-6 h-px bg-border group-hover:bg-copper transition-colors" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Guillermina Valdivia</span>
          <span>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Get in touch →
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
