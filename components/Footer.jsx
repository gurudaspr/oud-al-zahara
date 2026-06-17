"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// REPLACE WITH CLIENT SOCIAL LINKS
const WA_NUMBER = "91XXXXXXXXXX";
const INSTAGRAM = "https://instagram.com/oudalzahara";
const FACEBOOK = "https://facebook.com/oudalzahara";

function IgIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FbIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socials = [
  { icon: IgIcon, href: INSTAGRAM, label: "Instagram" },
  { icon: FbIcon, href: FACEBOOK, label: "Facebook" },
  { icon: MessageCircle, href: `https://wa.me/${WA_NUMBER}`, label: "WhatsApp" },
];

const navLinks = ["Home", "Collection", "About", "Contact"];
const SECTION_MAP = { Home: "hero", Collection: "collection", About: "about", Contact: "contact" };

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (label) =>
    document.getElementById(SECTION_MAP[label])?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{ background: "#0d0d0d", borderTop: "1px solid rgba(232,201,109,0.1)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/logo.png" alt="Oud Al Zahara" width={44} height={44} className="rounded-full" />
              <span
                className="text-lg font-bold tracking-widest"
                style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d", letterSpacing: "0.15em" }}
              >
                Oud Al Zahara
              </span>
            </div>
            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "#666", fontFamily: "var(--font-inter)" }}
            >
              Premium hand-crafted oud perfumes and attars, rooted in Arabian tradition.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4 text-center md:text-left"
              style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {navLinks.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="text-sm"
                    style={{
                      color: "#888",
                      fontFamily: "var(--font-inter)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c96d")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
            >
              Follow Us
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full"
                  style={{
                    background: "rgba(232,201,109,0.07)",
                    color: "#888",
                    border: "1px solid rgba(232,201,109,0.1)",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(232,201,109,0.15)";
                    e.currentTarget.style.color = "#e8c96d";
                    e.currentTarget.style.borderColor = "rgba(232,201,109,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(232,201,109,0.07)";
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.borderColor = "rgba(232,201,109,0.1)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "rgba(232,201,109,0.08)" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#444", fontFamily: "var(--font-inter)" }}>
            © {year} Oud Al Zahara. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#444", fontFamily: "var(--font-inter)" }}>
            Crafted with care · The Essence of Arabia
          </p>
        </div>

      </div>
    </footer>
  );
}
