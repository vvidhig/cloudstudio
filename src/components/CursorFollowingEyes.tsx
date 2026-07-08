import { useEffect, useRef, useState } from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "ring";
}

const sizeMap = {
  sm: 120,
  md: 180,
  lg: 280,
};

export default function CursorFollowingEyes({ size = "md", variant = "filled" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const dim = sizeMap[size];
  const eyeRadius = dim * 0.18;
  const pupilRadius = eyeRadius * 0.55;
  const maxOffset = eyeRadius * 0.4;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const dist = Math.min(
        Math.hypot(e.clientX - cx, e.clientY - cy) / 8,
        maxOffset
      );
      setPupilOffset({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [maxOffset]);

  useEffect(() => {
    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 4000;
      return setTimeout(() => {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
          timerRef.current = scheduleBlink();
        }, 150);
      }, delay);
    };
    const timerRef = { current: scheduleBlink() };
    return () => clearTimeout(timerRef.current);
  }, []);

  const dotCount = variant === "ring" ? 140 : 130;
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * Math.PI * 2;
    const radiusBase = dim * 0.46;
    const spread = variant === "ring" ? 0 : dim * 0.15 * Math.random();
    const r = radiusBase - spread;
    const dotSize = 1 + Math.random() * 3;
    return {
      x: Math.cos(angle) * r + dim / 2,
      y: Math.sin(angle) * r + dim / 2,
      s: dotSize,
    };
  });

  const eye1cx = dim * 0.35;
  const eye2cx = dim * 0.65;
  const eyeCy = dim * 0.52;

  return (
    <div ref={containerRef} style={{ width: dim, height: dim, position: "relative" }}>
      <svg
        width={dim}
        height={dim}
        style={{
          animation: "spin 20s linear infinite",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.s / 2} fill="#0a0a0a" opacity={0.7} />
        ))}
      </svg>

      <svg width={dim} height={dim} style={{ position: "absolute", top: 0, left: 0 }}>
        {/* Eye 1 */}
        <ellipse
          cx={eye1cx}
          cy={eyeCy}
          rx={eyeRadius}
          ry={blink ? eyeRadius * 0.05 : eyeRadius}
          fill={variant === "ring" ? "#F5F0DC" : "#F5F0DC"}
          style={{ transition: "ry 0.08s" }}
        />
        <circle
          cx={eye1cx + pupilOffset.x}
          cy={eyeCy + pupilOffset.y}
          r={blink ? pupilRadius * 0.1 : pupilRadius}
          fill="#0a0a0a"
          style={{ transition: "cx 0.1s, cy 0.1s, r 0.08s" }}
        />

        {/* Eye 2 (slightly smaller) */}
        <ellipse
          cx={eye2cx}
          cy={eyeCy}
          rx={eyeRadius * 0.85}
          ry={blink ? eyeRadius * 0.04 : eyeRadius * 0.85}
          fill="#F5F0DC"
          style={{ transition: "ry 0.08s" }}
        />
        <circle
          cx={eye2cx + pupilOffset.x * 0.85}
          cy={eyeCy + pupilOffset.y * 0.85}
          r={blink ? pupilRadius * 0.1 : pupilRadius * 0.85}
          fill="#0a0a0a"
          style={{ transition: "cx 0.1s, cy 0.1s, r 0.08s" }}
        />
      </svg>
    </div>
  );
}
