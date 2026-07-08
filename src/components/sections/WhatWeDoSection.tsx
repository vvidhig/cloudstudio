import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import AgentTerminal from "../cards/AgentTerminal";
import RAGDiagram from "../cards/RAGDiagram";
import ClaudeCode from "../cards/ClaudeCode";

const cycleWords = ["APIs", "Scripts", "demos", "LLMs"];

const serviceCards = [
  {
    title: "AI agents",
    num: "01",
    desc: "Autonomous workers — not chatbots. Multi-step workflows with error recovery, human escalation and cost dashboards, running 24/7.",
    Component: AgentTerminal,
    bg: "#8893d4",
  },
  {
    title: "RAG & knowledge",
    num: "02",
    desc: "Your company knowledge answering with citations, not hallucinations — vector search, smart chunking and accuracy evals.",
    Component: RAGDiagram,
    bg: "#F5F0DC",
  },
  {
    title: "Claude & LLM",
    num: "03",
    desc: "Not just API calls — orchestration at scale. Tool use, structured outputs, streaming and token budgeting.",
    Component: ClaudeCode,
    bg: "#1a1a2e",
  },
];

export default function WhatWeDoSection() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setWordIdx((i) => (i + 1) % cycleWords.length), 2500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="what-we-do" style={{ background: "#e8e8f0" }}>
      {/* Marquee bar */}
      <div style={{ background: "#0a0a0a", padding: "12px 0" }}>
        <Marquee speed={60} gradient={false}>
          {["Creative dev", "AI agents", "RAG pipelines", "Claude", "MCP servers", "Automation", "Digital workers"].map(
            (item) => (
              <span
                key={item}
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontFamily: '"DynaPuff", sans-serif',
                  marginRight: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {item} <span style={{ color: "#8893d4" }}>✦</span>
              </span>
            )
          )}
        </Marquee>
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          padding: "80px 80px",
          gap: 60,
          alignItems: "flex-start",
          maxWidth: 1160 + 160,
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div style={{ flex: "0 0 50%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              color: "#0a0a0a",
            }}
          >
            <span style={{ fontSize: 8 }}>●</span>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              WHAT WE DO
            </span>
          </div>

          <div
            style={{
              fontFamily: '"DynaPuff", sans-serif',
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#0a0a0a",
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            We don&apos;t just
            <br />
            call{" "}
            <span style={{ display: "inline-flex", flexDirection: "column", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "inline-block",
                    borderBottom: "3px solid #0a0a0a",
                    paddingBottom: 2,
                  }}
                >
                  {cycleWords[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </div>
        </div>

        {/* Right */}
        <div style={{ flex: "0 0 50%" }}>
          <p
            style={{
              fontSize: 15,
              color: "#0a0a0a",
              lineHeight: 1.7,
              fontFamily: "Inter, sans-serif",
              marginBottom: 28,
            }}
          >
            A studio working at the intersection of AI and craft — we design and build websites,
            products and creative experiences with Claude as a first-class engine, all the way to
            production.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["✦ AI ENGINEERING", "✦ WEB DESIGN", "✦ WEB DEVELOPMENT", "✦ CREATIVE DEV"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "#0a0a0a",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          padding: "0 80px 80px",
          maxWidth: 1160 + 160,
          margin: "0 auto",
        }}
      >
        {serviceCards.map(({ title, num, desc, Component, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -4 }}
            style={{
              background: bg,
              borderRadius: 16,
              overflow: "hidden",
              padding: 20,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Component />
            <div style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: '"DynaPuff", sans-serif',
                    fontSize: 20,
                    color: bg === "#1a1a2e" ? "#fff" : "#0a0a0a",
                  }}
                >
                  {title}
                </span>
                <span style={{ fontSize: 12, color: bg === "#1a1a2e" ? "#666" : "rgba(0,0,0,0.4)", fontFamily: "Inter" }}>
                  {num}
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  marginTop: 8,
                  color: bg === "#1a1a2e" ? "#a0a0a0" : "rgba(0,0,0,0.65)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
