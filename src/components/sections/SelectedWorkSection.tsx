import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";

const projects = [
  { num: "01", title: "Agents",  tags: "Orchestrator · Multi-agent", url: "agents.cloudstudio.es" },
  { num: "02", title: "Vidix",   tags: "macOS · Multi-agent",        url: "vidix.app"              },
  { num: "03", title: "Phopet",  tags: "AI agents · Image gen",      url: "phopet.ai"              },
  { num: "04", title: "Workee",  tags: "AI matching · Staffing",     url: "workee.es"              },
];

/* ── preview content components ── */

function AgentsPreviewContent() {
  return (
    <div style={{ padding: 20, fontFamily: "monospace", fontSize: 11 }}>
      <div style={{ color: "#8893d4", marginBottom: 12 }}>▶ orchestrator · session-4a1f</div>
      {["  spawning sub-agent: search", "  tool: vector_query", "  chunks: 12 retrieved", "  reranking…", "  agent: summarise", "  ✓ answer ready · 1.8s"].map((l, i) => (
        <div key={i} style={{ color: i % 2 === 0 ? "#ccc" : "#666", marginBottom: 4 }}>{l}</div>
      ))}
      <div style={{ marginTop: 16, padding: "8px 12px", background: "rgba(123,127,196,0.15)", borderRadius: 6, color: "#8893d4", lineHeight: 1.5 }}>
        Here are the 3 most relevant results with citations [1][2][3]…
      </div>
    </div>
  );
}

