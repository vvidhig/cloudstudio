import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "HERO", dark: false },
  { id: "what-we-do", label: "WHAT WE DO", dark: false },
  { id: "what-we-build", label: "WHAT WE BUILD", dark: true },
  { id: "workforce", label: "WORKFORCE", dark: false },
  { id: "how-we-work", label: "HOW WE WORK", dark: false },
  { id: "selected-work", label: "SELECTED WORK", dark: false },
  { id: "statement", label: "STATEMENT", dark: true },
  { id: "faq", label: "FAQ", dark: false },
  { id: "contact", label: "CONTACT", dark: false },
];

export default function RightSidebar() {
  const [active, setActive] = useState("hero");
  const [subSectionDark, setSubSectionDark] = useState(true);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ dark: boolean }>).detail;
      setSubSectionDark(detail.dark);
    };
    window.addEventListener("whatwebuild:cardchange", handler);
    return () => window.removeEventListener("whatwebuild:cardchange", handler);
  }, []);

  const isWhatWeBuild = active === "what-we-build";

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        const activeSection = SECTIONS.find((s) => s.id === active);
        const isDarkBg = isWhatWeBuild ? subSectionDark : (activeSection?.dark ?? false);
        const textColor = isDarkBg ? "#ffffff" : "#0a0a0a";
        const dotFill = isDarkBg ? "#ffffff" : "#0a0a0a";
        const dotBorder = isDarkBg ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)";

        return (
          <a
            key={id}
            href={`#${id}`}
            style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {/* Hide label text when inside what-we-build sub-cards */}
            {isActive && !isWhatWeBuild && (
              <span
                style={{
                  fontSize: 8,
                  letterSpacing: "0.12em",
                  color: textColor,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontFamily: "Inter, sans-serif",
                  opacity: 0.75,
                  transition: "color 0.3s",
                }}
              >
                {label}
              </span>
            )}
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: isActive ? dotFill : "transparent",
                border: `1.5px solid ${dotBorder}`,
                display: "block",
                transition: "background 0.3s, border-color 0.3s",
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
