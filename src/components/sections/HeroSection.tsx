import { motion } from "framer-motion";
import CursorFollowingEyes from "../CursorFollowingEyes";

const lines: string[][] = [["AI", "that"], ["actually"], ["ships."]];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#8893d4",
        display: "flex",
        alignItems: "center",
        padding: "0 80px",
        paddingTop: 80,
        position: "relative",
      }}
    >
      {/* Max-width content wrapper */}
      <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 1160, margin: "0 auto" }}>

      {/* Left side */}
      <div style={{ flex: "0 0 60%", paddingRight: 40 }}>
        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#0a0a0a", fontSize: 8 }}>●</span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            AI-NATIVE STUDIO — AGENTS · RAG · CLAUDE · 18+ YRS
          </span>
        </motion.div>

        {/* Headline */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: '"DynaPuff", sans-serif',
              fontSize: "clamp(72px, 10vw, 140px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
            }}
          >
            {lines.map((lineWords, lineIdx) => (
              <div key={lineIdx} style={{ display: "block" }}>
                {lineWords.map((word, wordIdx) => {
                  const animIdx = lines.slice(0, lineIdx).flat().length + wordIdx;
                  return (
                    <span
                      key={word}
                      style={{ display: "inline-block", marginRight: word !== "ships." && lineWords.length > 1 && wordIdx < lineWords.length - 1 ? "0.25em" : 0, position: "relative" }}
                    >
                      <motion.span
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + animIdx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: "inline-block" }}
                      >
                        {word === "ships." ? (
                          <span style={{ position: "relative", display: "inline-block" }}>
                            ships.
                            <svg
                              style={{
                                position: "absolute",
                                left: "-6%",
                                top: "-10%",
                                width: "112%",
                                height: "120%",
                                pointerEvents: "none",
                              }}
                              viewBox="0 0 220 80"
                              fill="none"
                            >
                              <motion.ellipse
                                cx="110"
                                cy="40"
                                rx="105"
                                ry="34"
                                stroke="#0a0a0a"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                              />
                            </svg>
                          </span>
                        ) : (
                          word
                        )}
                      </motion.span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", gap: 40, marginTop: 32 }}
        >
          <button
            style={{
              background: "#0a0a0a",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 15,
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              cursor: "none",
              whiteSpace: "nowrap",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")}
          >
            Book a call →
          </button>
          <p
            style={{
              fontSize: 14,
              color: "#0a0a0a",
              maxWidth: 300,
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
            }}
          >
            AI agents, RAG pipelines and Claude systems for your real workflows —
            designed, built and run by us. Live in weeks, not quarters.
          </p>
        </motion.div>
      </div>

      {/* Right side — Eyes */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flex: "0 0 40%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 24,
        }}
      >
        <CursorFollowingEyes size="lg" />
      </motion.div>

      </div>{/* end max-width wrapper */}

    </section>
  );
}
