export default function sitemap() {
  return [
    {
      url: 'https://ahsanarshad.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
