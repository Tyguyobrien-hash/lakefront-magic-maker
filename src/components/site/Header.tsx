import { Link } from "@tanstack/react-router";
import { Anchor, Phone } from "lucide-react";

export function Header() {
  const linkCls =
    "text-sm font-medium text-foreground/80 transition-colors hover:text-primary";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <Anchor className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Delta Dock <span className="text-primary-glow">&</span> Hoist
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={{ className: "text-primary" }}>Services</Link>
          <Link to="/gallery" className={linkCls} activeProps={{ className: "text-primary" }}>Our Work</Link>
          <a href="tel:7346469055" className={linkCls}>Call</a>
        </nav>
        <a
          href="tel:7346469055"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:bg-primary-glow sm:inline-flex"
        >
          <Phone className="h-4 w-4" /> (734) 646-9055
        </a>
      </div>
    </header>
  );
}