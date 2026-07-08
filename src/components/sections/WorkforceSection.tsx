import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CursorFollowingEyes from "../CursorFollowingEyes";

const stats = [
  { value: 18, suffix: "+", label: "YEARS SHIPPING" },
  { value: 5, suffix: "+", label: "AI SYSTEMS LIVE" },
  { value: 352, suffix: "K+", label: "OPEN SOURCE DOWNLOADS" },
  { value: 4, prefix: "<", suffix: "w", label: "TO FIRST DEPLOY" },
];

const agentCards = [
  { id: "BIT-01", role: "Knowledge answers", shift: "24/7 · no breaks", salary: "cents per answer",    desc: "Answers from your docs — always with sources." },
  { id: "BIT-02", role: "Ticket resolution",  shift: "24/7 · no breaks", salary: "$0.004 / ticket",   desc: "Handles support tickets with human escalation." },
  { id: "BIT-03", role: "Data extraction",    shift: "24/7 · no breaks", salary: "per 1K rows",        desc: "Extracts structured data from any document." },
  { id: "BIT-04", role: "QA & regression",    shift: "24/7 · no breaks", salary: "tokens, not salary", desc: "Runs every test. Never skips one." },
  { id: "BIT-05", role: "Content generation", shift: "24/7 · no breaks", salary: "tokens, not salary", desc: "SEO-optimized content at scale." },
];

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count;
}

function Particle({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.14)",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
    />
  );
}

function StatCounter({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(stat.value, started);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: '"DynaPuff", sans-serif', fontSize: "clamp(48px, 6vw, 80px)", color: "#8893d4", lineHeight: 1, marginBottom: 8 }}>
        {stat.prefix || ""}{count}{stat.suffix}
      </div>
      <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", fontFamily: "Inter" }}>
        {stat.label}
      </div>
    </div>
  );
}

// Fixed tilt slots for the cards sitting behind the top card (tilt left = negative rotation)
const BACK_SLOTS = [
  { rotate: -4,  x: -10, y: 10 },
  { rotate: -7,  x: -18, y: 18 },
  { rotate: -10, x: -26, y: 24 },
];

function QRIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="2" stroke="#0a0a0a" strokeWidth="2"/>
      <rect x="5" y="5" width="8" height="8" rx="1" fill="#0a0a0a"/>
      <rect x="22" y="2" width="14" height="14" rx="2" stroke="#0a0a0a" strokeWidth="2"/>
      <rect x="25" y="5" width="8" height="8" rx="1" fill="#0a0a0a"/>
      <rect x="2" y="22" width="14" height="14" rx="2" stroke="#0a0a0a" strokeWidth="2"/>
      <rect x="5" y="25" width="8" height="8" rx="1" fill="#0a0a0a"/>
      <rect x="22" y="22" width="4" height="4" fill="#0a0a0a"/>
      <rect x="28" y="22" width="4" height="4" fill="#0a0a0a"/>
      <rect x="34" y="22" width="4" height="4" fill="#0a0a0a"/>
      <rect x="22" y="28" width="4" height="4" fill="#0a0a0a"/>
      <rect x="34" y="28" width="4" height="4" fill="#0a0a0a"/>
      <rect x="28" y="34" width="4" height="4" fill="#0a0a0a"/>
      <rect x="22" y="34" width="4" height="4" fill="#0a0a0a"/>
    </svg>
  );
}

function CardFace({ card, clickable }: { card: typeof agentCards[0]; clickable?: boolean }) {
  return (
    <div style={{
      background: "#f5f2ee",
      borderRadius: 18,
      padding: "20px 22px",
      border: "2.5px solid #0a0a0a",
      boxShadow: clickable ? "0 12px 40px rgba(0,0,0,0.2)" : "none",
      userSelect: "none",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.1em", color: "#555", fontFamily: "monospace" }}>
          CLOUDSTUDIO · STAFF PASS
        </span>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <QRIcon />
        <div>
          <div style={{ fontFamily: '"DynaPuff", sans-serif', fontSize: 22, color: "#0a0a0a", lineHeight: 1.1 }}>
            {card.id}
          </div>
          <div style={{ fontSize: 10, color: "#888", fontFamily: "Inter", letterSpacing: "0.08em", marginTop: 2 }}>
            DIGITAL WORKER
          </div>
        </div>
      </div>
      {[["ROLE", card.role], ["SHIFT", card.shift], ["SALARY", card.salary]].map(([k, v]) => (
        <div key={k} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          borderTop: "1px dashed rgba(0,0,0,0.15)", padding: "10px 0",
        }}>
          <span style={{ color: "#999", fontFamily: "Inter", letterSpacing: "0.06em", fontSize: 11 }}>{k}</span>
          <span style={{ color: "#0a0a0a", fontFamily: "Inter", fontWeight: 700, fontSize: 13 }}>{v}</span>
        </div>
      ))}
      <div style={{
        marginTop: 14, background: "#8893d4", borderRadius: 10,
        padding: "12px 16px", fontSize: 13, fontFamily: "Inter",
        color: "#fff", textAlign: "center", lineHeight: 1.4,
      }}>
        {card.desc}
      </div>
    </div>
  );
}

