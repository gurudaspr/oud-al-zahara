"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

function IgIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FbIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// REPLACE ALL PLACEHOLDER VALUES BELOW WITH CLIENT DETAILS
const CLIENT_PHONE = "+91 XXXXX XXXXX"; // REPLACE WITH CLIENT PHONE
const CLIENT_PHONE_HREF = "tel:+91XXXXXXXXXX"; // REPLACE WITH CLIENT PHONE
const CLIENT_WA = "https://wa.me/91XXXXXXXXXX"; // REPLACE WITH CLIENT WHATSAPP
const CLIENT_INSTAGRAM = "https://instagram.com/oudalzahara"; // REPLACE WITH CLIENT INSTAGRAM
const CLIENT_FACEBOOK = "https://facebook.com/oudalzahara"; // REPLACE WITH CLIENT FACEBOOK

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "#0d0d0d" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "var(--font-inter)" }}
          >
            Come Visit Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#e8c96d" }}
          >
            Find Us &amp; Contact
          </h2>
          <div
            className="mx-auto w-16 h-0.5"
            style={{ background: "linear-gradient(to right, #e8c96d, #c9a84c)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Map + address */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden mb-6" style={{ height: 280 }}>
              <iframe
                src="https://maps.google.com/maps?q=Connaught+Place+New+Delhi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="Store Location"
              />
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={18} style={{ color: "#e8c96d", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}>
                  Shop 14, The Pearl Arcade, Block A,
                </p>
                <p style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}>
                  Connaught Place, New Delhi — 110001
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock size={18} style={{ color: "#e8c96d", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}>
                  Mon – Sat: 10:00 AM – 9:00 PM
                </p>
                <p style={{ color: "#888888", fontFamily: "var(--font-inter)", fontSize: 13 }}>
                  Sunday: 11:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
            style={{ transitionDelay: "0.15s" }}
          >
            <ContactItem
              icon={Phone}
              label="Call Us"
              value={CLIENT_PHONE}
              href={CLIENT_PHONE_HREF}
              color="#e8c96d"
            />
            <ContactItem
              icon={MessageCircle}
              label="WhatsApp"
              value="Chat with us · Usually replies in minutes"
              href={CLIENT_WA}
              color="#25d366"
            />
            <ContactItem
              icon={IgIcon}
              label="Instagram"
              value="@oudalzahara"
              href={CLIENT_INSTAGRAM}
              color="#e1306c"
            />
            <ContactItem
              icon={FbIcon}
              label="Facebook"
              value="Oud Al Zahara"
              href={CLIENT_FACEBOOK}
              color="#1877f2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 group"
      style={{
        background: "#141414",
        border: "1px solid rgba(232,201,109,0.08)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}55`;
        e.currentTarget.style.background = "#1a1a1a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(232,201,109,0.08)";
        e.currentTarget.style.background = "#141414";
      }}
    >
      <div
        className="p-3 rounded-xl flex-shrink-0"
        style={{ background: `${color}18` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <p
          className="text-xs uppercase tracking-widest mb-0.5"
          style={{ color: "#888888", fontFamily: "var(--font-inter)" }}
        >
          {label}
        </p>
        <p
          className="text-sm font-medium"
          style={{ color: "#cccccc", fontFamily: "var(--font-inter)" }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}
