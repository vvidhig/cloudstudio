import { useEffect, useState } from "react";

const codeLines = [
  "agent.ts",
  "await claude.messages({",
  "  tools:[query_database],",
  "})",
  "",
  "  1.2s · $0.003",
];

export default function ClaudeCode() {
  const [chars, setChars] = useState(0);
  const fullText = codeLines.join("\n");

  useEffect(() => {
    let c = 0;
    const iv = setInterval(() => {
      c = (c + 1) % (fullText.length + 20);
      setChars(Math.min(c, fullText.length));
    }, 60);
    return () => clearInterval(iv);
  }, [fullText.length]);

  return (
    <div
      style={{
        background: "#1a1a2e",
        borderRadius: 12,
        padding: 20,
        fontFamily: "monospace",
        fontSize: 11,
        minHeight: 140,
      }}
    >
      {fullText.slice(0, chars).split("\n").map((line, i) => (
        <div
          key={i}
          style={{
            color:
              i === 0 ? "#8893d4" :
              i === 1 ? "#6ee7b7" :
              i === 2 || i === 3 ? "#a0a0c0" :
              "#8893d4",
            marginBottom: 2,
          }}
        >
          {line || " "}
        </div>
      ))}
    </div>
  );
}
