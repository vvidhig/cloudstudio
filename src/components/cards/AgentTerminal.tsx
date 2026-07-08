import { useEffect, useState } from "react";

const lines = [
  "● support-agent · live",
  "▶ ticket #4891 received",
  "  intent: billing · 0.97",
  "  CRM · Acme Corp",
  "  resolved · 5.8s",
];

export default function AgentTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % (lines.length + 1);
      if (i === 0) setVisible(0);
      else setVisible(i);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#1a1a2e",
        borderRadius: 12,
        padding: 20,
        fontFamily: "monospace",
        fontSize: 12,
        color: "#a0a0c0",
        minHeight: 140,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {lines.slice(0, visible).map((line, i) => (
        <div key={i} style={{ marginBottom: 4, color: i === 0 ? "#8893d4" : i === 1 ? "#6ee7b7" : "#a0a0c0" }}>
          {line}
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 20,
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "2px solid #8893d4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8,
          }}
        >
          👁
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid #8893d4" }} />
      </div>
    </div>
  );
}
