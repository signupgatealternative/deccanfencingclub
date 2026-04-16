"use client";

const gold = '#C9A84C';
const cream = '#F5F0E8';
const dark = '#07080A';

const pillars = [
  {
    icon: '⚔',
    title: 'Elite Coaching',
    body: 'Our coaches bring national-level competitive experience directly to your training, combining classical technique with modern sports science.',
  },
  {
    icon: '🛡',
    title: 'Deep Tradition',
    body: 'We train with deep respect for fencing\'s history — footwork, blade-work, and strategy taught the way champions have always learned.',
  },
  {
    icon: '◈',
    title: 'Modern Methodology',
    body: 'Video analysis, periodised training plans, and individualised feedback keep our fencers ahead of the curve at every level.',
  },
  {
    icon: '✦',
    title: 'All Levels Welcome',
    body: 'Whether you\'ve never held a blade or are chasing a national podium, our programmes meet you exactly where you are.',
  },
];

export default function WhyChoose() {
  return (
    <section style={{
      background: dark,
      padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,5rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(201,168,76,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow top-right */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '50vw', height: '50vw', maxWidth: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem,6vw,5rem)' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.58rem',
            letterSpacing: '0.28em',
            color: gold,
            marginBottom: '1.2rem',
          }}>WHY CHOOSE DECCAN FENCING CLUB</p>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              color: cream,
              lineHeight: 1.15,
              flex: '1 1 300px',
              margin: 0,
            }}>
              Forged in Tradition.<br />
              <span style={{ color: gold }}>Built for Champions.</span>
            </h2>
            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: 'rgba(245,240,232,.6)',
              lineHeight: 1.8,
              flex: '1 1 300px',
              maxWidth: 440,
              margin: 0,
              fontWeight: 300,
            }}>
              At Deccan Fencing Club, fencing is more than a sport — it is a discipline
              of mind, body, and spirit. Our approach combines centuries of tradition
              with the science of modern athletic development.
            </p>
          </div>

          {/* Gold rule */}
          <div style={{
            marginTop: '2.5rem',
            height: 1,
            background: `linear-gradient(90deg, ${gold}, rgba(201,168,76,.1) 70%, transparent)`,
          }} />
        </div>

        {/* 4-pillar grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1px',
          border: '1px solid rgba(201,168,76,.12)',
          background: 'rgba(201,168,76,.12)',
        }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: dark,
                padding: 'clamp(2rem,4vw,3rem) clamp(1.5rem,3vw,2.5rem)',
                position: 'relative',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = dark)}
            >
              {/* Top gold bar on hover  */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2, background: gold, opacity: 0,
                transition: 'opacity 0.3s',
              }}
                className="hover-bar"
              />

              <div style={{
                fontSize: '1.6rem',
                marginBottom: '1.4rem',
                color: gold,
                lineHeight: 1,
              }}>{p.icon}</div>

              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(0.7rem,1.5vw,0.85rem)',
                letterSpacing: '0.15em',
                color: gold,
                marginBottom: '1rem',
                fontWeight: 600,
              }}>{p.title.toUpperCase()}</h3>

              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: 'rgba(245,240,232,.65)',
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}>{p.body}</p>

              {/* Bottom index number */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', right: '1.8rem',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                color: 'rgba(201,168,76,.2)',
              }}>0{i + 1}</div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{
          marginTop: 'clamp(2.5rem,5vw,4rem)',
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <a href="/about-us" style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            color: dark,
            background: gold,
            padding: '0.9rem 2.2rem',
            textDecoration: 'none',
            fontWeight: 700,
            display: 'inline-block',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            LEARN MORE
          </a>

          <a href="/contact" style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            color: gold,
            border: `1px solid rgba(201,168,76,.4)`,
            padding: '0.9rem 2.2rem',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = gold;
              (e.currentTarget as HTMLElement).style.color = cream;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,.4)';
              (e.currentTarget as HTMLElement).style.color = gold;
            }}
          >
            ENROLL TODAY ⚔
          </a>
        </div>
      </div>
    </section>
  );
}