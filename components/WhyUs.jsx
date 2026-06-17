"use client";
import { motion } from "framer-motion";
import { Leaf, Timer, Heart, Truck } from "lucide-react";

const features = [
  { icon: Leaf, title: "Pure Oud", desc: "100% authentic oud oil, ethically sourced from the finest regions." },
  { icon: Timer, title: "Long Lasting", desc: "Our attars are crafted to stay with you from morning to midnight." },
  { icon: Heart, title: "Hand Crafted", desc: "Every bottle is blended by hand using time-honored techniques." },
  { icon: Truck, title: "Fast Delivery", desc: "Swift, safe shipping with elegant packaging to your doorstep." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-24 px-6"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
          >
            Our Promise
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            Why Choose Us
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
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl p-6 flex flex-col items-center text-center"
              style={{
                background: "#141414",
                border: "1px solid rgba(232,201,109,0.08)",
              }}
            >
              <div
                className="mb-5 p-4 rounded-full"
                style={{ background: "rgba(232,201,109,0.08)" }}
              >
                <Icon size={30} style={{ color: "#e8c96d" }} strokeWidth={1.5} />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#888888", fontFamily: "var(--font-inter)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
