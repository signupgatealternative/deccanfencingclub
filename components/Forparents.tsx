"use client";
const gold = '#C9A84C';
const cream = '#F5F0E8';
const dark = '#07080A';

const resources = [
  { icon: '📋', title: 'Programme Guide', desc: 'A full overview of what your child will learn across each age group and level.' },
  { icon: '🛡', title: 'Safety Standards', desc: 'All equipment, supervision, and venue protocols we follow to keep every student safe.' },
  { icon: '📅', title: 'Event Calendar', desc: 'Upcoming competitions, tournaments, open days, and club milestones — always up to date.' },
  { icon: '💬', title: 'Talk to a Coach', desc: 'Have questions? Our coaching staff are available for parent consultations at any time.' },
];

export default function ForParents() {
  return (
    <section style={{
      background: dark,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ── HERO BAND ─────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'clamp(320px, 45vw, 520px)',
      }}>
        {/* Left — text */}
        <div style={{
          background: 'linear-gradient(135deg, #1a0a0a 0%, #0f0505 50%, rgba(80,10,10,.9) 100%)',
          padding: 'clamp(3rem,6vw,5rem) clamp(2rem,5vw,4.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Subtle diagonal texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(201,168,76,.03) 0px, rgba(201,168,76,.03) 1px, transparent 1px, transparent 40px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.56rem',
              letterSpacing: '0.28em',
              color: gold,
              marginBottom: '1.5rem',
            }}>FOR PARENTS & GUARDIANS</p>

            <h2 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 'clamp(1.5rem,3.5vw,2.5rem)',
              color: cream,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Your Child's Journey<br />
              <span style={{ color: gold }}>Is Our Priority</span>
            </h2>

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 'clamp(1rem,2vw,1.1rem)',
              color: 'rgba(245,240,232,.65)',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: 420,
              marginBottom: '2.5rem',
            }}>
              At Deccan Fencing Club, we understand that sending your child into a
              contact sport takes trust. We offer parents full visibility — from
              programme content and safety protocols to upcoming events and coach
              access — so you can be a confident partner in their fencing journey.
            </p>

            <a href="/contact" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: dark,
              background: gold,
              padding: '0.9rem 2.2rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 700,
              alignSelf: 'flex-start',
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              GET INFORMED ⚔
            </a>
          </div>
        </div>

        {/* Right — image placeholder (swap src for real image) */}
        <div style={{
          background: '#1a1008',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 320,
        }}>
          {/* Decorative fencer silhouette placeholder */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(201,168,76,.06) 0%, transparent 60%)',
          }} />
          <img
  src="/images/fencer.jpg"
  alt="Young fencers in bout"
  className="floating-image"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: 0.85,
  }}
  onError={e => {
    (e.currentTarget as HTMLImageElement).style.display = 'none';
  }}
/>

          {/* Fallback decorative pattern shown when no image */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '1rem',
          }}>
            <div style={{ fontSize: '4rem', opacity: 0.15 }}>⚔</div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(201,168,76,.3)',
            }}>DECCAN FENCING CLUB</p>
          </div>

          {/* Gold corner accent */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            width: 60, height: 60,
            borderBottom: `2px solid ${gold}`,
            borderLeft: `2px solid ${gold}`,
            opacity: 0.4,
          }} />
        </div>
      </div>

      {/* ── RESOURCE CARDS ────────────────────────── */}
      <div style={{
        padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,6vw,5rem)',
        background: '#0B0D10',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.56rem',
            letterSpacing: '0.25em',
            color: gold,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>RESOURCES FOR PARENTS</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: 'rgba(201,168,76,.1)',
            border: '1px solid rgba(201,168,76,.1)',
          }}>
            {resources.map((r, i) => (
              <div
                key={i}
                style={{
                  background: '#0B0D10',
                  padding: 'clamp(2rem,3.5vw,2.8rem) clamp(1.5rem,3vw,2.2rem)',
                  transition: 'background 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0B0D10')}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>{r.icon}</div>

                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(0.65rem,1.4vw,0.78rem)',
                  letterSpacing: '0.15em',
                  color: gold,
                  marginBottom: '0.8rem',
                  fontWeight: 600,
                }}>{r.title.toUpperCase()}</h3>

                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: 'clamp(0.95rem,1.8vw,1.02rem)',
                  color: 'rgba(245,240,232,.55)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  margin: 0,
                }}>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Admission CTA */}
          <div style={{
            marginTop: 'clamp(3rem,5vw,4rem)',
            border: '1px solid rgba(201,168,76,.2)',
            padding: 'clamp(2rem,4vw,3rem) clamp(2rem,5vw,4rem)',
            background: 'rgba(201,168,76,.03)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.56rem', letterSpacing: '0.25em', color: gold, marginBottom: '0.7rem' }}>
                ADMISSION PROCESS
              </p>
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: 'clamp(1.2rem,2.5vw,1.7rem)',
                color: cream,
                margin: 0,
                lineHeight: 1.25,
              }}>Ready to Enroll Your Child?</h3>
              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '1rem',
                color: 'rgba(245,240,232,.55)',
                margin: '0.8rem 0 0',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 480,
              }}>
                Fill out our simple online registration form and our team will contact
                you to schedule a visit, answer questions, and discuss your child's goals.
              </p>
            </div>

            <a href="/enroll" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: dark,
              background: gold,
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              ENROLL TODAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}