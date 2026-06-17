"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1];

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
            alt="Oud incense shop"
            fill
            className="object-cover"
            unoptimized
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(232,201,109,0.15)",
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Small label */}
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
          >
            Who We Are
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            Our Story
          </h2>

          {/* Gold divider */}
          <div
            className="w-16 h-0.5 mb-6"
            style={{ background: "linear-gradient(to right, #e8c96d, #c9a84c)" }}
          />

          <p
            className="text-base leading-relaxed mb-5"
            style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}
          >
            At Oud Al Zahara, we bring you the finest hand-crafted oud perfumes
            and attars sourced from the heart of Arabia. Each fragrance is a
            journey — rich, timeless, and deeply personal.
          </p>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#888888", fontFamily: "var(--font-inter)" }}
          >
            Our master perfumers blend rare woods, precious resins, and
            centuries-old traditions into every bottle. We believe that true
            luxury is felt on the skin — not just seen on a shelf.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "50+", label: "Fragrances" },
              { value: "500+", label: "Happy Customers" },
              { value: "100%", label: "Authentic Oud" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl p-4 text-center"
                style={{ background: "rgba(232,201,109,0.06)", border: "1px solid rgba(232,201,109,0.1)" }}
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#888", fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
