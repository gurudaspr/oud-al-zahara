"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

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

// REPLACE WITH CLIENT SOCIAL LINKS
const socials = [
  { icon: IgIcon, href: "https://instagram.com/oudalzahara", label: "Instagram" },
  { icon: FbIcon, href: "https://facebook.com/oudalzahara", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

const navLinks = ["Home", "Collection", "About", "Contact"];

export default function Footer() {
  const handleNav = (label) => {
    const map = { Home: "hero", Collection: "collection", About: "about", Contact: "contact" };
    document.getElementById(map[label])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-14 pb-8 px-6"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(232,201,109,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="Oud Al Zahara" width={48} height={48} className="rounded-full" />
          <span
            className="text-xl font-bold tracking-widest"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            Oud Al Zahara
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-sm mb-8 tracking-widest uppercase"
          style={{ color: "#888888", fontFamily: "var(--font-inter)" }}
        >
          The Essence of Arabia
        </p>

        {/* Social icons */}
        <div className="flex gap-5 mb-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full transition-all duration-300"
              style={{
                background: "rgba(232,201,109,0.08)",
                color: "#888888",
                border: "1px solid rgba(232,201,109,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(232,201,109,0.18)";
                e.currentTarget.style.color = "#e8c96d";
                e.currentTarget.style.borderColor = "rgba(232,201,109,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(232,201,109,0.08)";
                e.currentTarget.style.color = "#888888";
                e.currentTarget.style.borderColor = "rgba(232,201,109,0.1)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{
                color: "#888888",
                fontFamily: "var(--font-inter)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#e8c96d")}
              onMouseLeave={(e) => (e.target.style.color = "#888888")}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full max-w-xs h-px mb-6"
          style={{ background: "rgba(232,201,109,0.1)" }}
        />

        <p
          className="text-xs"
          style={{ color: "#555555", fontFamily: "var(--font-inter)" }}
        >
          © 2025 Oud Al Zahara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
