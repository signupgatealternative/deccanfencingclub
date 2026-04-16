'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader';



gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

/*   useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to('.page-badge', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.page-title', { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to('.page-subtitle', { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .to('.page-divider', { width: 100, duration: 0.8 }, 0.6);

    gsap.utils.toArray('.contact-info-card').forEach((el: any, idx: number) => {
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

    gsap.utils.toArray('.contact-info-card').forEach((el: any, idx: number) => {
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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  setLoading(false);

  if (data.success) {
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  } else {
    alert('Something went wrong');
  }
};

  return (
    <main style={{ background: '#07080A', color: '#F5F0E8' }}>
      
      <PageHeader
        title="Get In Touch"
        subtitle="Have questions? Reach out to us! We'd love to hear from you."
      />

      <section
        style={{
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(187, 36, 35, 0.2)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {[
              {
                icon: '📍',
                title: 'Location',
                content: 'The Peak Pride, 602, D.No 257/91/134/1, beside Walking Street Drive in, Madhapur, Hyderabad, Telangana 500081',
              },
              {
                icon: '📧',
                title: 'Email',
                content: 'deccanfencingclub@gmail.com',
              },
              {
                icon: '📱',
                title: 'Phone',
                content: '+91 89858 67456',
              },
              {
  icon: '⏰',
  title: 'Hours',
  content: (
    <div style={{ lineHeight: '1.6' }}>
      <p style={{ margin: 0 }}>
        <strong>Mon – Sun</strong>
      </p>
      <p style={{ margin: 0, color: '#C9A84C' }}>
        Morning: 6:00 AM – 8:00 AM
      </p>
      <p style={{ margin: 0, color: '#C9A84C' }}>
        Evening: 4:00 PM – 8:00 PM
      </p>
    </div>
  ),
}
            ].map((info, idx) => (
              <div
                key={idx}
                className="contact-info-card"
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(187, 36, 35, 0.2)',
                  borderRadius: '4px',
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {info.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#C9A84C',
                    marginBottom: '0.5rem',
                  }}
                >
                  {info.title}
                </h3>
               <div
  style={{
    fontFamily: "'Crimson Pro', serif",
    fontSize: '1rem',
    color: 'rgba(245, 240, 232, 0.7)',
  }}
>
  {info.content}
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '6rem 4rem',
          background: 'rgba(187, 36, 35, 0.04)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
            Send us a Message
          </h2>

          {submitted ? (
            <div
              style={{
                padding: '2rem',
                background: 'rgba(187, 36, 35, 0.15)',
                border: '1px solid #C9A84C',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.2rem',
                  color: '#C9A84C',
                  margin: 0,
                }}
              >
                ✓ Thank you for your message! We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <label
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#C9A84C',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    background: 'rgba(245, 240, 232, 0.05)',
                    border: '1px solid rgba(187, 36, 35, 0.2)',
                    borderRadius: '4px',
                    color: '#F5F0E8',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div
                style={{
                  marginBottom: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                <div>
                  <label
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#C9A84C',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '1rem',
                      background: 'rgba(245, 240, 232, 0.05)',
                      border: '1px solid rgba(187, 36, 35, 0.2)',
                      borderRadius: '4px',
                      color: '#F5F0E8',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#C9A84C',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '1rem',
                      background: 'rgba(245, 240, 232, 0.05)',
                      border: '1px solid rgba(187, 36, 35, 0.2)',
                      borderRadius: '4px',
                      color: '#F5F0E8',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#C9A84C',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    background: 'rgba(245, 240, 232, 0.05)',
                    border: '1px solid rgba(187, 36, 35, 0.2)',
                    borderRadius: '4px',
                    color: '#F5F0E8',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#C9A84C',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: '1rem',
                    background: 'rgba(245, 240, 232, 0.05)',
                    border: '1px solid rgba(187, 36, 35, 0.2)',
                    borderRadius: '4px',
                    color: '#F5F0E8',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  style={{
    fontFamily: "'Cinzel', serif",
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    background: loading ? '#999' : '#C9A84C',
    color: '#07080A',
    border: 'none',
    padding: '1rem 3rem',
    cursor: loading ? 'not-allowed' : 'pointer',
    borderRadius: '4px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }}
>
  {loading ? (
    <>
      <span
        style={{
          width: '16px',
          height: '16px',
          border: '2px solid #07080A',
          borderTop: '2px solid transparent',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }}
      />
      Sending...
    </>
  ) : (
    'Send Message'
  )}
</button>
            </form>
          )}
        </div>

        <section
  style={{
    padding: '4rem 4rem',
    borderTop: '1px solid rgba(187, 36, 35, 0.2)',
  }}
>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    
    <h2
      style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: '2rem',
        fontWeight: 700,
        color: '#C9A84C',
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      Find Us Here
    </h2>

 <div
  style={{
    width: '100%',
    height: '450px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(187, 36, 35, 0.2)',
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.037779498541!2d78.38224937585656!3d17.457905783441387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91744584c87b%3A0xe3e3843663f3608c!2sDeccan%20Fencing%20Club!5e0!3m2!1sen!2sin!4v1776318265610!5m2!1sen!2sin"
    style={{ width: '100%', height: '100%', border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

  </div>
</section>
      </section>

    
    </main>
  );
}
