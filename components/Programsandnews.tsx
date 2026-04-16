"use client";

const gold = '#C9A84C';
const cream = '#F5F0E8';
const dark = '#07080A';

const programs = [
  { level: 'Beginner', age: 'Ages 6 – 10', title: 'Little Blades', desc: 'Fun, structured introduction to fencing. Footwork, coordination, and the joy of the blade.' },
  { level: 'Intermediate', age: 'Ages 11 – 14', title: 'Junior Competitive', desc: 'Technical depth, tactical thinking, and first competitive bouts — building champions from the ground up.' },
  { level: 'Advanced', age: 'Ages 15+', title: 'Elite Squad', desc: 'Periodised training, national tournament preparation, and individualised coaching for serious competitors.' },
  { level: 'Adult', age: 'All ages', title: 'Adult Programme', desc: 'Whether you\'re a complete beginner or a returning fencer, our adult sessions welcome all experience levels.' },
];

const news = [
  {
    date: '2026',
    tag: 'National Championship',
    title: '13th Mini & 7th Child National Fencing Championship 2025–26',
    desc: 'Blades up, heads high — gold is ours! 🥇 Congratulations Reeyansh, U10 Foil National Champion!',
  },
  {
    date: '2025',
    tag: 'International',
    title: 'Thailand Navy Open Tournament',
    desc: 'DFC kids crossed swords with the world and returned with bronze 🥉! Congratulations Karthikeya — U10 Épée, Thailand.',
  },
  {
    date: '2026',
    tag: 'ISSO Games',
    title: 'ISSO Games Fencing Championship 2025–26',
    desc: 'A remarkable performance — 1 Gold 🥇 and 3 Silver 🥈🥈🥈 medals! Proud moment for all DFC players. This is just the beginning.',
  },
  {
    date: '2025',
    tag: 'ISSO National',
    title: 'ISSO National Games 2024–25',
    desc: 'Bronze glory 🥉✨ Congratulations Pranavi Cherradi on an outstanding achievement at the ISSO National Games.',
  },
  {
    date: '2025',
    tag: 'Achievement',
    title: 'Samiksha Gariney Wins Gold',
    desc: 'Samiksha Gariney clinched gold at the ISSO Fencing Championship. Featured in Telangana Today.',
    link: 'https://telanganatoday.com/samiksha-gariney-clinches-gold-at-isso-fencing-championship',
  },

];

export default function ProgramsAndNews() {
  return (
    <section style={{
      background: '#0B0D10',
      padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,5rem)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── PROGRAMS ─────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(4rem,8vw,7rem)' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ width: 2, height: 40, background: gold }} />
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.56rem', letterSpacing: '0.28em', color: gold, margin: 0 }}>
                OUR PROGRAMMES
              </p>
              <h2 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: 'clamp(1.5rem,3.5vw,2.4rem)',
                color: cream,
                margin: '0.4rem 0 0',
                lineHeight: 1.2,
              }}>Train at Every Level</h2>
            </div>
          </div>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: 'clamp(1rem,2vw,1.1rem)',
            color: 'rgba(245,240,232,.6)',
            lineHeight: 1.85,
            fontWeight: 300,
            maxWidth: 600,
            marginBottom: '3rem',
          }}>
            From first footsteps on the piste to national-level competition, Deccan Fencing Club
            offers structured programmes designed to develop skilled, confident, and disciplined fencers.
          </p>

          {/* Programs grid — asymmetric 2+2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(201,168,76,.1)',
            border: '1px solid rgba(201,168,76,.1)',
          }}>
            {programs.map((p, i) => (
              <div
                key={i}
                style={{
                  background: dark,
                  padding: 'clamp(2rem,3.5vw,2.8rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  transition: 'background 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = dark)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.52rem',
                    letterSpacing: '0.22em',
                    color: gold,
                    border: `1px solid rgba(201,168,76,.35)`,
                    padding: '0.3rem 0.7rem',
                  }}>{p.level.toUpperCase()}</span>
                  <span style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,232,.3)',
                    fontStyle: 'italic',
                  }}>{p.age}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: 'clamp(1.1rem,2vw,1.35rem)',
                  color: cream,
                  margin: 0,
                  lineHeight: 1.3,
                }}>{p.title}</h3>

                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: 'clamp(0.95rem,1.8vw,1.02rem)',
                  color: 'rgba(245,240,232,.58)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  margin: 0,
                  flex: 1,
                }}>{p.desc}</p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                }}>
                  <a href="/programs" style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.52rem',
                    letterSpacing: '0.18em',
                    color: gold,
                    textDecoration: 'none',
                    borderBottom: `1px solid rgba(201,168,76,.35)`,
                    paddingBottom: '0.1rem',
                    transition: 'border-color 0.2s',
                  }}>VIEW DETAILS →</a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/contact" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: dark,
              background: gold,
              padding: '0.85rem 2rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 700,
            }}>VIEW ALL PROGRAMMES</a>
          </div>
        </div>

        {/* ── DIVIDER ──────────────────────────────────── */}
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,.2) 30%, rgba(201,168,76,.2) 70%, transparent)',
          marginBottom: 'clamp(4rem,8vw,7rem)',
        }} />

        {/* ── NEWS & EVENTS ─────────────────────────────── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ width: 2, height: 40, background: gold }} />
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.56rem', letterSpacing: '0.28em', color: gold, margin: 0 }}>
                LATEST NEWS & EVENTS
              </p>
              <h2 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: 'clamp(1.5rem,3.5vw,2.4rem)',
                color: cream,
                margin: '0.4rem 0 0',
                lineHeight: 1.2,
              }}>Always in Motion</h2>
            </div>
          </div>

          {/* News — horizontal stacked list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,.1)' }}>
            {news.map((n, i) => (
              <div
                key={i}
                style={{
                  background: dark,
                  padding: 'clamp(1.5rem,3vw,2.2rem) clamp(1.5rem,3vw,2.5rem)',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                  transition: 'background 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = dark)}
              >
                {/* Date */}
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.15em', color: gold, margin: 0 }}>{n.date}</p>
                  <span style={{
                    fontFamily: "'Cinzel', serif", fontSize: '0.48rem', letterSpacing: '0.15em',
                    color: 'rgba(201,168,76,.45)', border: '1px solid rgba(201,168,76,.2)',
                    padding: '0.15rem 0.5rem', marginTop: '0.5rem', display: 'inline-block',
                  }}>{n.tag.toUpperCase()}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(0.75rem,1.8vw,0.9rem)',
                    letterSpacing: '0.08em',
                    color: cream,
                    margin: '0 0 0.5rem',
                  }}>{n.title}</h3>
                  <p style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    color: 'rgba(245,240,232,.5)',
                    margin: 0,
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}>{n.desc}</p>
                </div>

                {/* Arrow */}
                <div style={{ color: 'rgba(201,168,76,.4)', fontSize: '1.2rem' }}>→</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/news" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: gold,
              border: '1px solid rgba(201,168,76,.35)',
              padding: '0.85rem 2rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s',
            }}>VIEW ALL NEWS →</a>
          </div>
        </div>
      </div>
    </section>
  );
}