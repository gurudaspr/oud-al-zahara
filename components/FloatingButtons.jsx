"use client";
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WA_NUMBER = "91XXXXXXXXXX"; // REPLACE WITH CLIENT WHATSAPP NUMBER

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp — always visible, bottom-right */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{
          bottom: 28,
          right: 24,
          width: 56,
          height: 56,
          background: "#25d366",
        }}
      >
        <MessageCircle size={26} fill="white" style={{ color: "white" }} />
      </a>

      {/* Scroll to top — bottom-left, appears after 400px */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          bottom: 28,
          left: 24,
          width: 48,
          height: 48,
          background: "rgba(232,201,109,0.15)",
          border: "1px solid rgba(232,201,109,0.4)",
          color: "#e8c96d",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
