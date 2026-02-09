import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgeGate from "./components/AgeGate";

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
  description:
    "Christchurch's premier vape shop offering a wide selection of quality vaping products, e-liquids, and accessories. Visit Inhale Vape NZ for expert advice and top brands.",
  keywords:
    "vape shop Christchurch, vaping NZ, e-cigarettes Christchurch, vape store New Zealand, e-liquids, vape products",
  authors: [{ name: "Inhale Vape NZ" }],
  openGraph: {
    title: "Inhale Vape NZ | Premium Vape Shop in Christchurch",
    description:
      "Christchurch's premier vape shop offering quality vaping products and expert service.",
    url: "https://www.inhale.co.nz",
    siteName: "Inhale Vape NZ",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/InhaleVapeLogo.png",
        width: 1000,
        height: 500,
        alt: "Inhale Vape NZ - Premium Vape Shop in Christchurch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inhale Vape NZ | Premium Vape Shop in Christchurch",
    description:
      "Christchurch's premier vape shop offering quality vaping products and expert service.",
    images: ["/InhaleVapeLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.inhale.co.nz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}