function StaffCards() {
  const [topIdx, setTopIdx] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setTopIdx(t => (t + 1) % agentCards.length);
      setIsExiting(false);
    }, 270);
  };

  return (
    <div style={{ position: "relative", width: 360, height: 430 }}>
      {/*
        Back cards: plain divs with CSS transform — no Framer Motion, no transitions.
        They stay completely frozen while the top card animates out.
        Content swaps instantly when topIdx changes (imperceptible because top card
        is already at opacity 0 by then).
      */}
      {BACK_SLOTS.map((slot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3 - i,
            transform: `rotate(${slot.rotate}deg) translate(${slot.x}px, ${slot.y}px)`,
          }}
        >
          <CardFace card={agentCards[(topIdx + 1 + i) % agentCards.length]} />
        </div>
      ))}

      {/*
        Top card: single motion.div that never unmounts.
        Exit = animates up-right-fade (250ms easeIn).
        Re-entry = jumps instantly to origin (duration 0) while opacity is still 0.
      */}
      <motion.div
        style={{ position: "absolute", inset: 0, zIndex: 4, cursor: "pointer" }}
        animate={isExiting
          ? { y: -22, x: 320, opacity: 0, rotate: 4 }
          : { y: 0,   x: 0,   opacity: 1, rotate: 0 }}
        transition={isExiting
          ? { duration: 0.25, ease: [0.4, 0, 1, 1] }
          : { duration: 0 }}
        onClick={!isExiting ? handleClick : undefined}
      >
        <CardFace card={agentCards[topIdx]} clickable />
      </motion.div>
    </div>
  );
}

export default function WorkforceSection() {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section id="workforce">
      {/* Stats counter */}
      <div style={{ background: "#0a0a0a", padding: "80px 80px", position: "relative", overflow: "hidden" }}>
        {particles.map((p) => <Particle key={p.id} x={p.x} y={p.y} />)}
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto" }}>
          {stats.map((s) => <StatCounter key={s.label} stat={s} />)}
          <div style={{ opacity: 0.8 }}>
            <CursorFollowingEyes size="sm" />
          </div>
        </div>
      </div>

      {/* Digital Workforce */}
      <div style={{ background: "#8893d4", padding: "80px 80px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 60, width: "100%", maxWidth: 1160 }}>
        {/* Left */}
        <div style={{ flex: "0 0 48%" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(0,0,0,0.5)", fontFamily: "Inter", marginBottom: 16 }}>
            ( THE DIGITAL WORKFORCE )
          </div>
          <div
            style={{
              fontFamily: '"DynaPuff", sans-serif',
              fontSize: "clamp(44px, 5.8vw, 76px)",
              color: "#0a0a0a",
              lineHeight: 0.97,
              marginBottom: 28,
              letterSpacing: "-0.02em",
            }}
          >
            YOUR NEXT HIRE<br />ISN&apos;T A PERSON.
          </div>
          <p style={{ fontSize: 15, color: "rgba(0,0,0,0.75)", lineHeight: 1.7, fontFamily: "Inter", maxWidth: 460, marginBottom: 0 }}>
            Every agent from bucket 01 ships like this — a real role, a 24/7 shift and a salary in
            tokens, never a headcount. Click through the team.
          </p>
        </div>

        {/* Right — Staff cards */}
        <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
          <StaffCards />
          <button
            style={{
              background: "#0a0a0a",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "14px 32px",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontFamily: "Inter",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            CLICK — MEET THE WHOLE TEAM
          </button>
        </div>
        </div>{/* end maxWidth wrapper */}
      </div>
    </section>
  );
}
