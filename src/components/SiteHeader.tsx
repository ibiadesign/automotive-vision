import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { to: "/" | "/projects" | "/about" | "/contact"; label: string; exact?: boolean }[] = [
    { to: "/", label: "Index", exact: true },
    { to: "/projects", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-display text-xl tracking-tight">Guillermina Valdivia</span>
          <span className="eyebrow text-[0.6rem] hidden sm:inline">
            Automotive Designer
          </span>
        </Link>
        <nav className="flex items-center gap-7 md:gap-10 text-xs uppercase tracking-[0.25em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{
                className:
                  "text-muted-foreground hover:text-foreground transition-colors",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
