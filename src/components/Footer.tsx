export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#0a0a0a", padding: "48px 80px 0", overflow: "hidden" }}>
      {/* Top row */}
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: '"DynaPuff", sans-serif', fontSize: 13, color: "#8893d4", letterSpacing: "0.05em", marginBottom: 6 }}>
            CLOUDSTUDIO®
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
            AI × WEB × CREATIVE · 18+ YEARS SHIPPING
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["GITHUB", "TWITTER", "LINKEDIN", "COOKIES"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.1em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      </div>{/* end maxWidth top row */}

      {/* Large outlined wordmark */}
      <div
        style={{
          fontFamily: '"DynaPuff", sans-serif',
          fontSize: "clamp(80px, 12vw, 180px)",
          color: "transparent",
          WebkitTextStroke: "1.5px #8893d4",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        cloudstudio*
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 20,
          paddingBottom: 20,
          marginTop: 8,
        }}
      >
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          © Cloudstudio 2026
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          100 — 100
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          352K+
        </div>
      </div>
      </div>{/* end maxWidth bottom bar */}
    </footer>
  );
}
