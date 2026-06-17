"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background — static on mobile, no scroll tracking */}
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/logo.png"
            alt="Oud Al Zahara logo"
            width={110}
            height={110}
            className="rounded-full mb-7 gold-pulse"
            style={{
              boxShadow: "0 0 48px rgba(232,201,109,0.55)",
              border: "2px solid rgba(232,201,109,0.4)",
            }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "#c9a84c", fontFamily: "var(--font-inter)", letterSpacing: "0.38em" }}
        >
          Est. 2024 · Premium Oud House
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold mb-4 gold-pulse"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#e8c96d",
            letterSpacing: "0.08em",
            textShadow: "0 0 80px rgba(232,201,109,0.35)",
          }}
        >
          Oud Al Zahara
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-3 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-playfair)", color: "#c9a84c", letterSpacing: "0.22em" }}
        >
          The Essence of Arabia
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-sm tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-inter)",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.28em",
          }}
        >
          Premium Oud Perfumes &amp; Attars
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.25, ease: "easeOut" }}
          className="mt-8 w-28 h-px"
          style={{
            background: "linear-gradient(to right, transparent, #e8c96d, transparent)",
            transformOrigin: "center",
          }}
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mt-8"
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
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{ color: "#e8c96d", background: "none", border: "none", cursor: "pointer" }}
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
