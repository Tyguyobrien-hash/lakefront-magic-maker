import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://lakefront-magic-maker.lovable.app";

const urls = [
  { loc: "/", priority: "1.0", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "monthly" },
  { loc: "/gallery", priority: "0.8", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});