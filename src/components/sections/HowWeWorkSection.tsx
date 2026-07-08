import { useIsMobile } from "../../hooks/useIsMobile";

const steps = [
  {
    num: "01",
    tag: "SCOPE",
    title: "Call → proposal",
    desc: "A 30-minute call, then a technical proposal in 5 days. Fixed price or retainer — nothing starts until you say go.",
  },
  {
    num: "02",
    tag: "BUILD",
    title: "Weekly demos",
    desc: "A working demo every week from week one. We prototype on synthetic data and only wire your real integrations once behavior is proven.",
  },
  {
    num: "03",
    tag: "RUN",
    title: "Production, operated",
    desc: "Live in 2–10 weeks with evals, observability and cost dashboards baked in. We operate what we ship.",
  },
];

export default function HowWeWorkSection() {
  const isMobile = useIsMobile();
  return (
    <section
      id="how-we-work"
      style={{ background: "#e8e8f0", padding: isMobile ? "48px 20px 40px" : "80px 80px 60px" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      {/* Top row: label + headline (left) | description (right) */}
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 20 : 60, marginBottom: 48 }}>

        {/* Left */}
        <div style={{ flex: isMobile ? "unset" : "0 0 50%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a", flexShrink: 0 }} />
            <span style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              color: "#0a0a0a",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
            }}>
              HOW WE WORK
            </span>
          </div>
          <h2 style={{
            fontFamily: '"DynaPuff", sans-serif',
            fontSize: "clamp(52px, 6vw, 86px)",
            color: "#0a0a0a",
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.03em",
          }}>
            No decks.<br />Three moves.
          </h2>
        </div>

        {/* Right */}
        <div style={{ flex: 1, paddingBottom: 8 }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "#0a0a0a",
            lineHeight: 1.75,
            margin: 0,
            maxWidth: 380,
          }}>
            The same three moves for every bucket — scoped in days, demoed weekly, and run in production by us.
          </p>
        </div>
      </div>

      {/* Three cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 16,
        marginBottom: 48,
      }}>
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              background: "#8893d4",
              borderRadius: 18,
              padding: "28px 28px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "rgba(0,0,0,0.38)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}>
              {step.num} · {step.tag}
            </div>
            <h3 style={{
              fontFamily: '"DynaPuff", sans-serif',
              fontSize: "clamp(20px, 2vw, 28px)",
              color: "#0a0a0a",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}>
              {step.title}
            </h3>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.75,
              margin: 0,
            }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)", paddingTop: 24 }}>
        <p style={{
          fontFamily: "monospace",
          fontSize: 13,
          color: "rgba(0,0,0,0.4)",
          margin: 0,
          letterSpacing: "0.02em",
        }}>
          Weeks, not quarters. That's the whole pitch.
        </p>
      </div>
      </div>{/* end maxWidth */}
    </section>
  );
}
