'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from "next/image";


const NAV_LINKS = [
  { label: 'About',           href: '/about-us' },
  { label: 'What is Fencing?', href: '/what-is-fencing' },
  { label: 'FAQ',             href: '/faq' },
  { label: 'Contact',         href: '/contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const drawerRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef   = useRef<HTMLLIElement[]>([]);
const navRef = useRef<HTMLDivElement>(null);
  /* ── Scroll: add frosted background after 60 px ── */
/*   useEffect(() => {
    const nav = document.getElementById('nav');
    const onScroll = () => {
      nav?.classList.toggle('s', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []); */

  useEffect(() => {
  const onScroll = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('s', window.scrollY > 60);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => window.removeEventListener('scroll', onScroll);
}, []);

  /* ── Drawer open / close animation ── */
  useEffect(() => {
    const drawer  = drawerRef.current;
    const overlay = overlayRef.current;
    if (!drawer || !overlay) return;

    if (open) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';

      gsap.set(drawer,  { x: '100%', display: 'flex' });
      gsap.set(overlay, { display: 'block', opacity: 0 });

      gsap.to(overlay, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(drawer,  { x: '0%',   duration: 0.45, ease: 'power4.out' });

      // Stagger menu items in
      gsap.fromTo(
        itemsRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07, duration: 0.4, delay: 0.2, ease: 'power3.out' },
      );
    } else {
      document.body.style.overflow = '';

      gsap.to(overlay, { opacity: 0, duration: 0.25 });
      gsap.to(drawer,  {
        x: '100%',
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(drawer,  { display: 'none' });
          gsap.set(overlay, { display: 'none' });
        },
      });
    }
  }, [open]);

  /* ── Close drawer on Escape key ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

/*   useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.nav-logo', { opacity: 1, duration: 0.8, delay: 0.2 });
    gsap.to('.nav-desktop-item', {
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
    });
    
  });

  return () => ctx.revert();
}, []);
 */
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo('.nav-logo',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );

    gsap.fromTo('.nav-desktop-item',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
    );
  });

  return () => ctx.revert();
}, []);

  return (
    <>
      {/* ───────────────── NAV BAR ───────────────── */}
      <nav
        id="nav"
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(0.9rem, 2vw, 1.5rem) clamp(1rem, 5vw, 4rem)',
          borderBottom: '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
        className="nav-bar"
      >
        {/* Logo */}
        <Link
  href="/"
  className="nav-logo"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "Cinzel, serif",
    fontSize: "clamp(0.72rem, 2vw, 1rem)",
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "#C9A84C",
    opacity: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
  }}
>
<div style={{ width: "clamp(140px, 20vw, 180px)", height: 60, position: "relative" }}>
  <Image
    src="/images/logo-dfc.jpeg"
    alt="Deccan Fencing Club Logo"
    fill
    sizes="(max-width: 768px) 140px, 180px"
    style={{
      objectFit: "contain",
    }}
  />
</div>

  {/* DECCAN FENCING CLUB */}
</Link>

        {/* Desktop links */}
        <ul
          className="nav-links"
          style={{
            display: 'flex',
            gap: 'clamp(1.2rem, 3vw, 2.5rem)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((item, i) => (
            <li key={i}  className="nav-desktop-item">
              {/* <a
                href={item.href}
                className="nav-links a"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#F5F0E8',
                  opacity: 0,
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
              >
                {item.label}
              </a> */}
              <Link href={item.href}
                className="nav-links a"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#F5F0E8',
                  // opacity: 0,
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}> {item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/eventregistration"
          className="nav-cta nav-desktop-item"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid #C9A84C',
            padding: '0.65rem 1.6rem',
            opacity: 0,
            position: 'relative',
            overflow: 'hidden',
            textDecoration: 'none',
            transition: 'color 0.3s',
            display: 'none',
          }}
          onMouseEnter={e => {
            (e.currentTarget.querySelector('.cta-fill') as HTMLElement).style.transform = 'scaleX(1)';
            e.currentTarget.style.color = '#07080A';
          }}
          onMouseLeave={e => {
            (e.currentTarget.querySelector('.cta-fill') as HTMLElement).style.transform = 'scaleX(0)';
            e.currentTarget.style.color = '#C9A84C';
          }}
        >
          <span
            className="cta-fill"
            style={{
              position: 'absolute', inset: 0,
              background: '#C9A84C',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>Register Now</span>
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            zIndex: 110,
          }}
          className="nav-hamburger"
        >
          {/* Three bar icon that morphs into X */}
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: '#C9A84C',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transformOrigin: 'center',
                transform: open
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 1 ? 'scaleX(0)'
                  : 'translateY(-6.5px) rotate(-45deg)'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ───────────────── MOBILE OVERLAY ───────────────── */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          background: 'rgba(7,8,10,0.75)',
          zIndex: 105,
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />

      {/* ───────────────── MOBILE DRAWER ───────────────── */}
      <div
        ref={drawerRef}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 110,
          background: 'linear-gradient(160deg, #0E1116 0%, #07080A 100%)',
          borderLeft: '1px solid rgba(201,168,76,.18)',
          flexDirection: 'column',
          padding: '5rem 2.5rem 3rem',
          gap: 0,
          overflowY: 'auto',
        }}
      >
        {/* Gold top rule */}
        <div style={{ height: '1px', background: 'rgba(201,168,76,.25)', marginBottom: '2.5rem' }} />

        {/* Drawer nav links */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
          {NAV_LINKS.map((item, i) => (
            <li
              key={i}
              ref={el => { if (el) itemsRef.current[i] = el; }}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#F5F0E8',
                  textDecoration: 'none',
                  padding: '1.1rem 0',
                  borderBottom: '1px solid rgba(201,168,76,.08)',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#C9A84C';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#F5F0E8';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <span style={{ color: 'rgba(201,168,76,.5)', marginRight: '0.8rem', fontSize: '0.55rem' }}>⚔</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer CTA */}
        <a
          href="/eventregistration"
          onClick={() => setOpen(false)}
          ref={el => { if (el) itemsRef.current[NAV_LINKS.length] = el as unknown as HTMLLIElement; }}
          style={{
            display: 'block',
            marginTop: '2.5rem',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#07080A',
            background: '#C9A84C',
            padding: '1rem 1.5rem',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Register Now
        </a>

        {/* Decorative bottom tagline */}
        <p style={{
          marginTop: 'auto',
          paddingTop: '2rem',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.5rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,.3)',
          textAlign: 'center',
        }}>
          Est. Hyderabad · Since 2015
        </p>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        /* Scrolled state */
        #nav.s {
          background: rgba(7, 8, 10, 0.88);
          border-bottom-color: rgba(201, 168, 76, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        /* Desktop: show links + CTA, hide hamburger */
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop-item { display: flex !important; }
        }

        /* Mobile: hide desktop items, show hamburger */
        @media (max-width: 767px) {
          .nav-desktop-item { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}