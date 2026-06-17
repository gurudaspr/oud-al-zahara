"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = ["Home", "Collection", "About", "Contact"];

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
    const map = {
      Home: "hero",
      Collection: "collection",
      About: "about",
      Contact: "contact",
    };
    const el = document.getElementById(map[label]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(232,201,109,0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "Home")}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Oud Al Zahara"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span
            className="text-xl font-bold tracking-widest"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#e8c96d",
              letterSpacing: "0.15em",
            }}
          >
            Oud Al Zahara
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="text-sm tracking-widest uppercase transition-colors duration-200"
                style={{
                  color: "#888888",
                  fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#e8c96d")}
                onMouseLeave={(e) => (e.target.style.color = "#888888")}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#e8c96d" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "300px" : "0",
          background: "rgba(10,10,10,0.97)",
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-5">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="text-sm tracking-widest uppercase"
                style={{ color: "#e8c96d", fontFamily: "var(--font-inter)" }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
