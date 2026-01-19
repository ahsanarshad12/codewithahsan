import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahsan Arshad - Full Stack Developer",
  description: "Full Stack Developer specializing in Laravel and Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="/logo.png" sizes="16x16" href="/favicon-16x16.png" />

      </head>

      <body className="bg-gray-50 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}