import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inhale Vape NZ | Premium Vape Shop in Christchurch",
  description: "Christchurch's premier vape shop offering a wide selection of quality vaping products, e-liquids, and accessories. Visit Inhale Vape NZ for expert advice and top brands.",
  keywords: "vape shop Christchurch, vaping NZ, e-cigarettes Christchurch, vape store New Zealand, e-liquids, vape products",
  authors: [{ name: "Inhale Vape NZ" }],
  openGraph: {
    title: "Inhale Vape NZ | Premium Vape Shop in Christchurch",
    description: "Christchurch's premier vape shop offering quality vaping products and expert service.",
    url: "https://www.inhale.co.nz",
    siteName: "Inhale Vape NZ",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inhale Vape NZ | Premium Vape Shop in Christchurch",
    description: "Christchurch's premier vape shop offering quality vaping products and expert service.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}