'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const day1 = [
  { time: '07:00 – 09:00', event: 'Venue Open · Weapon Control & Equipment Check', label: 'All' },
  { time: '09:00 – 12:00', event: 'U12 Foil Individual · Pools & Direct Elimination', label: 'Foil' },
  { time: '09:00 – 12:00', event: 'U14 Épée Individual · Pools & Direct Elimination', label: 'Épée' },
  { time: '12:00 – 13:00', event: 'Lunch Break', label: '–' },
  { time: '13:00 – 16:00', event: 'U17 Foil Individual · Pools & Direct Elimination', label: 'Foil' },
  { time: '13:00 – 16:00', event: 'U20 Sabre Individual · Pools & Direct Elimination', label: 'Sabre' },
  { time: '16:30 – 18:00', event: 'Finals · U12 Foil · U14 Épée · U17 Foil', label: 'Finals' },
  { time: '18:00 – 19:00', event: 'Medallion Ceremony — Day 1', label: 'Ceremony' },
];

const day2 = [
  { time: '07:30 – 09:00', event: 'Venue Open · Day 2 Registration', label: 'All' },
  { time: '09:00 – 12:30', event: 'Senior Men & Women Épée · Pools & DE', label: 'Épée' },
  { time: '09:00 – 12:30', event: 'Senior Men & Women Foil · Pools & DE', label: 'Foil' },
  { time: '12:30 – 13:30', event: 'Lunch Break', label: '–' },
  { time: '13:30 – 16:00', event: 'Mixed Team Events · Épée & Sabre', label: 'Team' },
  { time: '16:00 – 17:30', event: 'Grand Finals · Senior Foil · Senior Épée · Teams', label: 'Finals' },
  { time: '17:30 – 19:00', event: 'Grand Medallion & Awards Ceremony', label: 'Ceremony' },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#schedule',
      start: 'top 70%',
      onEnter: () => {
        gsap.to('#scht', { opacity: 1 });
        gsap.to('#schtitle .w', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to('.sch-row', {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
        });
      },
      once: true,
    });
  }, []);

  const currentDay = activeDay === 1 ? day1 : day2;

  return (
    <section
      id="schedule"
      style={{
        background: '#07080A',
        borderTop: '1px solid rgba(201,168,76,.08)',
        padding: '7rem 4rem',
      }}
    >
      <div
        className="s-tag"
        id="scht"
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
        <span>Deccan Open 2025</span>
      </div>

      <h2
        className="s-title"
        id="schtitle"
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(2rem,4vw,3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
          Event
        </span>
        {' '}
        <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
          Schedule
        </span>
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, color: 'rgba(245,240,232,.62)', marginBottom: '2.5rem' }}>
        12–13 July 2025 &nbsp;·&nbsp; Gachibowli Indoor Stadium, Hyderabad
      </p>

      <div style={{ maxWidth: '900px' }}>
        <div
          className="tab-row"
          style={{
            display: 'flex',
            maxWidth: '900px',
            marginBottom: '0',
          }}
        >
          {[1, 2].map((day) => (
            <button
              key={day}
              className="tb"
              id={`tb${day}`}
              onClick={() => setActiveDay(day)}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                background: activeDay === day ? '#C9A84C' : '#12151A',
                color: activeDay === day ? '#07080A' : '#6A6560',
                border: '1px solid rgba(201,168,76,.1)',
                borderBottom: 'none',
                padding: '0.9rem 2rem',
                cursor: 'pointer',
                transition: 'background 0.25s, color 0.25s',
              }}
            >
              Day {day} — {day === 1 ? '12 July' : '13 July'}
            </button>
          ))}
        </div>

        <div
          className="sch-body"
          id="schb"
          style={{
            border: '1px solid rgba(201,168,76,.1)',
            background: '#12151A',
            maxWidth: '900px',
          }}
        >
          {currentDay.map((row, i) => (
            <div
              key={i}
              className="sch-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr auto',
                alignItems: 'center',
                gap: '2rem',
                padding: '1.4rem 2rem',
                borderBottom: '1px solid rgba(201,168,76,.06)',
                transform: 'translateX(-30px)',
                opacity: 0,
                transition: 'background 0.2s',
              }}
            >
              <span
                className="sch-t"
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  color: '#C9A84C',
                }}
              >
                {row.time}
              </span>
              <span
                className="sch-e"
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                }}
              >
                {row.event}
              </span>
              <span
                className="sch-n"
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.52rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#6A6560',
                  textAlign: 'right',
                }}
              >
                {row.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
