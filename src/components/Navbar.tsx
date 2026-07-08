import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "block",
        padding: "0 80px",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled ? "rgba(123,127,196,0.15)" : "transparent",
        transition: "backdrop-filter 0.3s, background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
      <span
        style={{
          fontFamily: '"DynaPuff", sans-serif',
          fontSize: 16,
          color: "#0a0a0a",
          letterSpacing: "-0.02em",
        }}
      >
        cloudstudio*
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a
          href="#selected-work"
          style={{
            color: "#0a0a0a",
            textDecoration: "none",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          Work
        </a>
        <a
          href="#contact"
          style={{
            color: "#0a0a0a",
            textDecoration: "none",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          FAQ
        </a>
        <button
          style={{
            background: "#0a0a0a",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "10px 20px",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            cursor: "none",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Book a call →
        </button>
      </div>
      </div>{/* end maxWidth */}
    </nav>
  );
}
