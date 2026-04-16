'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader';




gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
/*   useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to('.page-badge', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.page-title', { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to('.page-subtitle', { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .to('.page-divider', { width: 100, duration: 0.8 }, 0.6);

    gsap.utils.toArray('.fade-in-section').forEach((el: any) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          markers: false,
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

    gsap.utils.toArray('.fade-in-section').forEach((el: any, idx: number) => {
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

  return (
    <main style={{ background: '#07080A', color: '#F5F0E8' }}>
     
      <PageHeader 
        title="About Deccan Fencing Club"
        subtitle="A community of individuals bound by a shared passion for fencing and a commitment to fostering excellence."
      />

      <section
        className="fade-in-section"
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
            Our Story
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
            Founded in 2023 with the vision of creating a hub for fencing enthusiasts in Hyderabad, Deccan Fencing Club has grown to become a thriving center for skill development, camaraderie, and athletic achievement. What started as a dream is now a vibrant community of passionate fencers dedicated to excellence.
          </p>
        </div>
      </section>

      <section
        className="fade-in-section"
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
              marginBottom: '3rem',
            }}
          >
            Founder&apos;s Message
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'rgba(245, 240, 232, 0.8)',
              borderLeft: '3px solid #C9A84C',
              paddingLeft: '2rem',
              fontStyle: 'italic',
            }}
          >
            Welcome to Deccan Fencing Club! We are a community of passionate fencing enthusiasts who believe in excellence and camaraderie. Our goal is to provide a platform for people to come together, learn, and grow in their fencing skills. We aim to create a positive and supportive environment where everyone can thrive. At Deccan Fencing Club, we believe that fencing is not just a sport but a way of life. Join us to experience the thrill of the sport and be a part of our vibrant community.
          </p>
        </div>
      </section>

      <section
        className="fade-in-section"
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
            Why We Exist
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
            }}
          >
            {[
              {
                title: 'Our Mission',
                content:
                  'At the heart of Deccan Fencing Club is a mission to make the sport of fencing accessible to everyone. We believe in the transformative power of sport.',
              },
              {
                title: 'Expert Coaching',
                content:
                  'Our success is attributed to our exceptional coaching team, comprised of experienced and certified professionals who bring wealth of knowledge and enthusiasm.',
              },
              {
                title: 'Community First',
                content:
                  'What sets us apart is the sense of community that permeates every aspect. Beyond the piste, our members forge lasting friendships.',
              },
              {
                title: 'Youth Development',
                content:
                  'We are passionate about nurturing the next generation of fencers. Our programs instill values of teamwork, perseverance, and love for an active lifestyle.',
              },
              {
                title: 'Inclusivity',
                content:
                  'We welcome individuals of all backgrounds, abilities, and ages. Our commitment to diversity is reflected in our coaching approach and club experience.',
              },
              {
                title: 'Beyond Fencing',
                content:
                  'We recognize the importance of balance through social events, workshops, and community activities. We are more than a club; we are a family.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(187, 36, 35, 0.2)',
                  borderRadius: '4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#C9A84C',
                    marginBottom: '1rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'rgba(245, 240, 232, 0.7)',
                  }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="fade-in-section"
        style={{
          padding: '6rem 4rem',
          background: 'rgba(187, 36, 35, 0.04)',
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
            Join Our Community
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
            Whether you&apos;re a beginner or an experienced fencer, there&apos;s a place for you in our growing family. Join us and become part of a vibrant community that celebrates the art, discipline, and joy of fencing.
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
            Start Your Journey
          </a>
        </div>
      </section>

      
    </main>
  );
}
