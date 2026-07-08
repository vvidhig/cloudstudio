import { useEffect, useState } from "react";

export default function RAGDiagram() {
  const [active, setActive] = useState(0);
  const bars = [
    { label: "retrieve + rerank + cite", width: 85 },
    { label: "answer · 0.94 ✓", width: 60 },
  ];

  useEffect(() => {
    const iv = setInterval(() => setActive((a) => (a + 1) % 3), 1200);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      style={{
        background: "#1a1a2e",
        borderRadius: 12,
        padding: 20,
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Top row of colored blocks */}
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 28,
              borderRadius: 6,
              background: active === i ? "#8893d4" : "#2a2a4a",
              transition: "background 0.4s",
            }}
          />
        ))}
      </div>
      {bars.map((b, i) => (
        <div key={i}>
          <div style={{ fontSize: 10, color: "#8893d4", marginBottom: 4, fontFamily: "monospace" }}>
            {b.label}
          </div>
          <div style={{ background: "#2a2a4a", borderRadius: 4, height: 8 }}>
            <div
              style={{
                width: `${b.width}%`,
                height: "100%",
                background: "#8893d4",
                borderRadius: 4,
                transition: "width 0.8s ease",
              }}
            />
          </div>
          {i === 1 && (
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#6ee7b7",
                marginTop: 4,
                marginLeft: `${b.width - 1}%`,
                transition: "margin-left 0.8s ease",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
