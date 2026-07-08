import { useEffect, useRef, useState } from "react";
import CursorFollowingEyes from "../CursorFollowingEyes";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowLine1(true), 100);
          setTimeout(() => setShowLine2(true), 420);
          setTimeout(() => setShowButton(true), 700);
          setTimeout(() => setShowInfo(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isMobile = useIsMobile();
  const headlineStyle: React.CSSProperties = {
    fontFamily: '"DynaPuff", sans-serif',
    fontSize: "clamp(72px, 10vw, 130px)",
    color: "#0a0a0a",
    lineHeight: 0.95,
    letterSpacing: "-0.03em",
    display: "block",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: "#8893d4", padding: isMobile ? "80px 20px 48px" : "120px 80px 80px" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", gap: 60 }}>
        {/* Left */}
        <div style={{ flex: 1 }}>
          {/* Line 1 */}
          <div style={{ overflow: "hidden", marginBottom: 4 }}>
            <span
              style={{
                ...headlineStyle,
                opacity: showLine1 ? 1 : 0,
                transform: showLine1 ? "translateY(0)" : "translateY(70px)",
                transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              Let&apos;s build
            </span>
          </div>

          {/* Line 2 */}
          <div style={{ overflow: "hidden", marginBottom: 44 }}>
            <span
              style={{
                ...headlineStyle,
                opacity: showLine2 ? 1 : 0,
                transform: showLine2
                  ? "translateY(0) scale(1)"
                  : "translateY(0) scale(0.82)",
                transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              your AI.
            </span>
          </div>

          {/* Button */}
          <button
            style={{
              background: "#0a0a0a",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "18px 36px",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              cursor: "none",
              opacity: showButton ? 1 : 0,
              transform: showButton ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            Book a call →
          </button>

          {/* Info columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 24 : 40,
              marginTop: 72,
              paddingTop: 40,
              borderTop: "1px solid rgba(0,0,0,0.2)",
              opacity: showInfo ? 1 : 0,
              transform: showInfo ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#0a0a0a", fontFamily: "Inter", fontWeight: 700, marginBottom: 10 }}>
                NEW PROJECTS
              </div>
              <a
                href="mailto:vvidhig417@gmail.com"
                style={{ fontSize: 15, color: "#0a0a0a", fontFamily: "Inter", fontWeight: 500, textDecoration: "none" }}
              >
                vvidhig417@gmail.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#0a0a0a", fontFamily: "Inter", fontWeight: 700, marginBottom: 10 }}>
                BASED IN
              </div>
              <div style={{ fontSize: 15, color: "#0a0a0a", fontFamily: "Inter", fontWeight: 500 }}>
                India · Working globally
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#0a0a0a", fontFamily: "Inter", fontWeight: 700, marginBottom: 10 }}>
                HOW IT STARTS
              </div>
              <div style={{ fontSize: 15, color: "#0a0a0a", fontFamily: "Inter", fontWeight: 500 }}>
                30-min call → proposal in 5 days
              </div>
              <div style={{ fontSize: 12, color: "rgba(0,0,0,0.55)", fontFamily: "Inter", marginTop: 4 }}>
                Fixed price or retainer · no commitment
              </div>
            </div>
          </div>
        </div>

        {/* Right — Eyes, hidden on mobile */}
        {!isMobile && (
          <div style={{ paddingTop: 20 }}>
            <CursorFollowingEyes size="md" />
          </div>
        )}
      </div>
      </div>{/* end maxWidth */}
    </section>
  );
}
