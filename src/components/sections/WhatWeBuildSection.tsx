import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    num: "01",
    tag: "( CLAUDE · RAG · MCP )",
    title: "Agents &\napplied AI",
    desc: "Autonomous workers for real roles — they answer tickets, process invoices and watch your dashboards. Grounded in your data, with citations, guardrails and cost control.",
    bullets: ["Support agents", "Docs-grounded RAG", "Ops monitors", "Custom MCP servers"],
    timeline: "LIVE IN 3-5 WEEKS",
    bg: "#0a0a0a",
    textColor: "#fff",
    dark: true,
    Diagram: RAGDiagram,
  },
  {
    num: "02",
    tag: "( AUTH · BILLING · AI CORE )",
    title: "SaaS products",
    desc: "Full products end to end — auth, billing, dashboards and the AI layer, engineered to scale from day one.",
    bullets: ["MVPs that survive users", "Internal tools", "AI inside your existing product"],
    timeline: "LIVE IN 6-10 WEEKS",
    bg: "#8893d4",
    textColor: "#0a0a0a",
    dark: false,
    Diagram: SaaSAnimation,
  },
  {
    num: "03",
    tag: "( DESIGN · BUILD · SHIP )",
    title: "Web & apps",
    desc: "Websites that load before you blink, apps people actually keep — and living interfaces like this one, mascot included.",
    bullets: ["Marketing sites & e-commerce", "Mobile & desktop apps", "Creative WebGL builds"],
    timeline: "LIVE IN 2-6 WEEKS",
    bg: "#e8e8f0",
    textColor: "#0a0a0a",
    dark: false,
    Diagram: WebAppsDiagram,
  },
];

function RAGDiagram() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          fontSize: 11,
          color: "#8893d4",
          fontFamily: "monospace",
          letterSpacing: "0.08em",
        }}
      >
        retrieval · query + cited answer
      </div>
      <svg width="100%" height="100%" viewBox="0 0 400 220" style={{ marginTop: 32 }}>
        <motion.rect x="20" y="60" width="100" height="44" rx="8"
          fill="none" stroke="#8893d4" strokeWidth="1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
        <text x="70" y="87" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Inter">query</text>

        <motion.rect x="155" y="48" width="110" height="52" rx="8"
          fill="#8893d4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
        <text x="210" y="79" textAnchor="middle" fill="#0a0a0a" fontSize="13" fontFamily="Inter" fontWeight="bold">rerank</text>

        <motion.rect x="20" y="148" width="100" height="44" rx="8"
          fill="none" stroke="#8893d4" strokeWidth="1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <text x="70" y="175" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Inter">vectors</text>

        <motion.rect x="280" y="148" width="100" height="44" rx="8"
          fill="none" stroke="#8893d4" strokeWidth="1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        <text x="330" y="175" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Inter">sources</text>

        <motion.line x1="120" y1="82" x2="155" y2="82" stroke="#8893d4" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.4 }} />
        <motion.line x1="210" y1="100" x2="210" y2="148" stroke="#8893d4" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.4 }} />
        <motion.line x1="160" y1="148" x2="120" y2="170" stroke="#8893d4" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.4 }} />
        <motion.line x1="260" y1="148" x2="280" y2="170" stroke="#8893d4" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.4 }} />
      </svg>
    </div>
  );
}

function SaaSAnimation() {
  const [toggle, setToggle] = useState(false);
  const rows = ["user_id", "amount", "email"];

  useEffect(() => {
    const iv = setInterval(() => setToggle((t) => !t), 1800);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ padding: 20, height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: 12, color: "#555", fontFamily: "monospace" }}>
        <span>records</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: toggle ? "#555" : "#ccc", fontSize: 11 }}>synthetic</span>
          <div style={{ width: 36, height: 20, borderRadius: 10, background: toggle ? "#8893d4" : "#444", position: "relative", transition: "background 0.3s", cursor: "pointer" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: toggle ? 18 : 2, transition: "left 0.3s" }} />
          </div>
          <span style={{ color: toggle ? "#ccc" : "#555", fontSize: 11 }}>live</span>
        </div>
      </div>
      {rows.map((row, i) => (
        <div key={row} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 12, color: "#666", fontFamily: "monospace", width: 56, flexShrink: 0 }}>{row}</span>
          <div style={{ flex: 1, height: 14, borderRadius: 4, background: "#1a1a1a", overflow: "hidden" }}>
            <motion.div
              animate={{ width: toggle ? ["55%", "85%", "55%"] : ["75%", "40%", "75%"] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
              style={{ height: "100%", background: "repeating-linear-gradient(45deg, #3a3a3a 0px, #3a3a3a 4px, #2a2a2a 4px, #2a2a2a 8px)", borderRadius: 4 }}
            />
          </div>
        </div>
      ))}
      <div style={{ fontSize: 11, color: "#8893d4", fontFamily: "monospace", marginTop: 12 }}>
        ✓ auth · billing · dashboards — wired
      </div>
    </div>
  );
}

