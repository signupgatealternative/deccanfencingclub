'use client';


import { useEffect, useMemo, useRef, useState } from 'react';


/* ─── Countdown helper ─── */
/* function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    function tick() {
      const diff = Math.max(0, target.getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
} */

  function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());

      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    tick(); // initial run
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [target]); // ✅ now stable

  return t;
}

/* ─── Section divider ─── */
function Diamonds() {
  return (
    <div style={{ textAlign: 'center', color: '#C9A84C', fontSize: '0.55rem', letterSpacing: '0.5em', margin: '0 0 2rem' }}>
      ◆ &nbsp; ◇ &nbsp; ◆
    </div>
  );
}

/* ─── Section title ─── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
      fontWeight: 900,
      color: '#F5F0E8',
      textAlign: 'center',
      marginBottom: '3rem',
    }}>
      {children}
    </h2>
  );
}

/* ─── Table ─── */
function GoldTable({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid rgba(201,168,76,.18)',
      maxWidth: 760,
      margin: '0 auto',
      width: '100%',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        {children}
      </table>
    </div>
  );
}

function Th({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <th style={{
      background: '#C9A84C',
      color: '#07080A',
      fontFamily: "'Cinzel', serif",
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      padding: '1rem 1.5rem',
      textAlign: 'left',
      ...style,
    }}>
      {children}
    </th>
  );
}

function Td({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <td style={{
      fontFamily: "'Crimson Pro', serif",
      fontSize: '0.95rem',
      color: '#F5F0E8',
      padding: '0.9rem 1.5rem',
      borderBottom: '1px solid rgba(201,168,76,.1)',
      ...style,
    }}>
      {children}
    </td>
  );
}

function TdBold({ children }: { children: React.ReactNode }) {
  return (
    <Td style={{ fontWeight: 600, color: '#C9A84C', background: 'rgba(201,168,76,.06)' }}>
      {children}
    </Td>
  );
}

