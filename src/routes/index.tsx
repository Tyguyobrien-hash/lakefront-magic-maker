import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Wrench, Waves, ShieldCheck, Star, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import heroImg from "@/assets/delta-boat-flag.jpeg";
import installImg from "@/assets/delta-install-grid.jpeg";
import hoistImg from "@/assets/delta-hoist-grid.jpeg";
import removalImg from "@/assets/delta-removal.jpeg";
import teamImg from "@/assets/delta-team.jpeg";
import deltaClip from "@/assets/video/delta-clip.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delta Dock & Hoist — SE Michigan Dock & Hoist Services" },
      { name: "description", content: "Professional boat hoist repair and dock services in South East Michigan. 5-star rated, fully insured, and friendly local crew." },
      { property: "og:title", content: "Delta Dock & Hoist — SE Michigan Dock & Hoist Services" },
      { property: "og:description", content: "Professional boat hoist repair and dock services across South East Michigan lakes. 5-star rated and fully insured." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://lakefront-magic-maker.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Delta Dock & Hoist LLC",
          image: "https://deltadockandhoist.com/og-image.jpg",
          telephone: "+1-734-646-9055",
          email: "deltadock.hoist@gmail.com",
          url: "https://deltadockandhoist.com/",
          areaServed: [
            "White Lake","Whitmore Lake","Lake Orion","Pinckney","Livingston County",
            "Fenton","Brighton","Howell","Waterford Township",
            "Chelsea","Milford",
          ],
          address: { "@type": "PostalAddress", addressRegion: "MI", addressCountry: "US" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "4" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Calm Michigan lake at sunrise with a wooden dock and boat hoist"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 text-primary-foreground">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> 5.0 rated • South East Michigan
          </span>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Professional Dock & Boat Hoist Services in South East Michigan
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Professional dock and boat hoist installation, removal, and seasonal
            service. Quick, timely, and built to last across every Michigan season.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:7346469055"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call (734) 646-9055
            </a>
            <a
              href="tel:7346469055"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-[var(--transition-smooth)] hover:bg-white/20"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border/60 bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          <h2 className="sr-only">Why choose Delta Dock & Hoist</h2>
          {[
            { icon: ShieldCheck, title: "Fully Insured", text: "Licensed crew, careful with your shoreline." },
            { icon: Waves, title: "All Lake Types", text: "Sandy, mucky, rocky — we’ve worked them all." },
            { icon: Star, title: "5.0 Star Rated", text: "Customers say we’re the most legit in SE MI." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">See us in action</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Watch the Delta crew at work.</h2>
            <p className="mt-5 text-muted-foreground">
              From custom barge installs to careful seasonal removals, here's a quick
              look at how we treat every Michigan shoreline.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <video
              src={deltaClip}
              poster={heroImg}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Delta Dock & Hoist crew installing a dock and boat hoist on a Michigan lake"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Built for the water. Trusted by the lake community.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { img: installImg, icon: Anchor, title: "Dock Installation", text: "Spring set-ups done right — leveled, secure, and ready for the season." },
            { img: hoistImg, icon: Wrench, title: "Boat Hoist Service", text: "Hoist installs, lifts, repairs, and adjustments for every boat type." },
            { img: removalImg, icon: Waves, title: "Seasonal Removal", text: "Fall removal and safe winter storage prep so nothing gets damaged." },
          ].map(({ img, icon: Icon, title, text }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What customers say
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Trusted across the lake community.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "By far the most legit Dock and Hoist Installation business in South East Michigan. Quick and timely, and the guys are always super friendly, and catering to whatever adjustments I need. Can't recommend them enough!",
                name: "Logan Willis",
                source: "Google Review",
              },
              {
                quote:
                  "Professional, prompt, dependable, experienced, and courteous service.",
                name: "Todd Dickinson",
                source: "Facebook Recommendation",
              },
              {
                quote: "Great work, very cool boat!",
                name: "Cameron Gaden",
                source: "Facebook Recommendation",
              },
              {
                quote:
                  "The Delta crew moved a boat hoist that I bought used on Marketplace. They did pick up, delivery and install in about an hour or so and the hoist had to be transported 3/4 to 1 mile. If you're looking for a quality team to install, remove or relocate a dock or a hoist you need to call Delta Dock & Hoist. They will do a great job and their custom built barge is amazing to see in action.",
                name: "Timothy McDonnell",
                source: "Facebook Recommendation",
              },
            ].map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg leading-relaxed text-primary-foreground/95">
                  "{r.quote}"
                </blockquote>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                  — {r.name} · {r.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Why Delta
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            We treat your shoreline like our own.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From the first phone call to the final adjustment, we show up on
            time, communicate clearly, and leave your waterfront looking better
            than we found it.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Free quotes & honest pricing",
              "Spring installs and fall removals scheduled in advance",
              "Local crew, fast response across SE Michigan",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary-glow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
          <img
            src={teamImg}
            alt="The Delta Dock & Hoist team in their shop"
            loading="lazy"
            width={1280}
            height={960}
            className="relative w-full rounded-3xl shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-16">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Ready for your best lake season yet?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Lock in your spring install or fall removal date today — calendars
                fill up fast.
              </p>
            </div>
            <a
              href="tel:7346469055"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-[1.03] md:justify-self-end"
            >
              <Phone className="h-4 w-4" /> Call (734) 646-9055
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
