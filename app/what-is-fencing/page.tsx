'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader';



gsap.registerPlugin(ScrollTrigger);

export default function WhatIsFencing() {
/*   useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to('.page-badge', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.page-title', { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to('.page-subtitle', { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .to('.page-divider', { width: 100, duration: 0.8 }, 0.6);

    gsap.utils.toArray('.fade-in').forEach((el: any) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
      });
    });
  }, []); */

    useEffect(() => {
  if (typeof window === 'undefined') return;

  const ctx = gsap.context(() => {

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to('.page-badge', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.page-title', { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to('.page-subtitle', { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .to('.page-divider', { width: 100, duration: 0.8 }, 0.6);

    gsap.utils.toArray('.fade-in').forEach((el: any, idx: number) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: idx * 0.1,
      });
    });
// ✅ ADD HERE
    ScrollTrigger.refresh();
  });

  return () => ctx.revert(); // 🔥 VERY IMPORTANT cleanup

}, []);

  const benefits = [
    {
      title: 'Physical Fitness',
      icon: '💪',
      description: 'Fencing is a rigorous physical activity that improves cardiovascular health, strength, and agility.',
    },
    {
      title: 'Mental Acuity',
      icon: '🧠',
      description: 'Sharpen your focus, concentration, and decision-making skills through the strategic aspects of fencing.',
    },
    {
      title: 'Sportsmanship',
      icon: '🤝',
      description: 'Fencing instills values of respect, fair play, and discipline, fostering a culture of good sportsmanship.',
    },
    {
      title: 'Global Community',
      icon: '🌐',
      description: 'Engage with a global community of fencers, participating in tournaments around the world.',
    },
  ];

  const equipment = [
    'Fencing Jacket – Protects the upper body',
    'Plastron – Additional protection for torso',
    'Fencing Pants – Durable and designed for mobility',
    'Mask – Safeguards the face and head',
    'Gloves – Provide grip on the weapon',
    'Fencing Shoes – Lightweight for swift movements',
  ];

  return (
    <main style={{ background: '#07080A', color: '#F5F0E8' }}>
      
      <PageHeader
        title="What is Fencing?"
        subtitle="Discover the ancient art and modern sport that combines physical prowess with intellectual strategy."
      />

      <section
        className="fade-in"
        style={{
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(187, 36, 35, 0.2)',
          opacity: 0,
          transform: 'translateY(30px)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '2rem',
            }}
          >
            What is Fencing?
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'rgba(245, 240, 232, 0.8)',
              marginBottom: '2rem',
            }}
          >
            Fencing is a centuries-old art that has seamlessly transitioned into a modern, competitive sport. It involves two athletes engaging in a strategic duel, using one of three weapons – foil, épée, or sabre. Fencing is not merely about swordplay; it&apos;s an intricate dance that requires skill, precision, and tactical brilliance.
          </p>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'rgba(245, 240, 232, 0.8)',
            }}
          >
            In India, fencing has emerged as a dynamic and thriving sport, captivating enthusiasts with its combination of athleticism and strategic thinking.
          </p>
        </div>
      </section>

      <section
        className="fade-in"
        style={{
          padding: '6rem 4rem',
          background: 'rgba(187, 36, 35, 0.04)',
          opacity: 0,
          transform: 'translateY(30px)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            Benefits of Fencing
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(187, 36, 35, 0.2)',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#C9A84C',
                    marginBottom: '1rem',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'rgba(245, 240, 232, 0.7)',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="fade-in"
        style={{
          padding: '6rem 4rem',
          opacity: 0,
          transform: 'translateY(30px)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '3rem',
            }}
          >
            Essential Equipment
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.7)',
              marginBottom: '2rem',
            }}
          >
            Proper attire is crucial for safety in fencing. Here&apos;s what you&apos;ll wear:
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
            }}
          >
            {equipment.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(187, 36, 35, 0.08)',
                  borderLeft: '3px solid #C9A84C',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    color: '#F5F0E8',
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="fade-in"
        style={{
          padding: '6rem 4rem',
          background: 'rgba(187, 36, 35, 0.04)',
          opacity: 0,
          transform: 'translateY(30px)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '2rem',
            }}
          >
            Who Can Play Fencing?
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.7)',
              marginBottom: '2rem',
            }}
          >
            Fencing is a sport for everyone! Whether you&apos;re a child, teenager, or adult, fencing caters to various age groups. At Deccan Fencing Club, we welcome aspiring fencers aged 5 and above. Our programs are designed to accommodate all skill levels, from beginners to seasoned practitioners.
          </p>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.7)',
            }}
          >
            Fencing is not just a sport; it&apos;s an inclusive community where individuals of all backgrounds come together to enjoy the art and excitement of swordplay.
          </p>
        </div>
      </section>

      <section
        className="fade-in"
        style={{
          padding: '6rem 4rem',
          textAlign: 'center',
          opacity: 0,
          transform: 'translateY(30px)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '2rem',
            }}
          >
            Join Deccan Fencing Club Today!
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.7)',
              marginBottom: '3rem',
            }}
          >
            Embark on your fencing journey with us. Our expert coaches, state-of-the-art facilities, and inclusive programs make us the ideal choice. Ready to unleash your potential and become part of the Deccan Fencing Club family?
          </p>
          <a
            href="#register"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: '#C9A84C',
              color: '#07080A',
              padding: '1rem 3rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s',
            }}
          >
            Start Training Now
          </a>
        </div>
      </section>

      
    </main>
  );
}
