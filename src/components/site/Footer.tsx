import { Link } from "@tanstack/react-router";
import { Anchor, MapPin, Mail, Phone } from "lucide-react";

const locations = [
  "White Lake",
  "Whitmore Lake",
  "Lake Orion",
  "Pinckney",
  "Livingston County",
  "Fenton",
  "Brighton",
  "Howell",
  "Village of Clarkston",
  "Waterford Township",
  "Chelsea",
  "Milford",
];

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
            <li><Link to="/gallery" className="hover:text-accent">Our Work</Link></li>
            <li><a href="tel:7346469055" className="hover:text-accent">Call Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base">Reach Us</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> South East Michigan</li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:7346469055" className="hover:text-accent">(734) 646-9055</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:deltadock.hoist@gmail.com" className="hover:text-accent break-all">deltadock.hoist@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h4 className="mb-4 font-serif text-base">Service Locations</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/80 sm:grid-cols-3 md:grid-cols-4">
            {locations.map((loc) => (
              <li key={loc} className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Delta Dock & Hoist LLC. All rights reserved.
      </div>
    </footer>
  );
}