function BulletRow({ children }: { children: React.ReactNode }) {
  return (
    <li style={{
      display: 'flex',
      gap: '0.9rem',
      alignItems: 'flex-start',
      fontFamily: "'Crimson Pro', serif",
      fontSize: '0.97rem',
      color: 'rgba(245,240,232,.82)',
      lineHeight: 1.75,
      marginBottom: '0.7rem',
    }}>
      <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '0.25rem' }}>◆</span>
      <span>{children}</span>
    </li>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function RegisterPage() {
 /*  const EVENT_DATE = new Date('2026-06-06T08:00:00+05:30');
  const DEADLINE   = new Date('2026-05-28T23:59:59+05:30'); */
  const EVENT_DATE = useMemo(
  () => new Date('2026-06-06T08:00:00+05:30'),
  []
);

const DEADLINE = useMemo(
  () => new Date('2026-05-28T23:59:59+05:30'),
  []
);
  const cd = useCountdown(EVENT_DATE);
  const dl = useCountdown(DEADLINE);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({
   name: '', parentName: '',        // ← parentName added
  email: '', phone: '', dob: '',
  category: '', weapon: '',
  club: '', tshirt: '', notes: '',
  // address
  street1: '', street2: '',
  city: '', state: '', pin: '', country: 'India',
  // doc
  aadhaarFile: null as File | null,
  });

  const formRef = useRef<HTMLElement>(null);

  function pad(n: number) { return String(n).padStart(2, '0'); }

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    window.scrollTo({ top: formRef.current?.offsetTop ?? 0, behavior: 'smooth' });
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,.04)',
    border: '1px solid rgba(201,168,76,.22)',
    color: '#F5F0E8',
    fontFamily: "'Crimson Pro', serif",
    fontSize: '1rem',
    padding: '0.85rem 1.1rem',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color 0.25s',
    appearance: 'none' as const,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.56rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(201,168,76,.8)',
    display: 'block',
    marginBottom: '0.5rem',
  };

  const fieldStyle: React.CSSProperties = { marginBottom: '1.5rem' };

  /* ──────────── JSX ──────────── */
  return (
    <>
  
      <main style={{ background: '#07080A', color: '#F5F0E8', minHeight: '100vh',paddingTop: '80px'  }}>

        {/* ── HERO HEADER ── */}
        <section style={{
          minHeight: '72vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(5rem,10vw,9rem) clamp(1.2rem,6vw,4rem) 4rem',
          background: [
            'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(201,168,76,.07) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 50% at 10% 90%, rgba(187,36,35,.06) 0%, transparent 55%)',
            'linear-gradient(170deg, #0C0E12 20%, #07080A)',
          ].join(','),
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle grid lines */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(201,168,76,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Badge */}
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(0.45rem,1.5vw,0.58rem)',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,.35)',
            padding: '0.45rem 1.3rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '2.2rem',
            position: 'relative',
            zIndex: 2,
          }}>
            ⚔&nbsp;&nbsp;DECCAN FENCING CLUB&nbsp;·&nbsp;HYDERABAD
          </div>

          <h1 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 'clamp(2.6rem,8vw,6.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            position: 'relative',
            zIndex: 2,
            marginBottom: '0.5rem',
          }}>
            Deccan Open
          </h1>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 'clamp(1.5rem,5vw,3.5rem)',
            fontWeight: 900,
            color: '#C9A84C',
            lineHeight: 1.1,
            position: 'relative',
            zIndex: 2,
            marginBottom: '1.8rem',
          }}>
            Fencing 2026
          </h2>

          {/* Divider */}
          <div style={{ width: 80, height: 1, background: '#C9A84C', margin: '0 auto 1.8rem', position: 'relative', zIndex: 2 }} />

          {/* Date / location */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(0.65rem,2vw,0.85rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,.7)',
            position: 'relative',
            zIndex: 2,
            marginBottom: '1rem',
          }}>
            📍 Kotla Vijaya Bhaskar Reddy Indoor Stadium, Yousufguda, Hyderabad,India &nbsp;·&nbsp; June 6–7, 2026
          </p>

          {/* Countdown to event */}
          <div style={{ display: 'flex', gap: 'clamp(0.5rem,3vw,1.5rem)', marginTop: '2.5rem', position: 'relative', zIndex: 2 }}>
            {[['DAYS', cd.d], ['HRS', cd.h], ['MIN', cd.m], ['SEC', cd.s]].map(([label, val]) => {
  const isSec = label === 'SEC';

  return (
    <div
      key={label as string}
      style={{
        border: '1px solid rgba(201,168,76,.28)',
        padding: 'clamp(0.7rem,2vw,1.1rem) clamp(1rem,3vw,2rem)',
        textAlign: 'center',
        minWidth: 'clamp(56px,12vw,88px)',
        background: 'rgba(201,168,76,.04)',
        ...(isSec && {
          animation: 'pulse 1s infinite',
          boxShadow: '0 0 18px rgba(201,168,76,.25)',
        }),
      }}
    >
      <div
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(1.4rem,4vw,2.5rem)',
          fontWeight: 900,
          color: '#C9A84C',
          lineHeight: 1,
        }}
      >
        {pad(val as number)}
      </div>
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.5rem',
          letterSpacing: '0.25em',
          color: 'rgba(245,240,232,.4)',
          marginTop: '0.4rem',
        }}
      >
        {label}
      </div>
    </div>
  );
})}
          </div>

          {/* Registration deadline alert */}
          <div style={{
            marginTop: '2rem',
            position: 'relative',
            zIndex: 2,
            border: '1px solid rgba(187,36,35,.4)',
            background: 'rgba(187,36,35,.07)',
            padding: '0.7rem 1.8rem',
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(0.52rem,1.5vw,0.65rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F5F0E8',
          }}>
            ⚠ Registration closes&nbsp;
            <span style={{ color: '#C9A84C', fontWeight: 700 }}>17 May 2026</span>
            &nbsp;— {dl.d}d {pad(dl.h)}h {pad(dl.m)}m remaining
          </div>

          <a
            href="#register-form"
            style={{
              marginTop: '2.5rem',
              position: 'relative',
              zIndex: 2,
              display: 'inline-block',
              background: '#C9A84C',
              color: '#07080A',
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(0.55rem,1.5vw,0.7rem)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: 'clamp(0.8rem,2vw,1.1rem) clamp(2rem,5vw,3.5rem)',
              textDecoration: 'none',
            }}
          >
            Register Now
          </a>
        </section>

        {/* ── PARTICIPANTS ── */}
        <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)' }}>
          <Diamonds />
          <SectionTitle>Participants</SectionTitle>

          <GoldTable>
            <thead>
              <tr>
                <Th>Category</Th>
                <Th>Age Eligibility</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ['U10',          'Born in or after 2016'],
                ['U12',          'Born in or after 2014'],
                ['U14',          'Born in or after 2012'],
                ['U16',          'Born in or after 2010'],
                
                
                
                
              ].map(([cat, age], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'rgba(0,0,0,.15)' }}>
                  <TdBold>{cat}</TdBold>
                  <Td>{age}</Td>
                </tr>
              ))}
            </tbody>
          </GoldTable>

          <p style={{
            textAlign: 'center',
            fontFamily: "'Crimson Pro', serif",
            fontSize: '0.88rem',
            color: 'rgba(245,240,232,.45)',
            marginTop: '1.5rem',
          }}>
            ◆ Event may be combined or cancelled if there are fewer than 8 entries.
          </p>
        </section>

        {/* ── EQUIPMENT ── */}
        {/* <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)', background: 'rgba(255,255,255,.015)' }}>
          <Diamonds />
          <SectionTitle>Equipment</SectionTitle>

          <GoldTable>
            <thead>
              <tr>
                <Th>Category</Th>
                <Th>Blade Size</Th>
                <Th>Equipment Standard</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Open, Senior, U19, U16, U14', 'Size 5', 'Masks, Jackets, Breeches, Under-Plastrons and Gloves intact — EN13567:2002, 350N penetration resistance'],
                ['U12', 'Size 0–3', ''],
                ['U10, U8', 'Size 0', ''],
              ].map(([cat, blade, equip], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'rgba(0,0,0,.15)' }}>
                  <TdBold>{cat}</TdBold>
                  <Td style={{ textAlign: 'center' }}>{blade}</Td>
                  <Td style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,.72)' }}>{equip}</Td>
                </tr>
              ))}
            </tbody>
          </GoldTable>

          <ul style={{ listStyle: 'none', padding: 0, margin: '2.5rem auto 0', maxWidth: 760 }}>
            <BulletRow>Fencers must present their mask and fencing uniform to the weapon control counter for checking. Only stamped equipment may be used.</BulletRow>
            <BulletRow>In case of any dispute, the decision of the chief referee will be final.</BulletRow>
            <BulletRow><strong>Chest protector:</strong> all fencers must wear a chest protector.</BulletRow>
            <BulletRow><strong>Hair:</strong> long hair must be tied up and placed inside the clothing and/or mask. A yellow card will be given otherwise.</BulletRow>
          </ul>
        </section> */}

        {/* ── ENTRY FEES ── */}
       {/* <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)' }}>
  <Diamonds />
  <SectionTitle>Entry Fees</SectionTitle>

  <div style={{ maxWidth: 760, margin: '0 auto' }}>
    <GoldTable>
      <thead>
        <tr>
          <Th>Registration Window</Th>
          <Th style={{ textAlign: 'center' }}>Individual</Th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ background: 'rgba(255,255,255,.02)' }}>
          <Td>
            <strong style={{ color: '#C9A84C' }}>Online Entry</strong><br />
            <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,.5)' }}>
              Before 28 May 2026
            </span>
          </Td>
          <Td style={{ textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#C9A84C', fontSize: '1.3rem' }}>
            ₹ 1,000
          </Td>
        </tr>
      </tbody>
    </GoldTable>

    <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
      <BulletRow><strong>Registration deadline:</strong> 28 May 2026, 23:59 IST, or until full capacity is reached.</BulletRow>
      <BulletRow><strong>Acceptance of rules:</strong> By submitting your registration, you confirm you have read and agreed to the competition rules.</BulletRow>
      <BulletRow><strong>Fees and confirmation:</strong> Registration fees are <strong>non-refundable</strong> and <strong>non-transferable</strong>. A confirmation email will be issued upon registration.</BulletRow>
      <BulletRow><strong>Schedule conflicts:</strong> If you register for multiple events and there is a timetable conflict after the final schedule is released on <strong>25 May 2026</strong>, you must choose which event to participate in. One conflicting event may be refunded in full.</BulletRow>
    </ul>
  </div>
</section> */}
<section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)' }}>
  <Diamonds />
  <SectionTitle>Entry Fees</SectionTitle>

  <div style={{ maxWidth: 760, margin: '0 auto' }}>
    <GoldTable>
      <thead>
        <tr>
          <Th>Registration Window</Th>
          <Th style={{ textAlign: 'center' }}>Individual</Th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ background: 'rgba(255,255,255,.02)' }}>
          <Td>
            <strong style={{ color: '#C9A84C' }}>Online Entry</strong><br />
            <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,.5)' }}>
              Before 17 May 2026
            </span>
          </Td>
          <Td style={{ textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#C9A84C', fontSize: '1.3rem' }}>
            ₹ 1,000
          </Td>
        </tr>
        <tr style={{ background: 'rgba(255,255,255,.02)' }}>
          <Td>
            <strong style={{ color: '#C9A84C' }}>AT VENUE</strong><br />
            <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,.5)' }}>
              on 6 June 2026
            </span>
          </Td>
          <Td style={{ textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#C9A84C', fontSize: '1.3rem' }}>
            ₹ 1,500
          </Td>
        </tr>
      </tbody>
    </GoldTable>

    <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
      <BulletRow><strong>Registration deadline:</strong> 6 June 2026, 23:59 IST, or until full capacity is reached.</BulletRow>
      <BulletRow><strong>Acceptance of rules:</strong> By submitting your registration, you confirm you have read and agreed to the competition rules.</BulletRow>
      <BulletRow><strong>Fees and confirmation:</strong> Registration fees are <strong>non-refundable</strong> and <strong>non-transferable</strong>. A confirmation email will be issued upon registration.</BulletRow>
      <BulletRow><strong>Schedule conflicts:</strong> If you register for multiple events and there is a timetable conflict after the final schedule is released on <strong>25 May 2026</strong>, you must choose which event to participate in. One conflicting event may be refunded in full.</BulletRow>
    </ul>
  </div>
</section>

        {/* ── FORMAT ── */}
        <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)', background: 'rgba(255,255,255,.015)' }}>
          <Diamonds />
          <SectionTitle>Competition Format</SectionTitle>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1rem', color: 'rgba(245,240,232,.75)', marginBottom: '2rem', lineHeight: 1.75 }}>
              <strong style={{ color: '#C9A84C', fontFamily: "'Cinzel', serif", fontSize: '0.75rem', letterSpacing: '0.15em' }}>INDIVIDUAL EVENTS:</strong>&nbsp;
              There will be one round of Poules, after which a Direct Elimination.
            </p>

            <GoldTable>
              <thead>
                <tr>
                  <Th>Category</Th>
                  <Th>Poules</Th>
                  <Th>Direct Elimination</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['U14, U16', '5 points / 3 mins', '15 points / 3 periods of 3 mins / 1 min break and 1 min break at 8th point for Sabre'],
                  ['U10, U12', '5 points / 3 mins', '10 points / 2 periods of 3 mins / 1 min break and 1 min break at 5th point for Sabre'],
                ].map(([cat, p, de], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'rgba(0,0,0,.15)' }}>
                    <TdBold>{cat}</TdBold>
                    <Td style={{ textAlign: 'center' }}>{p}</Td>
                    <Td style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,.72)' }}>{de}</Td>
                  </tr>
                ))}
              </tbody>
            </GoldTable>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
              <BulletRow>Bout of poule ends when one of the fencers has scored 5 points or three minutes of effective fencing time have passed.</BulletRow>
              <BulletRow>
                Based on number of fencers, direct elimination is structured as follows:
                <ul style={{ marginTop: '0.5rem', listStyle: 'disc', paddingLeft: '1.5rem', color: 'rgba(245,240,232,.65)' }}>
                  <li>16 fencers or less: No elimination in the bout, proceeding straight to Quarter-finals</li>
                  <li>17 fencers or more: 20%–30% elimination in the bout</li>
                </ul>
              </BulletRow>
              {/* <BulletRow><strong>Team Events:</strong> Each team consists of 3–4 fencers. Rankings determined by the sum of individual rankings of the top three fencers. Each match consists of 45 scores (9 relays × 5 scores, 3 minutes per relay).</BulletRow> */}
            </ul>
          </div>
        </section>

        {/* ── COMPETITION MANAGEMENT ── */}
        <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.2rem,6vw,4rem)' }}>
          <Diamonds />
          <SectionTitle>Competition Management</SectionTitle>

          <ul style={{ listStyle: 'none', padding: 0, maxWidth: 760, margin: '0 auto' }}>
            {[
              ['Referee', 'Qualified referees will be appointed by the organizing committee. Referees are required to attend the Referees\' meeting on June 5, 2026, at 4PM. Referees must be properly attired in jacket/blazer and long pants.'],
              ['Directoire Technique (DT)', 'The DT shall be responsible for the technical organization of the competition. Members of DT will be designated by the organizing committee and host club.'],
              ['Protests', 'Appeals against decisions of a referee should be made immediately by the competitor so their team captain can approach the referee, before any decision is made regarding a subsequent hit. If the referee maintains his decision, the complaint shall be brought to the attention of the DT.'],
            ].map(([title, body], i) => (
              <li key={i} style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#C9A84C', flexShrink: 0, fontSize: '0.7rem', marginTop: '0.35rem' }}>◆</span>
                <div>
                  <strong style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: '#F5F0E8',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}>{title}</strong>
                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '0.97rem', color: 'rgba(245,240,232,.72)', lineHeight: 1.75 }}>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── REGISTRATION FORM ── */}
        <section
          id="register-form"
          ref={formRef as React.RefObject<HTMLElement>}
          style={{
            padding: 'clamp(3rem,8vw,7rem) clamp(1.2rem,6vw,4rem)',
            background: [
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,.06) 0%, transparent 60%)',
              'rgba(255,255,255,.02)',
            ].join(','),
          }}
        >
          <Diamonds />
          <SectionTitle>Register for the Event</SectionTitle>

          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                border: '2px solid #C9A84C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '2rem',
                color: '#C9A84C',
              }}>✓</div>
              <h3 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.8rem', marginBottom: '1rem' }}>
                Registration Received!
              </h3>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.05rem', color: 'rgba(245,240,232,.7)', lineHeight: 1.8 }}>
                Thank you for registering for <strong>Deccan Open Fencing 2026</strong>. A confirmation email will be sent to <strong>{form.email}</strong> shortly with payment details.
              </p>
              <div style={{ marginTop: '2rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.25)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '0.5rem' }}>REGISTRATION FEE DUE</p>
                <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '2rem', color: '#F5F0E8' }}>₹ 1,000</p>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '0.88rem', color: 'rgba(245,240,232,.5)', marginTop: '0.3rem' }}>Online payment — details in your confirmation email</p>
              </div>
            </div>
          ) : (
            /* ── FORM ── */
            <form
              onSubmit={submit}
              style={{
                maxWidth: 720,
                margin: '0 auto',
                background: 'rgba(255,255,255,.025)',
                border: '1px solid rgba(201,168,76,.16)',
                padding: 'clamp(1.5rem,5vw,3.5rem)',
              }}
            >
              {/* Fee notice */}
              <div style={{
                background: 'rgba(201,168,76,.08)',
                border: '1px solid rgba(201,168,76,.28)',
                padding: '1.2rem 1.5rem',
                marginBottom: '2.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.22em', color: '#C9A84C', marginBottom: '0.3rem' }}>ONLINE REGISTRATION FEE</p>
                  <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.8rem', color: '#F5F0E8' }}>₹ 1,000 <span style={{ fontSize: '1rem', color: 'rgba(245,240,232,.4)' }}>/individual</span></p>
                </div>
                <div style={{ width: 1, background: 'rgba(201,168,76,.3)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.22em', color: '#C9A84C', marginBottom: '0.3rem' }}>AT VENUE (WALK-IN)</p>
                  <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.8rem', color: '#F5F0E8' }}>₹ 1,500 <span style={{ fontSize: '1rem', color: 'rgba(245,240,232,.4)' }}>/individual</span></p>
                </div>
              </div>

              {/* Grid fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 1.8rem' }}>
                {/* Full Name */}
                <div style={fieldStyle}>
  <label style={labelStyle}>Student Full Name *</label>
  <input required type="text" value={form.name} onChange={set('name')} placeholder="As per records" style={inputStyle}
    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
  />
</div>

{/* Parent Full Name — ADD THIS AFTER STUDENT NAME */}
<div style={fieldStyle}>
  <label style={labelStyle}>Parent / Guardian Full Name *</label>
  <input required type="text" value={form.parentName} onChange={set('parentName')} placeholder="As per records" style={inputStyle}
    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
  />
</div>

                {/* Email */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>

                {/* Phone */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Phone / WhatsApp *</label>
                  <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 xxxxxxxxxx" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>

                {/* DOB */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Date of Birth *</label>
                  <input required type="date" value={form.dob} onChange={set('dob')} style={{ ...inputStyle, colorScheme: 'dark' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>

                {/* Category */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Age Category *</label>
                  <div style={{ position: 'relative' }}>
                    <select required value={form.category} onChange={set('category')} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                    >
                      <option value="" disabled>Select category</option>
                      {['U10', 'U12', 'U14', 'U16'].map(c => (
                        <option key={c} value={c} style={{ background: '#0E1116' }}>{c}</option>
                      ))}
                    </select>
                    <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#C9A84C', pointerEvents: 'none' }}>▾</span>
                  </div>
                </div>

                {/* Weapon */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Weapon *</label>
                  <div style={{ position: 'relative' }}>
                    <select required value={form.weapon} onChange={set('weapon')} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                    >
                      <option value="" disabled>Select weapon</option>
                      {['Foil', 'Épée', 'Sabre'].map(w => (
                        <option key={w} value={w} style={{ background: '#0E1116' }}>{w}</option>
                      ))}
                    </select>
                    <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#C9A84C', pointerEvents: 'none' }}>▾</span>
                  </div>
                </div>

                {/* Club */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Club / Academy</label>
                  <input type="text" value={form.club} onChange={set('club')} placeholder="Your fencing club" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>

                {/* T-shirt */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Hand</label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.tshirt} onChange={set('tshirt')} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                    >
                      <option value="" style={{ background: '#0E1116' }}>Not required</option>
                      {['Left Hand', 'Right Hand'].map(s => (
                        <option key={s} value={s} style={{ background: '#0E1116' }}>{s}</option>
                      ))}
                    </select>
                    <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#C9A84C', pointerEvents: 'none' }}>▾</span>
                  </div>
                </div>
              </div>

              {/* Team name (full width) */}
              {/* <div style={fieldStyle}>
                <label style={labelStyle}>Team Name <span style={{ color: 'rgba(245,240,232,.4)', fontSize: '0.5rem' }}>(if registering for team event)</span></label>
                <input type="text" value={form.team} onChange={set('team')} placeholder="Leave blank for individual entry only" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                />
              </div> */}

              {/* ── COMMUNICATION ADDRESS ── */}
              <div style={{
                margin: '2rem 0 0.5rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,.18)',
              }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.22em', color: '#C9A84C' }}>
                  COMMUNICATION ADDRESS
                </p>
              </div>

              {/* Street Address */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Street Address *</label>
                <input required type="text" value={form.street1} onChange={set('street1')} placeholder="Street Address" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                />
              </div>

              {/* Street Address Line 2 */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Street Address Line 2</label>
                <input type="text" value={form.street2} onChange={set('street2')} placeholder="Apartment, suite, landmark…" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                />
              </div>

              {/* City + State */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 1.8rem' }}>
                <div style={fieldStyle}>
                  <label style={labelStyle}>City *</label>
                  <input required type="text" value={form.city} onChange={set('city')} placeholder="City" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Region / State / Province *</label>
                  <input required type="text" value={form.state} onChange={set('state')} placeholder="State" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>
              </div>

              {/* Pin Code + Country */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 1.8rem' }}>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Pin Code *</label>
                  <input required type="text" value={form.pin} onChange={set('pin')} placeholder="Postal / ZIP code" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                  />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Country *</label>
                  <div style={{ position: 'relative' }}>
                    <select required value={form.country} onChange={set('country')} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                    >
                      <option value="" disabled>Country</option>
                      <option value="India" style={{ background: '#0E1116' }}>India</option>
                      <option value="Other" style={{ background: '#0E1116' }}>Other</option>
                    </select>
                    <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#C9A84C', pointerEvents: 'none' }}>▾</span>
                  </div>
                </div>
              </div>

              {/* ── AADHAAR UPLOAD ── */}
              <div style={{
                margin: '2rem 0 0.5rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,.18)',
              }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.22em', color: '#C9A84C' }}>
                  IDENTITY DOCUMENT
                </p>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Aadhaar Card *</label>
                <label
                  htmlFor="aadhaar-upload"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: '1px dashed rgba(201,168,76,.35)',
                    padding: '1.2rem 1.5rem',
                    cursor: 'pointer',
                    background: 'rgba(201,168,76,.03)',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,.7)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,.07)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,.35)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,.03)';
                  }}
                >
                  <span style={{ fontSize: '1.6rem', color: '#C9A84C' }}>⬆</span>
                  <div>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: '#C9A84C', marginBottom: '0.2rem' }}>
                      {form.aadhaarFile ? form.aadhaarFile.name : 'CLICK TO UPLOAD'}
                    </p>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '0.8rem', color: 'rgba(245,240,232,.4)' }}>
                      {form.aadhaarFile ? `${(form.aadhaarFile.size / 1024).toFixed(0)} KB` : 'PDF, JPG or PNG · max 5 MB'}
                    </p>
                  </div>
                  {form.aadhaarFile && (
                    <span style={{ marginLeft: 'auto', color: '#C9A84C', fontSize: '1.1rem' }}>✓</span>
                  )}
                </label>
                <input
                  id="aadhaar-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  style={{ display: 'none' }}
                  onChange={e => {
                    const file = e.target.files?.[0] ?? null;
                    setForm(f => ({ ...f, aadhaarFile: file }));
                  }}
                />
              </div>

              {/* Notes */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Special Notes / Medical Info</label>
                <textarea
                  value={form.notes}
                  onChange={set('notes')}
                  rows={3}
                  placeholder="Any dietary needs, medical conditions, or requests…"
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,.22)'}
                />
              </div>

              {/* Consent */}
              <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <input type="checkbox" required id="consent" style={{ marginTop: '0.35rem', accentColor: '#C9A84C', cursor: 'pointer' }} />
                <label htmlFor="consent" style={{ fontFamily: "'Crimson Pro', serif", fontSize: '0.9rem', color: 'rgba(245,240,232,.65)', lineHeight: 1.7, cursor: 'pointer' }}>
                  I confirm that I have read and agree to the competition rules, terms, and arrangements set by Deccan Fencing Club. I understand that registration fees are non-refundable and non-transferable.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? 'rgba(201,168,76,.5)' : '#C9A84C',
                  color: '#07080A',
                  border: 'none',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '1.2rem',
                  cursor: loading ? 'wait' : 'pointer',
                  transition: 'opacity 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                {loading ? 'Submitting…' : '⚔ Submit Registration'}
              </button>

              <p style={{
                marginTop: '1rem',
                textAlign: 'center',
                fontFamily: "'Crimson Pro', serif",
                fontSize: '0.82rem',
                color: 'rgba(245,240,232,.35)',
              }}>
                Payment details will be sent to your email after submission.
              </p>
            </form>
          )}
        </section>

        {/* ── FOOTER STRIP ── */}
        <div style={{
          borderTop: '1px solid rgba(201,168,76,.12)',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: "'Cinzel', serif",
          fontSize: '0.52rem',
          letterSpacing: '0.3em',
          color: 'rgba(201,168,76,.3)',
        }}>
          ⚔ &nbsp; DECCAN FENCING CLUB &nbsp;·&nbsp; EST. HYDERABAD &nbsp;·&nbsp; SINCE 2023
        </div>

      </main>
       
      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(245,240,232,.28); }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(2) hue-rotate(5deg); cursor: pointer; }
        select option { background: #0E1116; color: #F5F0E8; }
        @media (max-width: 600px) {
          input, select, textarea { font-size: 16px !important; } /* prevent iOS zoom */
        }
      `}</style>
    </>
  );
}

