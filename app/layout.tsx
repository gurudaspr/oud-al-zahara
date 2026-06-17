import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oud Al Zahara — Premium Oud Perfumes & Attars",
  description:
    "Discover hand-crafted oud perfumes and attars sourced from the heart of Arabia. Authentic, long-lasting fragrances delivered to your door.",
  keywords: "oud, attar, perfume, Arabian fragrance, luxury perfume, oud oil, Indian oud, premium attar",
  openGraph: {
    title: "Oud Al Zahara — The Essence of Arabia",
    description:
      "Premium hand-crafted oud perfumes and attars. Authentic Arabian fragrances, ethically sourced.",
    type: "website",
    locale: "en_IN",
    siteName: "Oud Al Zahara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oud Al Zahara — Premium Oud Perfumes & Attars",
    description: "Premium hand-crafted oud perfumes and attars sourced from the heart of Arabia.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Oud Al Zahara",
  description: "Premium hand-crafted oud perfumes and attars sourced from the heart of Arabia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 14, The Pearl Arcade, Block A",
    addressLocality: "Connaught Place",
    addressRegion: "New Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased" style={{ background: "#0a0a0a" }}>
        {children}
      </body>
    </html>
  );
}
