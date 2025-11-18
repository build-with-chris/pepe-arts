import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL('https://pepearts.vercel.app'),
  title: "PepeArts Collective - Zeitgenössischer Zirkus aus München",
  description: "PepeArts ist ein Künstler:innenkollektiv für zeitgenössischen Zirkus in München. Produktionen, Festival & Training – Zuhause im Pepe Dome im Ostpark.",
  keywords: "zeitgenössischer Zirkus, München, PepeArts, Freeman Festival, Pepe Dome, Artistik, Performance",
  authors: [{ name: "PepeArts Collective" }],
  icons: {
    icon: '/pepearts-logo.png',
    shortcut: '/pepearts-logo.png',
    apple: '/pepearts-logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/pepearts-logo.png',
    },
  },
  openGraph: {
    title: "PepeArts Collective - Zeitgenössischer Zirkus aus München",
    description: "PepeArts ist ein Künstler:innenkollektiv für zeitgenössischen Zirkus in München. Produktionen, Festival & Training – Zuhause im Pepe Dome im Ostpark.",
    url: "https://pepearts.de",
    siteName: "PepeArts",
    images: [
      {
        url: "/pepearts-logo.png",
        width: 1200,
        height: 630,
        alt: "PepeArts Collective Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PepeArts Collective - Zeitgenössischer Zirkus aus München",
    description: "PepeArts ist ein Künstler:innenkollektiv für zeitgenössischen Zirkus in München.",
    images: ["/pepearts-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}