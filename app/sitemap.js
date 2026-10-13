export default function sitemap() {
  const siteUrl = process.env.SITE_URL?.trim() || "http://localhost:3000";
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
