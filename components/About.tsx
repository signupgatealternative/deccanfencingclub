'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    // Set initial hidden states via GSAP (NOT inline JSX styles)
    // so GSAP fully owns the values and .to() works correctly.
    gsap.set('#ac',        { opacity: 0, x: 50 });
    gsap.set('.s-tag-i',   { opacity: 0, x: -30 });
    gsap.set('#atitle .w', { opacity: 0, y: '110%' });
    gsap.set('#al li',     { opacity: 0, x: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',   // fires a bit earlier so content is never missed
        once: true,         // only play forward once
      },
    });

    tl.to('#ac',          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .to('.s-tag-i',     { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
      .to('#atitle .w',   { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('#al li',       { opacity: 1, x: 0, stagger: 0.1,  duration: 0.5, ease: 'power3.out' }, '-=0.2');

    // Refresh after a tick so ScrollTrigger measures layout correctly
    // (important when Marquee or other components affect page height)
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <section
        id="about"
        className="about-section"
        style={{
          position: 'relative',
          background: '#0C0E12',
          minHeight: '100vh',
          padding: 'clamp(4rem, 10vw, 7rem) clamp(1.2rem, 6vw, 4rem)',
        }}
      >
        {/* Corner accents */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '180px', height: '180px',
          borderTop: '1px solid rgba(201,168,76,.12)',
          borderLeft: '1px solid rgba(201,168,76,.12)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '180px', height: '180px',
          borderBottom: '1px solid rgba(201,168,76,.12)',
          borderRight: '1px solid rgba(201,168,76,.12)',
          pointerEvents: 'none',
        }} />

        <div className="about-inner">

          {/* ── LEFT: fencer landing zone (desktop only) ── */}
          <div id="about-vis-target" className="about-vis">
            <div style={{
              position: 'absolute', inset: '20px',
              border: '1px solid rgba(201,168,76,.15)',
              pointerEvents: 'none',
            }} />
            {/* Corner pips */}
            {([
              { top: '20px',  left: '20px',  borderTop: '2px solid rgba(201,168,76,.4)', borderLeft: '2px solid rgba(201,168,76,.4)' },
              { top: '20px',  right: '20px', borderTop: '2px solid rgba(201,168,76,.4)', borderRight: '2px solid rgba(201,168,76,.4)' },
              { bottom: '20px', left: '20px', borderBottom: '2px solid rgba(201,168,76,.4)', borderLeft: '2px solid rgba(201,168,76,.4)' },
              { bottom: '20px', right: '20px', borderBottom: '2px solid rgba(201,168,76,.4)', borderRight: '2px solid rgba(201,168,76,.4)' },
            ] as React.CSSProperties[]).map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: '12px', height: '12px', ...s }} />
            ))}
          </div>

          {/* ── RIGHT: text content — no initial opacity/transform here ── */}
          <div id="ac" className="about-c">

            {/* Tag line */}
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.56rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1rem',
            }}>
              <span className="s-tag-i" style={{ display: 'block' }}>
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2
              id="atitle"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#F5F0E8',
                overflow: 'hidden',
              }}
            >
              {['Born', 'in', 'the'].map((w, i) => (
                <span key={i} className="w" style={{ display: 'inline-block' }}>{w}&nbsp;</span>
              ))}
              <br />
              <span className="w" style={{ display: 'inline-block', color: '#C9A84C' }}>Spirit</span>
              &nbsp;
              {['of', 'the', 'Deccan'].map((w, i) => (
                <span key={i} className="w" style={{ display: 'inline-block' }}>{w}&nbsp;</span>
              ))}
            </h2>

            {/* Body copy */}
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              lineHeight: 1.9,
              fontWeight: 300,
              color: 'rgba(245,240,232,.62)',
              marginTop: '1.5rem',
            }}>
              Founded in 2023, Deccan Fencing Club was born from a vision to bring
              world-class fencing to the heart of Telangana. Rooted in the warrior
              heritage of the Deccan plateau, we nurture athletes from grassroots to
              national podium.
            </p>

            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              lineHeight: 1.9,
              fontWeight: 300,
              color: 'rgba(245,240,232,.62)',
              marginTop: '1.2rem',
            }}>
              Our certified coaches have represented India at the highest international
              levels at Gachibowli, Hyderabad.
            </p>

            {/* List */}
            <ul id="al" style={{
              listStyle: 'none',
              marginTop: '2rem',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem',
            }}>
              {[
                'Affiliated with Fencing Association of India (FAI)',
                'Telangana State Fencing Association member club',
                'Nationally & internationally credentialed coaching staff',
                'Competition, recreational & school outreach programmes',
              ].map((item, i) => (
                <li key={i} style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(0.58rem, 1.5vw, 0.7rem)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,.5)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}>
                  <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }}>⚔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        /* Desktop: two-column grid */
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          min-height: 80vh;
        }
        .about-vis {
          width: 100%;
          height: 65vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-inner {
            grid-template-columns: 45% 55%;
            gap: 2rem;
          }
          .about-vis { height: 55vh; }
        }

        /* Mobile: single column, hide fencer zone */
        @media (max-width: 767px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: unset;
          }
          .about-vis { display: none !important; }
          .about-c   { width: 100%; }
        }
      `}</style>
    </>
  );
}