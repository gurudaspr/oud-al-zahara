"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "The best oud I've ever smelled. Truly authentic!",
    author: "Ahmed K.",
  },
  {
    quote: "Lasted the whole day. Brilliant quality for the price.",
    author: "Priya R.",
  },
  {
    quote: "Fast delivery and beautiful packaging. Will order again.",
    author: "Mohammed S.",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0.01, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="#e8c96d" style={{ color: "#e8c96d" }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
          >
            Customer Love
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            What They Say
          </h2>
          <div
            className="mx-auto w-16 h-0.5"
            style={{ background: "linear-gradient(to right, #e8c96d, #c9a84c)" }}
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.map(({ quote, author }) => (
            <motion.div
              key={author}
              variants={card}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "#141414",
                border: "1px solid rgba(232,201,109,0.1)",
              }}
            >
              <Stars />
              {/* Quote mark */}
              <span
                className="text-5xl leading-none mb-3 -mt-2"
                style={{ color: "#e8c96d", fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;
              </span>
              <p
                className="text-base leading-relaxed flex-1 -mt-4"
                style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}
              >
                {quote}
              </p>
              <p
                className="mt-5 text-sm font-semibold"
                style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
              >
                — {author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
