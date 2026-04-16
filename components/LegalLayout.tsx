"use client";

// shared tokens
const gold = "#C9A84C";
const cream = "#F5F0E8";
const dark = "#07080A";
const darkCard = "rgba(255,255,255,.025)";
const goldFade = (o: number) => `rgba(201,168,76,${o})`;

export const bodyStyle = {
  fontFamily: "'Crimson Pro', serif",
  fontSize: "clamp(1rem, 2vw, 1.1rem)",
  color: "rgba(245,240,232,.75)",
  lineHeight: 1.9,
};

export function SH({ children }: any) {
  return (
    <h2 style={{
      fontFamily: "'Cinzel', serif",
      fontSize: "0.8rem",
      letterSpacing: "0.22em",
      color: gold,
      textTransform: "uppercase",
      marginTop: "2.5rem",
      marginBottom: "0.8rem",
    }}>
      {children}
    </h2>
  );
}

export function BulletList({ items }: any) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item: string, i: number) => (
        <li key={i} style={{ ...bodyStyle, paddingLeft: "1.5rem", position: "relative" }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: "0.6em",
            width: 5,
            height: 5,
            background: gold,
            transform: "rotate(45deg)",
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function LegalLayout({ title, subtitle, children }: any) {
  return (
    <main style={{ background: dark, color: cream, minHeight: "100vh" }}>
      
      {/* Hero */}
      <div style={{
        padding: "5rem 2rem",
        borderBottom: `1px solid ${goldFade(0.12)}`,
        background: `radial-gradient(ellipse at top, ${goldFade(0.07)}, transparent), ${darkCard}`,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Cinzel Decorative'", fontSize: "2.5rem", color: cream }}>
            {title}
          </h1>
          <p style={{ ...bodyStyle, opacity: 0.6 }}>{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 2rem" }}>
        {children}
      </div>
    </main>
  );
}