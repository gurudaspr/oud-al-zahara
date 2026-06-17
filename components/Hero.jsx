"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", minHeight: "100dvh" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1762541115443-d83816da748c?w=1600&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.58)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* Content — CSS animations, no JS dependency */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo — hidden on mobile */}
        <div className="hero-scale-in mb-7 hidden md:block" style={{ animationDelay: "0s" }}>
          <Image
            src="/logo.png"
            alt="Oud Al Zahara logo"
            width={110}
            height={110}
            className="rounded-full gold-pulse"
            style={{
              boxShadow: "0 0 48px rgba(232,201,109,0.55)",
              border: "2px solid rgba(232,201,109,0.4)",
            }}
          />
        </div>

        {/* Title */}
        <h1
          className="hero-fade-up text-5xl md:text-7xl font-bold mb-4 gold-pulse"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#e8c96d",
            letterSpacing: "0.08em",
            textShadow: "0 0 80px rgba(232,201,109,0.35)",
            animationDelay: "0.35s",
          }}
        >
          Oud Al Zahara
        </h1>

        {/* Tagline */}
        <p
          className="hero-fade-up text-xl md:text-2xl mb-3 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#c9a84c",
            letterSpacing: "0.22em",
            animationDelay: "0.55s",
          }}
        >
          The Essence of Arabia
        </p>

        {/* Divider */}
        <div
          className="hero-expand-x mt-6 w-28 h-px"
          style={{
            background: "linear-gradient(to right, transparent, #e8c96d, transparent)",
            animationDelay: "0.75s",
          }}
        />

        {/* CTA buttons */}
        <div
          className="hero-fade-up flex flex-wrap justify-center gap-4 mt-8"
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={() => scrollTo("collection")}
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #e8c96d, #c9a84c)",
              color: "#0a0a0a",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,201,109,0.55)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Explore Collection
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300"
            style={{
              border: "1px solid rgba(232,201,109,0.45)",
              color: "#e8c96d",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.1em",
              background: "rgba(232,201,109,0.06)",
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(232,201,109,0.14)";
              e.currentTarget.style.borderColor = "rgba(232,201,109,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(232,201,109,0.06)";
              e.currentTarget.style.borderColor = "rgba(232,201,109,0.45)";
            }}
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll chevron */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-fade-in hero-chevron"
        aria-label="Scroll down"
        style={{
          color: "#e8c96d",
          background: "none",
          border: "none",
          cursor: "pointer",
          animationDelay: "1.8s",
        }}
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
}
