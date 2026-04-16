'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Register() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#register',
      start: 'top 70%',
      onEnter: () => {
        gsap.to('#rt', { opacity: 1 });
        gsap.to('#rtitle .w', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to('#ft tr', {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
        });
        gsap.to('#rf', {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        });
      },
      once: true,
    });
  }, []);

  return (
    <section
      id="register"
      style={{
        background: '#1A1E26',
        borderTop: '3px solid #C9A84C',
        padding: '7rem 4rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '7rem',
          alignItems: 'start',
        }}
      >
        <div id="ri">
          <div
            className="s-tag"
            id="rt"
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
            <span>Registration</span>
          </div>

          <h2
            className="s-title"
            id="rtitle"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              overflow: 'hidden',
            }}
          >
            <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
              Enter
            </span>
            {' '}
            <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
              the
            </span>
            <br />
            <span className="w" style={{ display: 'inline-block', transform: 'translateY(110%)', opacity: 0 }}>
              Championship
            </span>
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, color: 'rgba(245,240,232,.62)', marginTop: '1rem' }}>
            Deccan Open 2025 · Registration closes 30 June 2025. Entries accepted from all FAI-affiliated clubs and schools.
          </p>

          <table
            className="fee-t"
            id="ft"
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '2rem',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: '0.88rem 1rem',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(201,168,76,.08)',
                    fontFamily: "'Cinzel',serif",
                    fontSize: '0.56rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  Event Type
                </th>
                <th
                  style={{
                    padding: '0.88rem 1rem',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(201,168,76,.08)',
                    fontFamily: "'Cinzel',serif",
                    fontSize: '0.56rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  Member
                </th>
                <th
                  style={{
                    padding: '0.88rem 1rem',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(201,168,76,.08)',
                    fontFamily: "'Cinzel',serif",
                    fontSize: '0.56rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  Non-Member
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { event: 'Individual (1 weapon)', member: '₹800', nonMember: '₹1,200' },
                { event: 'Individual (2 weapons)', member: '₹1,400', nonMember: '₹2,000' },
                { event: 'Team Entry', member: '₹2,500', nonMember: '₹3,500' },
                { event: 'Schools Group (5+)', member: '₹600/ea', nonMember: '₹900/ea' },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    transform: 'translateX(-20px)',
                    opacity: 0,
                  }}
                >
                  <td
                    style={{
                      padding: '0.88rem 1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(201,168,76,.08)',
                      fontSize: '0.95rem',
                      color: 'rgba(245,240,232,.68)',
                    }}
                  >
                    {row.event}
                  </td>
                  <td
                    style={{
                      padding: '0.88rem 1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(201,168,76,.08)',
                      fontSize: '0.95rem',
                      color: 'rgba(245,240,232,.68)',
                    }}
                  >
                    {row.member}
                  </td>
                  <td
                    style={{
                      padding: '0.88rem 1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(201,168,76,.08)',
                      fontSize: '0.95rem',
                      color: 'rgba(245,240,232,.68)',
                    }}
                  >
                    {row.nonMember}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              border: '1px solid rgba(201,168,76,.18)',
              background: 'rgba(201,168,76,.03)',
            }}
          >
            <p
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '0.6rem',
              }}
            >
              Important Notes
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,.52)',
              }}
            >
              All fencers must present FIE-compliant equipment for weapon check. A coach or team manager must accompany all U12 athletes. Fees are non-refundable after 30 June 2025.
            </p>
          </div>
        </div>

        <div
          className="frm"
          id="rf"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            opacity: 0,
            transform: 'translateX(40px)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <label
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                }}
              >
                First Name
              </label>
              <input type="text" placeholder="Arjun" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <label
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                }}
              >
                Last Name
              </label>
              <input type="text" placeholder="Sharma" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.54rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}
            >
              Email Address
            </label>
            <input type="email" placeholder="arjun@example.com" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.54rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}
            >
              Phone Number
            </label>
            <input type="tel" placeholder="+91 98765 43210" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <label
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                }}
              >
                Age Category
              </label>
              <select style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }}>
                <option value="">Select</option>
                <option>U10</option>
                <option>U12</option>
                <option>U14</option>
                <option>U17</option>
                <option>U20</option>
                <option>Senior</option>
                <option>Veteran</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <label
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                }}
              >
                Weapon
              </label>
              <select style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }}>
                <option value="">Select</option>
                <option>Foil</option>
                <option>Épée</option>
                <option>Sabre</option>
                <option>All Three</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.54rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}
            >
              Club / School Affiliation
            </label>
            <input type="text" placeholder="Club or school name" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.54rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}
            >
              Notes
            </label>
            <textarea placeholder="Accommodation, visa letters, accessibility…" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.18)', color: '#F5F0E8', padding: '0.9rem 1rem', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none', transition: 'border-color 0.25s, background 0.25s', resize: 'vertical', minHeight: '90px' }} />
          </div>

          <button
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: '#C9A84C',
              color: '#07080A',
              border: 'none',
              padding: '1.1rem 2.5rem',
              cursor: 'pointer',
              transition: 'background 0.25s, transform 0.2s',
              alignSelf: 'flex-start',
              marginTop: '0.5rem',
            }}
          >
            Submit Registration →
          </button>
        </div>
      </div>
    </section>
  );
}
