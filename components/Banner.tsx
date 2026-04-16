'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#upcoming',
      start: 'top 75%',
      onEnter: () => {
        gsap.to('#evb', {
          clipPath: 'inset(0 0 0 0)',
          duration: 1,
          ease: 'power3.inOut',
        });
      },
      once: true,
    });
  }, []);

  return (
    <div
      id="upcoming"
      style={{
        background: 'transparent',
        padding: '0 4rem',
      }}
    >
      <div
        className="ev-banner"
        id="evb"
        style={{
          background: '#12151A',
          display: 'grid',
          gridTemplateColumns: '180px 1fr auto',
          borderTop: '3px solid #C9A84C',
          clipPath: 'inset(0 0 100% 0)',
        }}
      >
        <div
          className="b-date"
          style={{
            background: '#C9A84C',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            color: '#07080A',
          }}
        >
          <span
            className="b-day"
            style={{
              fontFamily: "'Cinzel Decorative',serif",
              fontSize: '3.5rem',
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            6-7
          </span>
          <span
            className="b-mon"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.72rem',
              letterSpacing: '0.35em',
              fontWeight: 700,
              marginTop: '0.3rem',
              textTransform: 'uppercase',
            }}
          >
            June
          </span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '0.2em', opacity: 0.6, marginTop: '0.2rem' }}>2025</span>
        </div>

        <div
          className="b-info"
          style={{
            padding: '3rem 3.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="b-tag"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.54rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1rem',
            }}
          >
            Upcoming Tournament
          </div>
          <h2
            className="b-title"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '1.6rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1rem',
              color: '#F5F0E8',
            }}
          >
            Deccan Open Fencing Championship 2026
          </h2>
          <div
            className="b-meta"
            style={{
              fontSize: '0.92rem',
              fontWeight: 300,
              color: 'rgba(245,240,232,.48)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            <span>📍 Kotla Vijaya Bhaskar Reddy Indoor Stadium, Yousufguda, Hyderabad,India</span>
            <span>🏅 Foil · Épée · Sabre — U10 / U12 / U14 / U16</span>
            <span>6–7 June 26 Registration closes 17 May</span>
          </div>
        </div>

        <div
          className="b-action"
          style={{
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '1.2rem',
          }}
        >
          <a
            href="#register"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: '#C9A84C',
              color: '#07080A',
              border: 'none',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Register Now</span>
          </a>
          <a
            href="#schedule"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: '#F5F0E8',
              border: '1px solid rgba(245,240,232,.22)',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.25s, color 0.25s, transform 0.2s',
            }}
          >
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
