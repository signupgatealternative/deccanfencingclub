'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { bg: 'F', wp: '🤺', nm: 'Foil', ct: 'Touch-based weapon emphasising technique and precision targeting the torso.', pills: ['U10', 'U12', 'U14', 'U17', 'U20', 'Senior', 'Veteran'] },
  { bg: 'É', wp: '⚔️', nm: 'Épée', ct: 'The heaviest blade — whole body valid target, no right-of-way. Pure speed wins.', pills: ['U10', 'U12', 'U14', 'U17', 'U20', 'Senior', 'Veteran'] },
  { bg: 'S', wp: '🗡️', nm: 'Sabre', ct: 'The cavalry weapon — cutting and thrusting, valid above the waist. Explosive action.', pills: ['U14', 'U17', 'U20', 'Senior', 'Veteran'] },
  { bg: '', wp: '🏅', nm: 'Mixed Team', ct: 'Combined gender team events across all three weapons. Min 3 athletes per team.', pills: ['U17', 'U20', 'Senior'], special: true },
  { bg: '', wp: '🎓', nm: 'Schools Cup', ct: 'Exclusively for school teams affiliated with Hyderabad schools fencing programme.', pills: ['U10', 'U12', 'U14'] },
];

export default function Tournament() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#tournament',
      start: 'top 70%',
      onEnter: () => {
        gsap.to('#tt', { opacity: 1 });
        gsap.to('#ttitle .w', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <section
      id="tournament"
      style={{
        background: '#07080A',
        borderTop: '1px solid rgba(201,168,76,.08)',
        padding: '7rem 4rem 0',
      }}
    >
      <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
        <div
          className="s-tag"
          id="tt"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.56rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            overflow: 'hidden',
            opacity: 0,
          }}
        >
          <span style={{ display: 'block' }}>Competition</span>
        </div>
        <h2
          className="s-title"
          id="ttitle"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 'clamp(2rem,4vw,3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            overflow: 'hidden',
          }}
        >
          <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
            Tournament
          </span>
          {' '}
          <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
            Events
          </span>
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, color: 'rgba(245,240,232,.62)', marginTop: '1rem' }}>
          Open to all registered athletes — individual and team events across age categories, three weapons, and multiple skill levels.
        </p>
      </div>

      <div className="hs-wrap" style={{ overflow: 'hidden' }}>
        <div
          className="hs-track"
          id="evt"
          style={{
            display: 'flex',
            gap: '2px',
            willChange: 'transform',
            paddingBottom: '7rem',
          }}
        >
          {events.map((event, i) => (
            <div
              key={i}
              className="ev-card"
              style={{
                flex: '0 0 340px',
                background: event.special ? 'rgba(201,168,76,.05)' : '#12151A',
                padding: '3rem 2.5rem',
                border: '1px solid rgba(201,168,76,.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              <div
                className="ev-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  fontFamily: "'Cinzel Decorative',serif",
                  fontSize: '9rem',
                  fontWeight: 900,
                  color: 'rgba(201,168,76,.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '1.5rem',
                  pointerEvents: 'none',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {event.bg}
              </div>

              <span
                className="ev-tg"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.48rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  background: 'rgba(201,168,76,.1)',
                  color: '#C9A84C',
                  padding: '0.3rem 0.75rem',
                  border: '1px solid rgba(201,168,76,.18)',
                }}
              >
                Individual · Team
              </span>

              <div
                className="ev-wp"
                style={{
                  fontSize: '2.8rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                {event.wp}
              </div>

              <div
                className="ev-nm"
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: event.special ? '#F5F0E8' : '#C9A84C',
                  marginBottom: '0.6rem',
                  position: 'relative',
                }}
              >
                {event.nm}
              </div>

              <div
                className="ev-ct"
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(245,240,232,.48)',
                  lineHeight: 1.7,
                  position: 'relative',
                }}
              >
                {event.ct}
              </div>

              <div
                className="pill-row"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  position: 'relative',
                }}
              >
                {event.pills.map((pill, j) => (
                  <span
                    key={j}
                    className="pill"
                    style={{
                      fontFamily: "'Cinzel',serif",
                      fontSize: '0.5rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem',
                      border: '1px solid rgba(201,168,76,.2)',
                      color: 'rgba(245,240,232,.48)',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
