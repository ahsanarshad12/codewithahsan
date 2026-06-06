import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://ahsanarshad.dev"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Ahsan Arshad | Frontend Developer — React & Next.js",
  description:
    "Ahsan Arshad is a Frontend Developer from Rahim Yar Khan, Pakistan, specializing in React.js, Next.js, Tailwind CSS, and Laravel. Building fast, responsive, and beautiful web applications.",
  keywords: [
    "Ahsan Arshad",
    "Frontend Developer Pakistan",
    "React Developer Rahim Yar Khan",
    "Next.js Developer Pakistan",
    "Hire Frontend Developer Pakistan",
    "Web Developer Punjab Pakistan",
    "Tailwind CSS Developer",
    "Laravel Developer Pakistan",
    "Responsive Web Design",
    "UI Developer Pakistan",
    "Freelance Web Developer Pakistan",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Ahsan Arshad", url: BASE_URL }],
  creator: "Ahsan Arshad",
  publisher: "Ahsan Arshad",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Ahsan Arshad | Frontend Developer — React & Next.js",
    description:
      "Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Based in Rahim Yar Khan, Pakistan.",
    siteName: "Ahsan Arshad Portfolio",
    locale: "en_PK",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ahsan Arshad — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Arshad | Frontend Developer",
    description: "React, Next.js & Tailwind CSS developer from Pakistan.",
    creator: "@codewithahsan",
    images: ["/og-image.png"],
  },
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "add-your-google-search-console-token-here",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Ahsan Arshad",
      url: BASE_URL,
      email: "ahsanarshad291@gmail.com",
      jobTitle: "Frontend Developer",
      description: "Frontend Developer with expertise in React.js, Next.js, Tailwind CSS, and Laravel.",
      image: `${BASE_URL}/og-image.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rahim Yar Khan",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://linkedin.com/in/codewithahsan",
        "https://github.com/codewithahsan",
      ],
      knowsAbout: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Laravel", "PHP", "MySQL", "GitHub"],
      alumniOf: { "@type": "EducationalOrganization", name: "Islamia University of Bahawalpur" },
      worksFor: { "@type": "Organization", name: "G-Tech Solutions" },
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Ahsan Arshad — Frontend Developer Portfolio",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Ahsan Arshad — Frontend Developer Portfolio",
      author: { "@id": `${BASE_URL}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Ahsan Arshad — Web Development Services",
      url: BASE_URL,
      description: "Professional frontend web development services: React.js, Next.js, Tailwind CSS, responsive design.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rahim Yar Khan",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: ["Pakistan", "Australia", "United Kingdom", "United States"],
      serviceType: ["Frontend Development", "React.js Development", "Next.js Development", "Laravel Development"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "React.js / Next.js Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tailwind CSS UI Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laravel Backend Integration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Responsive Web Design" } },
        ],
      },
    },
    {
      "@type": "ItemList",
      name: "Selected Projects by Ahsan Arshad",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DigitalBar Website", description: "Business website built with Next.js and Tailwind CSS", url: BASE_URL },
        { "@type": "ListItem", position: 2, name: "G-Tech Partner Portal", description: "Dashboard and partner portal built with React and Laravel", url: BASE_URL },
        { "@type": "ListItem", position: 3, name: "SpeedyMove Platform", description: "Logistics UI built with Next.js and TypeScript", url: BASE_URL },
        { "@type": "ListItem", position: 4, name: "Workforce Management", description: "Admin panel built with React and Node.js", url: BASE_URL },
        { "@type": "ListItem", position: 5, name: "Butcher Meat Shop", description: "E-commerce store built with Next.js and Stripe", url: BASE_URL },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/#projects` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/#services` },
        { "@type": "ListItem", position: 4, name: "Contact", item: `${BASE_URL}/#contact` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are you available for freelance projects?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, I am available for freelance frontend development projects. I specialize in React.js, Next.js, and Tailwind CSS." },
        },
        {
          "@type": "Question",
          name: "What technologies do you work with?",
          acceptedAnswer: { "@type": "Answer", text: "I work with React.js, Next.js, Tailwind CSS, TypeScript, Laravel, PHP, and MySQL." },
        },
        {
          "@type": "Question",
          name: "Where are you based?",
          acceptedAnswer: { "@type": "Answer", text: "I am based in Rahim Yar Khan, Punjab, Pakistan, and work with clients globally." },
        },
        {
          "@type": "Question",
          name: "How can I hire you?",
          acceptedAnswer: { "@type": "Answer", text: "You can contact me through the contact form on my portfolio at ahsanarshad.dev or email me at ahsanarshad291@gmail.com." },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}