function WebAppsDiagram() {
  const bars = [88, 95, 72, 85, 68, 90, 75];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 11, fontFamily: "monospace" }}>
        <span style={{ color: "#666" }}>deploy · monitor · last 30d</span>
        <span style={{ color: "#4ade80", fontWeight: 600 }}>99.9% uptime</span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 10, paddingBottom: 12 }}>
        {bars.map((h, i) => {
          const animated = ((tick + i) % 3 === 0) ? h * 0.6 : h;
          return (
            <motion.div
              key={i}
              animate={{ height: `${animated}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                flex: 1,
                background: i % 2 === 0 ? "#8893d4" : "#4a4e7c",
                borderRadius: "4px 4px 0 0",
                minHeight: 8,
              }}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {[["2,847 builds", "#333"], ["98 lighthouse", "#333"], ["0 errors", "#4ade80"]].map(([label, color]) => (
          <div key={label} style={{ background: color, borderRadius: 4, padding: "3px 8px", fontSize: 10, fontFamily: "monospace", color: label === "0 errors" ? "#0a0a0a" : "#aaa" }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function NavDots({ active, count, dark }: { active: number; count: number; dark: boolean }) {
  const activeColor = dark ? "#8893d4" : "#0a0a0a";
  const inactiveColor = dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{
          fontSize: 12,
          fontFamily: "monospace",
          color: i === active ? activeColor : inactiveColor,
          fontWeight: i === active ? 700 : 400,
          letterSpacing: "0.04em",
        }}>
          {String(i + 1).padStart(2, "0")}
          <span style={{ marginLeft: 4, letterSpacing: 0, color: i === active ? activeColor : inactiveColor }}>
            {i === active ? "———" : "—"}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollInSection = -rect.top;
      const totalScroll = section.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollInSection / totalScroll));
      const cardIndex = Math.min(Math.floor(progress * cards.length), cards.length - 1);
      setActiveCard(cardIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("whatwebuild:cardchange", { detail: { dark: cards[activeCard].dark } })
    );
  }, [activeCard]);

  const cardContent = (card: typeof cards[0], i: number) => (
    <>
      <NavDots active={i} count={cards.length} dark={card.dark} />
      <div style={{ fontSize: 11, letterSpacing: "0.12em", color: card.dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)", fontFamily: "Inter, sans-serif", marginBottom: 14 }}>
        {card.tag}
      </div>
      <div style={{ fontFamily: '"DynaPuff", sans-serif', fontSize: isMobile ? "clamp(36px, 9vw, 56px)" : "clamp(44px, 5.5vw, 78px)", color: card.textColor, lineHeight: 1.0, marginBottom: 20, whiteSpace: "pre-line" }}>
        {card.title}
      </div>
      <p style={{ fontSize: 14, color: card.dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)", lineHeight: 1.65, fontFamily: "Inter, sans-serif", marginBottom: 20, maxWidth: 420 }}>
        {card.desc}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
        {card.bullets.map((b) => (
          <div key={b} style={{ fontSize: 12, fontFamily: "monospace", color: card.dark ? "#8893d4" : "rgba(0,0,0,0.6)", letterSpacing: "0.04em" }}>
            → {b}
          </div>
        ))}
      </div>
      <div style={{ display: "inline-block", border: `1.5px solid ${card.dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)"}`, borderRadius: 999, padding: "8px 20px", fontSize: 11, letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", color: card.dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}>
        {card.timeline}
      </div>
    </>
  );

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      style={{ height: `${cards.length * 100}vh`, position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {cards.map((card, i) =>
            i === activeCard ? (
              <motion.div
                key={i}
                initial={{ y: "100%", scale: 0.96 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ scale: 0.91, opacity: 0.5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "absolute", inset: 0, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
              >
                {isMobile ? (
                  /* Mobile: single column, text top, diagram bottom */
                  <div style={{ width: "100%", padding: "20px 20px 0", overflowY: "auto", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ flex: "0 0 auto" }}>
                      {cardContent(card, i)}
                    </div>
                    <div style={{ flex: "0 0 auto", marginTop: 20, background: "#0e0e0e", borderRadius: 16, overflow: "hidden", height: 180, position: "relative" }}>
                      <card.Diagram />
                    </div>
                  </div>
                ) : (
                  /* Desktop: two columns */
                  <div style={{ display: "flex", alignItems: "center", gap: 48, width: "100%", maxWidth: 1160, padding: "0 80px" }}>
                    <div style={{ flex: "0 0 42%", minWidth: 0 }}>
                      {cardContent(card, i)}
                    </div>
                    <div style={{ flex: "1 1 0", minWidth: 0, background: "#0e0e0e", borderRadius: 20, overflow: "hidden", height: "min(340px, 52vh)", position: "relative" }}>
                      <card.Diagram />
                    </div>
                  </div>
                )}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
