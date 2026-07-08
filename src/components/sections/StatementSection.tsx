import { useEffect, useRef, useState } from "react";
import CursorFollowingEyes from "../CursorFollowingEyes";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function StatementSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [line1Filled, setLine1Filled] = useState(false);
  const [line2Filled, setLine2Filled] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLine1Filled(true), 150);
          setTimeout(() => setLine2Filled(true), 600);
          setTimeout(() => setShowSubtitle(true), 1050);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: '"DynaPuff", sans-serif',
    fontSize: "clamp(52px, 7.5vw, 110px)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    display: "block",
    whiteSpace: "nowrap",
  };

  return (
    <section
      id="statement"
      ref={sectionRef}
      style={{ minHeight: "100vh", background: "#0a0a0a", position: "relative", display: "flex", alignItems: "center" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "60px 20px" : "80px 80px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", width: "100%" }}>
        {/* Particle background */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)", fontFamily: "Inter", marginBottom: 24 }}>
            ( OUR PROMISE )
          </div>

          {/* Line 1: WE SHIP AI TO */}
          <div style={{ position: "relative", display: "block" }}>
            <span style={{ ...textStyle, color: "transparent", WebkitTextStroke: "2px #8893d4" }}>
              WE SHIP AI TO
            </span>
            <span
              style={{
                ...textStyle,
                color: "#8893d4",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: line1Filled ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
              }}
            >
              WE SHIP AI TO
            </span>
          </div>

          {/* Line 2: PRODUCTION. */}
          <div style={{ position: "relative", display: "block" }}>
            <span style={{ ...textStyle, color: "transparent", WebkitTextStroke: "2px #8893d4" }}>
              PRODUCTION.
            </span>
            <span
              style={{
                ...textStyle,
                color: "#8893d4",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: line2Filled ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
              }}
            >
              PRODUCTION.
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              marginTop: 32,
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              fontFamily: "Inter, sans-serif",
              maxWidth: 500,
              lineHeight: 1.7,
              opacity: showSubtitle ? 1 : 0,
              transform: showSubtitle ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            Reliability, observability and cost control aren&apos;t add-ons — they&apos;re how we
            build from day one.
          </div>
        </div>

        {/* Eyes — right side, ring variant, hidden on mobile */}
        {!isMobile && (
          <div style={{ opacity: 0.9 }}>
            <CursorFollowingEyes size="lg" variant="ring" />
          </div>
        )}
        </div>{/* end maxWidth */}
      </div>
    </section>
  );
}
