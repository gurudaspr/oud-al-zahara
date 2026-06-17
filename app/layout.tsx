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
    "Discover the finest hand-crafted oud perfumes and attars sourced from the heart of Arabia. Oud Al Zahara — The Essence of Arabia.",
  keywords: "oud, attar, perfume, Arabian fragrance, luxury perfume",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased" style={{ background: "#0a0a0a" }}>
        {children}
      </body>
    </html>
  );
}
