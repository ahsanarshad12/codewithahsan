import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/lib/smoothScroll";

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

export const metadata: Metadata = {
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
    "codewithahsan",
  ],
  authors: [{ name: "Ahsan Arshad", url: "https://ahsanarshad.dev" }],
  creator: "Ahsan Arshad",
  publisher: "Ahsan Arshad",
  openGraph: {
    type: "website",
    url: "https://ahsanarshad.dev",
    title: "Ahsan Arshad | Frontend Developer — React & Next.js",
    description:
      "Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Based in Rahim Yar Khan, Pakistan.",
    siteName: "Ahsan Arshad Portfolio",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Arshad | Frontend Developer",
    description: "React, Next.js & Tailwind CSS developer from Pakistan.",
    creator: "@codewithahsan",
  },
  alternates: { canonical: "https://ahsanarshad.dev" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ahsanarshad.dev/#person",
      name: "Ahsan Arshad",
      url: "https://ahsanarshad.dev",
      email: "ahsanarshad291@gmail.com",
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer with expertise in React.js, Next.js, Tailwind CSS, and Laravel.",
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
      knowsAbout: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Laravel",
        "PHP",
        "MySQL",
        "GitHub",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Islamia University of Bahawalpur",
      },
      worksFor: { "@type": "Organization", name: "G-Tech Solutions" },
    },
    {
      "@type": "WebSite",
      "@id": "https://ahsanarshad.dev/#website",
      url: "https://ahsanarshad.dev",
      name: "Ahsan Arshad — Frontend Developer Portfolio",
      author: { "@id": "https://ahsanarshad.dev/#person" },
    },
    {
      "@type": "ProfessionalService",
      name: "Ahsan Arshad — Web Development Services",
      url: "https://ahsanarshad.dev",
      description:
        "Professional frontend web development services: React.js, Next.js, Tailwind CSS, responsive design.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rahim Yar Khan",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: ["Pakistan", "Australia", "United Kingdom", "United States"],
      serviceType: [
        "Frontend Development",
        "React.js Development",
        "Next.js Development",
        "Laravel Development",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
