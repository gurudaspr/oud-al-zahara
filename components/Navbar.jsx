"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const WA_NUMBER = "91XXXXXXXXXX"; // REPLACE WITH CLIENT WHATSAPP NUMBER

const NAV_LINKS = ["Home", "Collection", "About", "Contact"];
const SECTION_MAP = { Home: "hero", Collection: "collection", About: "about", Contact: "contact" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, label) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(SECTION_MAP[label])?.scrollIntoView({ behavior: "smooth" });
  };

  const navStyle = {
    background: scrolled ? "rgba(8,8,8,0.78)" : "transparent",
    backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
    borderBottom: scrolled ? "1px solid rgba(232,201,109,0.14)" : "1px solid transparent",
    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
    transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={navStyle}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNav(e, "Home")} className="flex items-center gap-3">
          <Image src="/logo.png" alt="Oud Al Zahara" width={40} height={40} className="rounded-full" />
          <span
            className="text-lg font-bold tracking-widest hidden sm:block"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d", letterSpacing: "0.15em" }}
          >
            Oud Al Zahara
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={(e) => handleNav(e, l)}
                  className="text-xs tracking-widest uppercase"
                  style={{
                    color: "#888",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.14em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c96d")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider"
            style={{
              background: "linear-gradient(135deg, #e8c96d, #c9a84c)",
              color: "#0a0a0a",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.08em",
              transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,201,109,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ color: "#e8c96d", transition: "opacity 0.2s" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? "320px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <ul className="flex flex-col px-6 pt-4 pb-6 gap-5">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="text-sm tracking-widest uppercase block"
                style={{ color: "#cccccc", fontFamily: "var(--font-inter)", letterSpacing: "0.14em" }}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider"
              style={{
                background: "linear-gradient(135deg, #e8c96d, #c9a84c)",
                color: "#0a0a0a",
                fontFamily: "var(--font-inter)",
              }}
            >
              Order on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
