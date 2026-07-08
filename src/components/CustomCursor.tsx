import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SECTION_COLORS: Record<string, string> = {
  hero: "#0a0a0a",
  "what-we-do": "#0a0a0a",
  "what-we-build": "#ffffff",
  workforce: "#ffffff",
  "how-we-work": "#0a0a0a",
  "selected-work": "#0a0a0a",
  statement: "#8893d4",
  faq: "#0a0a0a",
  contact: "#0a0a0a",
  footer: "#ffffff",
};

const SECTION_ORDER = [
  "hero",
  "what-we-do",
  "what-we-build",
  "workforce",
  "how-we-work",
  "selected-work",
  "statement",
  "faq",
  "contact",
  "footer",
];

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const [color, setColor] = useState("#0a0a0a");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const getActiveSection = () => {
      const mid = window.innerHeight / 2;
      let activeId = SECTION_ORDER[0];
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) activeId = id;
      }
      setColor(SECTION_COLORS[activeId] ?? "#0a0a0a");
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "background-color 0.3s ease",
      }}
    />
  );
}
