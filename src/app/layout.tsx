import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoraTech RWA - Real World Asset Solutions",
  description: "We are dedicated to providing solutions that designed to be a modular, compliant, and user-friendly infrastructure for issuing, trading, and governing tokenized RWAs.",
  keywords: "SoraTech, RWA, Real World Assets, DeFi, Blockchain, Tokenization, Solana",
  authors: [{ name: "SoraTech" }],
  openGraph: {
    title: "SoraTech RWA - Real World Asset Solutions",
    description: "Modular, compliant, and user-friendly infrastructure for tokenized RWAs",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "SoraTech RWA",
    description: "Real World Asset Solutions on Solana",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="font"
          href="/assets/fonts/satoshi/Satoshi-Variable.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Canonical */}
        {process.env.NEXT_PUBLIC_SITE_URL && (
          <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
