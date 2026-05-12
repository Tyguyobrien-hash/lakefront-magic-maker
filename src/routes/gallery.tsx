import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery/dock-1.jpeg";
import g2 from "@/assets/gallery/dock-2.jpeg";
import g3 from "@/assets/gallery/dock-3.jpeg";
import g4 from "@/assets/gallery/dock-4.jpeg";
import g5 from "@/assets/gallery/dock-5.jpeg";
import g6 from "@/assets/gallery/dock-6.jpeg";
import g7 from "@/assets/gallery/dock-7.jpeg";
import g8 from "@/assets/gallery/dock-8.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work — Delta Dock & Hoist LLC" },
      { name: "description", content: "Photo gallery of recent dock and boat hoist installations across South East Michigan by Delta Dock & Hoist." },
      { property: "og:title", content: "Our Work — Delta Dock & Hoist" },
      { property: "og:description", content: "See recent dock and hoist installations from Delta Dock & Hoist." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: g1, alt: "Dock and covered boat hoist on a calm Michigan lake" },
  { src: g2, alt: "Long sectional dock with two covered hoists" },
  { src: g3, alt: "Delta crew installing a hoist canopy from custom barge" },
  { src: g4, alt: "Delta Dock & Hoist team aboard their work boat" },
  { src: g5, alt: "Aluminum dock with PWC bunks on a quiet morning lake" },
  { src: g6, alt: "L-shaped dock with double PWC racks and swim platform" },
  { src: g7, alt: "Long pier with end platform on a clear blue lake" },
  { src: g8, alt: "Wide dock with end deck on a sparkling lake" },
];

function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Our Work</span>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl md:text-6xl">A look at recent installs.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A selection of docks, hoists, and shoreline setups we've built across South East Michigan lakes.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] break-inside-avoid">
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
