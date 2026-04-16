'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader';



gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

/*   useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to('.faq-hero h1', { y: 0, opacity: 1, duration: 1 }, 0)
      .to('.faq-hero p', { y: 0, opacity: 1, duration: 0.8 }, 0.2);

    gsap.utils.toArray('.faq-item').forEach((el: any, idx: number) => {
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

    gsap.utils.toArray('.faq-item').forEach((el: any, idx: number) => {
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

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Can I come play at any academy if I already know how to fence?',
      answer:
        'Deccan Fencing Club primarily operates as a training institute, offering structured fitness and fencing programs. We do not follow a pay-and-play format. Joining for at least a month is required, and you can opt for as few as 2 classes a week. Feel free to contact us if you\'re an experienced fencer looking to play, brush up on training, or simply fence!',
    },
    {
      id: 2,
      question: 'Can I practice and bout with my glasses on?',
      answer:
        'Ensuring clear vision during practice and bouts is crucial, especially when swift movements with swords are involved. It\'s recommended to wear well-fitting, high-quality glasses that prevent fogging, slipping, or any distractions. If you prefer contact lenses, ensure you are comfortable and knowledgeable about their maintenance.',
    },
    {
      id: 3,
      question: 'Do I have to be fit to start fencing?',
      answer:
        'While being physically fit is beneficial, it\'s not a prerequisite to start at Deccan Fencing Club. We welcome students seeking both physical and mental fitness. Our academy provides fitness trainers for beginners if their fitness level doesn\'t meet fencing requirements. Our program is open to students aged 6 and above.',
    },
    {
      id: 4,
      question: 'Do I need prior fencing experience to join the academy?',
      answer:
        'No, Deccan Fencing Club is a training institute catering to students of various skills and experiences. We focus on helping students improve their fitness and offer a platform for both beginners and experienced fencers.',
    },
    {
      id: 5,
      question: 'Do I need to be specific about what to wear for class?',
      answer:
        'Yes, fencing has specific clothing requirements for optimal safety and performance. We recommend wearing properly fitting warm-up pants, slim-fitting sneakers with laces or fencing-specific shoes, lightweight or moisture-absorbing t-shirt under fencing jackets, sports bra for girls/ladies, and protective cup for boys/gentlemen. Avoid items like loose baggy pants, jeans, heavy or healed sneakers, sandals, flip-flops, and shorts.',
    },
    {
      id: 6,
      question: 'Can I check out a class before signing up?',
      answer:
        'Yes, a trial class is available. Visit our academy during regularly scheduled class times, meet the coach, observe classes, and participate in activities. Call us to schedule a trial class.',
    },
    {
      id: 7,
      question: 'Is it safe to join given the COVID-19 risk?',
      answer:
        'Yes, fencing is a non-contact sport, and we strictly follow COVID-19 protocols. All our coaches are fully vaccinated.',
    },
    {
      id: 8,
      question: 'As a beginner, do I need to get my own fencing gear?',
      answer:
        'For hygiene and COVID-19 guidelines, bring your knee-high socks, gloves, chest protector (for females), and mask. Beginners\' classes are covered in three to six months. If you decide to attend a competition, you\'ll need to arrange your full gear.',
    },
    {
      id: 9,
      question: 'Is fencing a physically dangerous game? Is it safe to play fence?',
      answer:
        'Fencing is safe due to protective gear, non-sharp swords, and strict bout rules. The weapons are not sharp, and our gear provides multiple layers of protection. Instructors or coaches monitor classes to ensure safety measures are followed.',
    },
  ];

  return (
    <main style={{ background: '#07080A', color: '#F5F0E8' }}>
      
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to your questions about fencing, our academy, and training programs."
      />

      <section
        style={{
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(187, 36, 35, 0.2)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="faq-item"
                style={{
                  border: '1px solid rgba(187, 36, 35, 0.2)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    background: expandedId === faq.id ? 'rgba(187, 36, 35, 0.1)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(187, 36, 35, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      expandedId === faq.id ? 'rgba(187, 36, 35, 0.1)' : 'transparent';
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#C9A84C',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    style={{
                      fontSize: '1.5rem',
                      color: '#C9A84C',
                      transform: expandedId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      marginLeft: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    ▼
                  </span>
                </button>

                {expandedId === faq.id && (
                  <div
                    style={{
                      padding: '2rem',
                      background: 'rgba(187, 36, 35, 0.04)',
                      borderTop: '1px solid rgba(187, 36, 35, 0.1)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: 'rgba(245, 240, 232, 0.8)',
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '6rem 4rem',
          background: 'rgba(187, 36, 35, 0.04)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: '#C9A84C',
              marginBottom: '2rem',
            }}
          >
            Didn&apos;t Find Your Answer?
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
            Feel free to contact us directly. Our team is always happy to answer your questions.
          </p>
          <a
            href="/contact"
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
            Contact Us
          </a>
        </div>
      </section>

     
    </main>
  );
}
