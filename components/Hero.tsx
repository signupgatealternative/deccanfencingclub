'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Line {
  x: number; y: number; spd: number; len: number;
  a: number; ang: number; w: number;
}
interface Particle {
  x: number; y: number; r: number;
  dx: number; dy: number; a: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ─────────────────────────────────────────────────
     Canvas — falling light streaks + floating motes
  ───────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const lines: Line[] = [];
    const parts: Particle[] = [];

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 14; i++) {
      lines.push({
        x:   Math.random() * 1.6 * window.innerWidth,
        y:   -60,
        spd: 0.15 + Math.random() * 0.3,
        len: 80   + Math.random() * 220,
        a:   0.04 + Math.random() * 0.12,
        ang: Math.PI / 4 + (Math.random() - 0.5) * 0.35,
        w:   0.4  + Math.random() * 0.9,
      });
    }
    for (let i = 0; i < 70; i++) {
      parts.push({
        x:  Math.random() * window.innerWidth,
        y:  Math.random() * window.innerHeight,
        r:  0.4  + Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.28,
        dy: (Math.random() - 0.5) * 0.28,
        a:  0.08 + Math.random() * 0.35,
      });
    }

    let raf: number;
    function draw() {
      if (!W || !H) { raf = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);

      for (const l of lines) {
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.ang);
        const g = ctx.createLinearGradient(0, 0, 0, l.len);
        g.addColorStop(0,   'rgba(201,168,76,0)');
        g.addColorStop(0.5, 'rgba(201,168,76,' + l.a.toFixed(3) + ')');
        g.addColorStop(1,   'rgba(201,168,76,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth   = l.w;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, l.len); ctx.stroke();
        ctx.restore();
        l.y += l.spd;
        if (l.y > H + 60) { l.y = -60; l.x = Math.random() * 1.6 * W; }
      }

      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201,168,76,' + p.a.toFixed(3) + ')';
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ─────────────────────────────────────────────────
     Hero entrance animations
  ───────────────────────────────────────────────── */
  useEffect(() => {
    const htl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    htl
      .to('.nav-logo',       { opacity: 1, duration: 0.7 }, 0)
      .to('.nav-links a',    { opacity: 0.8, stagger: 0.08, duration: 0.5 }, 0.2)
      .to('.nav-cta',        { opacity: 1, duration: 0.5 }, 0.5)
      .to('#hb',             { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power4.inOut' }, 0.4)
      .to('.hero-title .ln', { y: 0, stagger: 0.12, duration: 1, ease: 'power4.out' }, 0.6)
      .to('#hr',             { width: 80, duration: 0.8, ease: 'power3.inOut' }, 0.8)
      .to('#hs',             { opacity: 1, y: 0, duration: 0.7 }, 1.2)
      .to('#ha',             { opacity: 1, duration: 0.6 }, 1.4)
      .to('#hst',            { opacity: 1, duration: 0.7 }, 1.5)
      .to('#sh',             { opacity: 1, duration: 0.6 }, 1.6);

    document.querySelectorAll('.stat-num').forEach((el) => {
      const target = parseFloat(el.getAttribute('data-t') ?? '0');
      gsap.to(el, {
        textContent: Math.round(target),
        duration: 2,
        snap: { textContent: 1 },
        ease: 'power2.out',
        delay: 1.4,
      });
    });
  }, []);

  /* ─────────────────────────────────────────────────
     Fencer scroll — desktop only
     
     Strategy (no fade, pins inside About):
     ─────────────────────────────────────────────────
     Phase 1 — TRAVEL  (Hero → About):
       ScrollTrigger scrubs the fencer (still fixed) from its
       hero resting position to the centre of #about-vis-target.
       trigger: #about, start: "top bottom", end: "top top"

     Phase 2 — PIN inside About:
       Once the fencer lands (#about top hits viewport top),
       we switch it to position:absolute inside #fence-wrap
       so it scrolls with the page naturally — it "lives" inside
       the About section and exits with it at the bottom.
       No fade. No hidden. Just normal document flow.

     All of this is skipped on mobile (window.innerWidth < 768).
  ───────────────────────────────────────────────── */
  useEffect(() => {
    // Skip entirely on mobile — fencer is hidden via CSS
    if (window.innerWidth < 768) return;

    const fencer = document.getElementById('hero-fencer');
    if (!fencer) return;

    let travelST: ScrollTrigger | null = null;
    let resizeTimer: ReturnType<typeof setTimeout>;

    function isMobile() { return window.innerWidth < 768; }

    function getFencerHeight() {
      const vw = window.innerWidth;
      if (vw < 1024) return '62vh';
      return '68vh';
    }

    /* Reset fencer to its hero starting position (fixed, right side) */
    function resetToFixed() {
      fencer.style.height   = getFencerHeight();
      fencer.style.position = 'fixed';
      fencer.style.right    = '5%';
      fencer.style.left     = 'auto';
      fencer.style.top      = '50%';
      fencer.style.bottom   = 'auto';
      fencer.style.display  = 'block';
      gsap.set(fencer, { x: 0, y: 0, yPercent: -50, scaleX: 1, opacity: 1 });
    }

    /* Switch fencer to absolute inside #fence-wrap so it pins in About */
    function dockInAbout() {
      const wrap   = document.getElementById('fence-wrap');
      const target = document.getElementById('about-vis-target');
      if (!wrap || !target) return;

      const wrapRect   = wrap.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const scrollY    = window.scrollY;

      // Centre of target in document coordinates
      const docCentreX = targetRect.left + targetRect.width  / 2 + window.scrollX;
      const docCentreY = targetRect.top  + targetRect.height / 2 + scrollY;

      // Fencer dimensions
      const fW = fencer.offsetWidth;
      const fH = fencer.offsetHeight;

      // Position relative to wrap
      const relLeft = docCentreX - wrapRect.left - window.scrollX - fW / 2;
      const relTop  = docCentreY - (wrapRect.top + scrollY)        - fH / 2;

      fencer.style.position = 'absolute';
      fencer.style.left     = relLeft + 'px';
      fencer.style.top      = relTop  + 'px';
      fencer.style.right    = 'auto';
      fencer.style.bottom   = 'auto';
      gsap.set(fencer, { x: 0, y: 0, yPercent: 0, scaleX: -1 });
    }

    function buildTriggers() {
      travelST?.kill();
      travelST = null;

      if (isMobile()) {
        fencer.style.display = 'none';
        return;
      }

      const aboutSection = document.getElementById('about');
      const visTarget    = document.getElementById('about-vis-target');
      if (!aboutSection || !visTarget) return;

      resetToFixed();

      requestAnimationFrame(() => {
        const aboutRect  = aboutSection.getBoundingClientRect();
        const targetRect = visTarget.getBoundingClientRect();
        const fencerRect = fencer.getBoundingClientRect();

        // Delta to land fencer centre on target centre (in fixed/viewport space)
        const deltaX = (targetRect.left + targetRect.width  / 2) - (fencerRect.left + fencerRect.width  / 2);
        const deltaY = (targetRect.top  - aboutRect.top + targetRect.height / 2) - (window.innerHeight / 2);

        travelST = ScrollTrigger.create({
          trigger: '#about',
          start: 'top bottom',   // about enters viewport
          end:   'top top',      // about top hits viewport top → fencer fully landed
          scrub: 1.2,
          animation: gsap.to(fencer, {
            x: deltaX,
            y: deltaY,
            ease: 'none',
            paused: true,
          }),
          onUpdate(self) {
            // Flip direction at halfway point
            const s = self.progress > 0.5 ? -1 : 1;
            gsap.to(fencer, { scaleX: s, duration: 0.25, overwrite: 'auto' });
          },
          // When About top reaches viewport top → dock fencer into document flow
          onLeave() {
            dockInAbout();
          },
          // When scrolling back up past that point → restore fixed
          onEnterBack() {
            resetToFixed();
            // Rewind travel animation to full progress
            gsap.set(fencer, { x: deltaX, y: deltaY, scaleX: -1 });
          },
        });
      });
    }

    requestAnimationFrame(() => setTimeout(buildTriggers, 120));

    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        travelST?.kill();
        travelST = null;
        if (isMobile()) {
          fencer.style.display = 'none';
        } else {
          buildTriggers();
        }
      }, 200);
    }
    window.addEventListener('resize', onResize);

    return () => {
      travelST?.kill();
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  /* ─────────────────────────────────────────────────
     JSX
  ───────────────────────────────────────────────── */
  return (
    <>
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.2rem, 6vw, 4rem) clamp(2rem, 6vw, 4rem)',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: [
              'radial-gradient(ellipse 70% 60% at 72% 50%, rgba(201,168,76,.08) 0%, transparent 60%)',
              'radial-gradient(ellipse 40% 60% at 10% 85%, rgba(184,52,30,.06) 0%, transparent 50%)',
              'linear-gradient(160deg, #0C0E12 20%, #07080A)',
            ].join(','),
          }}
        />

        {/* Particle canvas */}
        <canvas
          id="hc"
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        {/* Content */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '760px',
          }}
        >
          {/* Badge */}
          <div
            id="hb"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(0.45rem, 1.5vw, 0.58rem)',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,.35)',
              padding: '0.45rem clamp(0.6rem, 2vw, 1.2rem)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: 'clamp(1rem, 4vw, 2.2rem)',
              clipPath: 'inset(0 100% 0 0)',
            }}
          >
            ⚔&nbsp;&nbsp;Est. Hyderabad, India&nbsp;·&nbsp;Since 2015
          </div>

          {/* Heading */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 'clamp(2.4rem, 8vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1.02,
              overflow: 'hidden',
            }}
          >
            <span className="ln" style={{ display: 'block', transform: 'translateY(110%)' }}>
              The Art of
            </span>
            <em className="ln" style={{ display: 'block', fontStyle: 'normal', color: '#C9A84C', transform: 'translateY(110%)' }}>
              The Blade.
            </em>
          </h1>

          {/* Rule */}
          <div id="hr" style={{ width: 0, height: '1px', background: '#C9A84C', margin: 'clamp(1.2rem, 4vw, 2.2rem) 0' }} />

          {/* Sub */}
          <p
            id="hs"
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(245,240,232,.62)',
              maxWidth: '500px',
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            Deccan Fencing Club is Hyderabad&apos;s premier competitive fencing academy —
            training champions across Foil, Épée and Sabre since 2015.
          </p>

          {/* CTA */}
          <div id="ha" style={{ display: 'flex', gap: '1.2rem', marginTop: 'clamp(1.6rem, 5vw, 2.8rem)', opacity: 0 }}>
            <a
              href="#register"
              style={{
                background: '#C9A84C',
                padding: 'clamp(0.7rem, 2vw, 1rem) clamp(1.4rem, 4vw, 2.5rem)',
                color: '#07080A',
                textDecoration: 'none',
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(0.55rem, 1.5vw, 0.66rem)',
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              Join The Club
            </a>
          </div>
        </div>

        {/* Stats bar — hidden on mobile */}
        <div
          id="hst"
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 4vw, 3rem)',
            left: 'clamp(1.2rem, 6vw, 4rem)',
            right: 'clamp(1.2rem, 6vw, 4rem)',
            display: 'flex',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            borderTop: '1px solid rgba(201,168,76,.14)',
            paddingTop: '2rem',
            opacity: 0,
          }}
        />

        <div id="sh" style={{ position: 'absolute', bottom: '2rem', right: '4rem', opacity: 0 }} />
      </section>

      {/* Responsive styles */}
      <style>{`
        /* Hide fencer on mobile entirely */
        @media (max-width: 767px) {
          #hero-fencer { display: none !important; }
          #hst { display: none !important; }
        }
      `}</style>
    </>
  );
}