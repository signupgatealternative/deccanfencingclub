'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText?: string;
}

export default function PageHeader({ title, subtitle, badgeText = '◆ DECCAN FENCING CLUB' }: PageHeaderProps) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.to('.page-badge', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.page-title', { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to('.page-subtitle', { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .to('.page-divider', { width: 100, duration: 0.8 }, 0.6);
  }, []);

  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 4rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(160deg, #0C0E12 20%, #07080A)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(187,36,35,.08) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="page-badge" style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <span
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.58rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(187, 36, 35, 0.35)',
            padding: '0.45rem 1.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '2rem',
          }}
        >
          {badgeText}
        </span>
      </div>

      <h1
        className="page-title"
        style={{
          fontFamily: 'Cinzel Decorative, serif',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: '#F5F0E8',
          margin: '0 0 1.5rem 0',
          opacity: 0,
          transform: 'translateY(30px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </h1>

      <div
        className="page-divider"
        style={{
          width: 0,
          height: '2px',
          background: '#C9A84C',
          margin: '1.5rem 0',
          transition: 'width 0.8s',
        }}
      />

      <p
        className="page-subtitle"
        style={{
          fontFamily: 'Crimson Pro, serif',
          fontSize: '1.1rem',
          fontWeight: 300,
          lineHeight: 1.8,
          color: 'rgba(245, 240, 232, 0.7)',
          maxWidth: '700px',
          opacity: 0,
          transform: 'translateY(20px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {subtitle}
      </p>
    </section>
  );
}
