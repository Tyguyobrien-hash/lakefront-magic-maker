import { Link } from "@tanstack/react-router";
import { Anchor, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[image:var(--gradient-primary)]">
              <Anchor className="h-4 w-4" />
            </span>
            <span className="font-serif text-lg font-semibold">Delta Dock & Hoist LLC</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            South East Michigan's most trusted dock and hoist installation, removal,
            and seasonal service team.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base">Reach Us</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> South East Michigan</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call for a quote</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@deltadockhoist.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Delta Dock & Hoist LLC. All rights reserved.
      </div>
    </footer>
  );
}