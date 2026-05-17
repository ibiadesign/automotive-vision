import { Link } from "@tanstack/react-router";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-xl tracking-tight">
            Guillermina Valdivia<span className="text-copper">.</span>
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Granada, Spain
          </p>
        </div>
        <ul className="flex items-center gap-8 text-sm text-muted-foreground">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pb-8 text-xs text-muted-foreground/60">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
