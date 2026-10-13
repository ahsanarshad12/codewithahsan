import "./globals.css";

// Set SITE_URL in production so canonical links, sitemap and social previews
// point at the real domain. Local development falls back to localhost.
const siteUrl = process.env.SITE_URL?.trim() || "http://localhost:3000";
const title = "AHSAN. | Frontend & Next.js Developer Portfolio";
const description =
  "Ahsan Arshad — Frontend & Next.js Developer based in Rahim Yar Khan, Pakistan. Selected work, skills, services, and contact details for freelance and full-time projects.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ahsan Arshad",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Freelance web developer Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Ahsan Arshad", url: siteUrl }],
  creator: "Ahsan Arshad",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AHSAN.",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahsan Arshad — Frontend & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahsan Arshad",
  jobTitle: "Frontend & Next.js Developer",
  email: "mailto:ahsanarshad291@gmail.com",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rahim Yar Khan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Web Performance",
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("ahsan-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.dataset.theme="dark";document.documentElement.style.colorScheme="dark";}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper-texture text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-purple-200 selection:text-brand-purple">
        {children}
        <script
          type="application/ld+json"
          // Static, developer-authored structured data used by search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
