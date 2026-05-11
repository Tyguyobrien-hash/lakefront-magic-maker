import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Wrench, Waves, Phone } from "lucide-react";
import installImg from "@/assets/delta-install-grid.jpeg";
import hoistImg from "@/assets/delta-hoist-grid.jpeg";
import removalImg from "@/assets/delta-removal.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Delta Dock & Hoist LLC" },
      { name: "description", content: "Dock installation, boat hoist service, seasonal removal, repairs, and shoreline accessories across South East Michigan." },
      { property: "og:title", content: "Dock & Hoist Services — Delta Dock & Hoist" },
      { property: "og:description", content: "Full-service dock and hoist solutions for SE Michigan lakes." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Anchor, img: installImg, title: "Dock Installation", text: "Custom layouts, leveled and anchored for any lake bed — sand, muck, or rock." },
  { icon: Wrench, img: hoistImg, title: "Boat Hoist Installation", text: "Vertical, cantilever, and pontoon-style lifts sized to your boat and shoreline." },
  { icon: Waves, img: removalImg, title: "Seasonal Removal", text: "Fall pull-outs, on-shore staging, and spring re-installs scheduled ahead of time." },
];

function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Our Services</span>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl md:text-6xl">Full-service shoreline care, season after season.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          One trusted local crew for every part of your dock and hoist — from the
          first install to seasonal removal and everything in between.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, img, title, text }) => (
          <article key={title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            {img && (
              <img src={img} alt={title} loading="lazy" width={1280} height={960} className="h-48 w-full object-cover" />
            )}
            <div className="p-6">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <h2 className="font-serif text-3xl md:text-4xl">Not sure what you need?</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">Send us your shoreline photos and we’ll recommend the right setup — no pressure, no fees.</p>
          <a href="tel:7346469055" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-[var(--transition-smooth)] hover:scale-[1.03]">
            <Phone className="h-4 w-4" /> Call (734) 646-9055
          </a>
        </div>
      </section>
    </div>
  );
}