"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";

const WA_NUMBER = "91XXXXXXXXXX"; // REPLACE WITH CLIENT WHATSAPP NUMBER

const BADGE_COLORS = {
  Bestseller: { bg: "rgba(232,201,109,0.15)", border: "rgba(232,201,109,0.5)", text: "#e8c96d" },
  New:        { bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.45)",  text: "#4ade80" },
  Signature:  { bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.45)", text: "#a78bfa" },
  Limited:    { bg: "rgba(251,146,60,0.12)",  border: "rgba(251,146,60,0.45)",  text: "#fb923c" },
};

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0.01, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Collection() {
  return (
    <section id="collection" className="py-20 px-6 md:px-10" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "var(--font-inter)", letterSpacing: "0.3em" }}
          >
            Handpicked Fragrances
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            Our Collection
          </h2>
          <div
            className="mx-auto w-24 h-px"
            style={{ background: "linear-gradient(to right, transparent, #e8c96d, transparent)" }}
          />
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
        >
          {products.map((p) => {
            const badge = p.badge ? BADGE_COLORS[p.badge] : null;
            return (
              <motion.div
                key={p.id}
                variants={card}
                className="group rounded-2xl overflow-hidden flex flex-col cursor-default"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  transition: "border-color 0.4s, box-shadow 0.4s, transform 0.4s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,201,109,0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(232,201,109,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image with overlay */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.7s ease" }}
                    unoptimized
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />

                  {/* Scrim — strong at bottom for text legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 100%)",
                    }}
                  />

                  {/* Badge */}
                  {badge && (
                    <span
                      className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full tracking-widest uppercase"
                      style={{
                        background: badge.bg,
                        border: `1px solid ${badge.border}`,
                        color: badge.text,
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {p.badge}
                    </span>
                  )}

                  {/* Name + desc overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3
                      className="font-bold mb-0.5"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#e8c96d",
                        fontSize: "0.95rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-xs leading-snug"
                      style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontSize: "0.72rem" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Footer: price + CTA */}
                <div
                  className="flex items-center justify-between px-3 py-2.5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
                  >
                    {p.price}
                  </span>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 rounded-xl font-medium tracking-wider transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-inter)",
                      background: "linear-gradient(135deg, #e8c96d, #c9a84c)",
                      color: "#0a0a0a",
                      letterSpacing: "0.06em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = "0 4px 16px rgba(232,201,109,0.45)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  >
                    Enquire →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
