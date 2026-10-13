export default function robots() {
  const siteUrl = process.env.SITE_URL?.trim() || "http://localhost:3000";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