function VidixPreviewContent() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ background: "#1a1a1a", borderRadius: 8, padding: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: "#8893d4", fontFamily: "monospace" }}>vidix · processing</span>
          <span style={{ fontSize: 11, color: "#4ade80", fontFamily: "monospace" }}>live</span>
        </div>
        {[["Transcription", "100%"], ["Scene detect", "87%"], ["Summary agent", "62%"]].map(([label, pct]) => (
          <div key={label} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#888", fontFamily: "monospace", marginBottom: 3 }}>
              <span>{label}</span><span>{pct}</span>
            </div>
            <div style={{ height: 4, background: "#2a2a2a", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: pct, background: "#8893d4", borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>macOS · multi-agent pipeline · local inference</div>
    </div>
  );
}

function PhopetPreviewContent() {
  const cells = ["#4a3f5c","#3d4a5c","#4a5c3d","#5c4a3d","#3d3d5c","#5c3d4a","#4a4a4a","#3d5c4a","#5c5c3d"];
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, marginBottom: 12 }}>
        {cells.map((bg, i) => (
          <div key={i} style={{ height: 64, background: bg, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 18 }}>{["🐕","🐈","🐇","🦜","🐠","🦎","🐕","🐈","🐇"][i]}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["portrait","studio","outdoor"].map(t => (
          <div key={t} style={{ padding: "4px 10px", borderRadius: 99, border: "1px solid #333", fontSize: 10, color: "#888", fontFamily: "monospace" }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

function WorkeePreviewContent() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#111", padding: "10px 14px", borderBottom: "1px solid #222" }}>
        <div style={{ fontSize: 10, color: "#8893d4", fontFamily: "monospace", marginBottom: 6 }}>workee · bolsa propia + IA</div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Producto","Precios","Nosotros","Contacto"].map(n => (
            <span key={n} style={{ fontSize: 10, color: "#555", fontFamily: "Inter" }}>{n}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <div style={{ fontSize: 22, fontFamily: '"Archivo Black"', color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>
          Cubre huecos<br />con IA.
        </div>
        <div style={{ fontSize: 11, color: "#666", fontFamily: "Inter", lineHeight: 1.5, marginBottom: 14 }}>
          Para empresas con trabajadores temporales o parciales.
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ padding: "6px 14px", background: "#8893d4", borderRadius: 99, fontSize: 11, color: "#0a0a0a", fontFamily: "Inter", fontWeight: 700 }}>Crear cuenta</div>
          <span style={{ fontSize: 32, fontFamily: '"Archivo Black"', color: "rgba(255,255,255,0.12)" }}>5</span>
        </div>
      </div>
      <div style={{ padding: "8px 16px", borderTop: "1px solid #1a1a1a", display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "monospace" }}>
        <span style={{ color: "#444" }}>Workee</span>
        <span style={{ color: "#8893d4" }}>signals per match · AI-ranked</span>
      </div>
    </div>
  );
}

const previewContents = [AgentsPreviewContent, VidixPreviewContent, PhopetPreviewContent, WorkeePreviewContent];

function ProjectPreview({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const Content = previewContents[idx];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "100%",
        maxWidth: 420,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
        background: "#111",
      }}
    >
      {/* Browser chrome */}
      <div style={{ background: "#1c1c1c", padding: "9px 14px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #2a2a2a" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
        <div style={{ flex: 1, marginLeft: 10, background: "#2a2a2a", borderRadius: 4, padding: "3px 10px", fontSize: 10, color: "#666", fontFamily: "monospace" }}>
          {project.url}
        </div>
      </div>
      <div style={{ height: 280, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <Content />
      </div>
    </motion.div>
  );
}

/* ── main section ── */

export default function SelectedWorkSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const displayIdx = hovered ?? 0;
  const isMobile = useIsMobile();

  return (
    <section
      id="selected-work"
      style={{
        background: "#8893d4",
        minHeight: "100vh",
        padding: isMobile ? "48px 20px" : "80px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%" }}>
      {/* Full-width header row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 40,
      }}>
        <h2 style={{
          fontFamily: '"DynaPuff", sans-serif',
          fontSize: "clamp(40px, 4vw, 60px)",
          color: "#0a0a0a",
          lineHeight: 1,
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          Selected work
        </h2>
        <p style={{
          fontSize: 12,
          color: "rgba(0,0,0,0.45)",
          fontFamily: "Inter, sans-serif",
          lineHeight: 1.6,
          textAlign: "right",
          margin: 0,
        }}>
          Hover a project —<br />real products we shipped
        </p>
      </div>

      {/* Two-column: list left, preview right */}
      <div style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>

        {/* Project list */}
        <div style={{ flex: isMobile ? "1" : "0 0 52%" }}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", overflow: "hidden", cursor: "default" }}
            >
              <div style={{ height: 1, background: "rgba(0,0,0,0.2)", position: "relative", zIndex: 1 }} />

              {/* Sweep */}
              <motion.div
                initial={false}
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#0a0a0a",
                  transformOrigin: "left center",
                  zIndex: 0,
                }}
              />

              <div style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                padding: "18px 0",
                gap: 24,
              }}>
                <span style={{
                  fontSize: 11,
                  fontFamily: "Inter, sans-serif",
                  color: hovered === i ? "rgba(123,127,196,0.55)" : "rgba(0,0,0,0.3)",
                  width: 28,
                  flexShrink: 0,
                  letterSpacing: "0.06em",
                  transition: "color 0.25s",
                }}>
                  {p.num}
                </span>

                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: hovered === i ? "#fff" : "#0a0a0a",
                  flex: 1,
                  transition: "color 0.25s",
                  letterSpacing: "-0.01em",
                }}>
                  {p.title}
                </span>

                <span style={{
                  fontSize: 12,
                  color: hovered === i ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)",
                  fontFamily: "Inter, sans-serif",
                  transition: "color 0.25s",
                  flexShrink: 0,
                }}>
                  {p.tags}
                </span>

                <span style={{
                  fontSize: 16,
                  color: hovered === i ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.25)",
                  transition: "color 0.25s",
                  flexShrink: 0,
                }}>
                  →
                </span>
              </div>
            </div>
          ))}
          <div style={{ height: 1, background: "rgba(0,0,0,0.2)" }} />
        </div>

        {/* Preview — right on desktop, hidden here on mobile (shown below) */}
        {!isMobile && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <ProjectPreview key={displayIdx} project={projects[displayIdx]} idx={displayIdx} />
            </AnimatePresence>
          </div>
        )}
      </div>
      {/* Mobile preview — below the list, always shows Agents placeholder */}
      {isMobile && (
        <div style={{ maxWidth: 1160, margin: "32px auto 0", width: "100%" }}>
          <AnimatePresence mode="wait">
            <ProjectPreview key={hovered ?? 0} project={projects[hovered ?? 0]} idx={hovered ?? 0} />
          </AnimatePresence>
        </div>
      )}
      </div>{/* end maxWidth */}
    </section>
  );
}
