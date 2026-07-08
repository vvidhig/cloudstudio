import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do we know if our workflow is AI-ready?",
    a: "We start with workflow discovery: mapping the process, decision points, exceptions and data. Mostly reading and answering → RAG. Needs decisions and actions → an agent. You get that read on the first call.",
  },
  {
    q: "Will you train on or expose our data?",
    a: "Never. Your data stays in your infrastructure. We use your models or bring external APIs under NDA and data processing agreements. No training, no logging beyond what you approve.",
  },
  {
    q: "How long until something is in production?",
    a: "Typical first deploy is 3–5 weeks for a focused system. Complex multi-agent pipelines can take 8–10 weeks. We ship incrementally — you see working software in week 2, not week 8.",
  },
  {
    q: "What does it cost?",
    a: "Fixed-price per project or monthly retainer. Scoping call is free and gives you a detailed proposal within 5 days. No hourly billing, no surprises.",
  },
  {
    q: "Who owns what we build?",
    a: "You do, completely. All code, models, and pipelines are yours from day one. We hand over full source, documentation and deployment scripts at delivery.",
  },
  {
    q: "What happens after launch?",
    a: "We offer retainer support for monitoring, iteration and scaling. Most clients stay on a monthly retainer for continuous improvement — new data sources, new agents, new integrations as the system grows.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      style={{ background: "#e8e8f0", padding: "80px 80px 100px" }}
    >
      {/* Centered content column */}
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
          <h2 style={{
            fontFamily: '"DynaPuff", sans-serif',
            fontSize: "clamp(36px, 4vw, 58px)",
            color: "#0a0a0a",
            lineHeight: 1,
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            We have the answer.
          </h2>
          <span style={{
            fontSize: 10,
            letterSpacing: "0.15em",
            color: "rgba(0,0,0,0.35)",
            fontFamily: "Inter, sans-serif",
            whiteSpace: "nowrap",
          }}>
            ( QUESTIONS? ANSWERED )
          </span>
        </div>

        {/* FAQ list */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const isHovered = hovered === i;

            return (
              <div key={i}>
                <div style={{ height: 1, background: "rgba(0,0,0,0.15)" }} />

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 32,
                  padding: "22px 0",
                }}>
                  {/* Question */}
                  <p
                    onClick={() => toggle(i)}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      color: "#0a0a0a",
                      lineHeight: 1.3,
                      margin: 0,
                      flex: 1,
                      cursor: "none",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {faq.q}
                  </p>

                  {/* Toggle button */}
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => toggle(i)}
                    animate={{
                      backgroundColor: !isOpen && isHovered ? "#0a0a0a" : "rgba(0,0,0,0)",
                      paddingTop: !isOpen && isHovered ? 7 : 0,
                      paddingBottom: !isOpen && isHovered ? 7 : 0,
                      paddingLeft: !isOpen && isHovered ? 14 : 0,
                      paddingRight: !isOpen && isHovered ? 14 : 0,
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    style={{
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      cursor: "none",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    {/* OPEN label */}
                    <AnimatePresence>
                      {isHovered && !isOpen && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            color: "#fff",
                            fontSize: 9,
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          OPEN
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* + rotates to × */}
                    <motion.span
                      animate={{
                        color: isOpen ? "#0a0a0a" : isHovered ? "#fff" : "#0a0a0a",
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: 20,
                        lineHeight: 1,
                        fontWeight: 300,
                        display: "block",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      +
                    </motion.span>
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.5)",
                        lineHeight: 1.8,
                        maxWidth: 580,
                        paddingBottom: 24,
                        margin: 0,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Final divider */}
          <div style={{ height: 1, background: "rgba(0,0,0,0.15)" }} />
        </div>
      </div>
    </section>
  );
}
