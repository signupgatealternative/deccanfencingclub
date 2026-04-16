'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { icon: '🌱', title: 'Beginners Programme', desc: 'Introduction to footwork, blade work, and fundamental rules. Open to all ages from 6 years. Trial sessions every Saturday — no prior experience required.', n: '01' },
  { icon: '🎯', title: 'Intermediate Development', desc: 'Tactical development, video bout analysis, and structured preparation for local and state-level competitions with periodic grading assessments.', n: '02' },
  { icon: '🏆', title: 'Elite Performance Track', desc: 'High-performance programme targeting Sub-Junior & Junior Nationals, Asian Cup pathways, and Commonwealth Games qualification routes.', n: '03' },
  { icon: '🏫', title: 'Schools Outreach', desc: 'Partnership with Hyderabad schools to introduce fencing with all equipment provided. Talent pathways into the main academy for standout students.', n: '04' },
];

export default function Training() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#training-outer',
      start: 'top 70%',
      onEnter: () => {
        gsap.to('#trt', { opacity: 1 });
        gsap.to('#trtitle .w', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to('#tcards .t-card', {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <div
      id="training-outer"
      style={{
        background: '#0C0E12',
        borderTop: '1px solid rgba(201,168,76,.08)',
      }}
    >
      <div id="training-pin" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', alignItems: 'start' }}>
        <div
          className="t-sticky"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem',
          }}
        >
          <div
            className="s-tag"
            id="trt"
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
            <span>Academy</span>
          </div>

          <h2
            className="s-title"
            id="trtitle"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              overflow: 'hidden',
            }}
          >
            <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
              Training
            </span>
            <br />
            <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
              Programmes
            </span>
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, color: 'rgba(245,240,232,.62)', marginTop: '1.5rem', maxWidth: '400px' }}>
            Every programme is built around individual development, periodisation, and competition preparation — from first touch to national team level.
          </p>

          <div style={{ marginTop: '3rem' }}>
            <div
              className="s-tag"
              id="fac"
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
              }}
            >
              <span>Facilities</span>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, color: 'rgba(245,240,232,.62)', maxWidth: '380px', marginTop: '0.5rem' }}>
              2 electric pistes · Armoury & weapon repair · Video analysis suite · Strength & conditioning gym
            </p>
          </div>
        </div>

        <div
          className="t-cards"
          id="tcards"
          style={{
            padding: '4rem',
          }}
        >
          {programs.map((prog, i) => (
            <div
              key={i}
              className="t-card"
              data-n={prog.n}
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(201,168,76,.1)',
                background: '#12151A',
                marginBottom: '1.5rem',
                transform: 'translateX(60px)',
                opacity: 0,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              <div
                style={{
                  content: `attr(data-n)`,
                  position: 'absolute',
                  right: '1.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontFamily: "'Cinzel Decorative',serif",
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(201,168,76,.055)',
                  pointerEvents: 'none',
                  lineHeight: 1,
                }}
              >
                {prog.n}
              </div>

              <div
                className="t-icon"
                style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                }}
              >
                {prog.icon}
              </div>

              <div
                className="t-title"
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: '0.7rem',
                }}
              >
                {prog.title}
              </div>

              <div
                className="t-desc"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  color: 'rgba(245,240,232,.55)',
                }}
              >
                {prog.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
