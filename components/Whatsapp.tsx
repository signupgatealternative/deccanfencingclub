'use client';

import { useState } from 'react';

export default function Whatsapp() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Tooltip */}
      <div
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          background: '#07080A',
          color: '#F5F0E8',
          padding: '8px 14px',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontFamily: "'Crimson Pro', serif",
          border: '1px solid rgba(187, 36, 35, 0.2)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.25s ease',
          pointerEvents: 'none',
          zIndex: 999,
        }}
      >
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=918985867456&text=Hi%20Deccan%20Fencing%20Club!%20I%20want%20to%20join%20fencing%20classes."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
          zIndex: 999,
          cursor: 'pointer',
          animation: 'whatsappPulse 2s infinite',
          transition: 'transform 0.2s ease',
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.756 5.713 2.19 8.21L0 32l7.63-2.17a15.96 15.96 0 0 0 8.37 2.39c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.2a13.1 13.1 0 0 1-6.68-1.82l-.48-.29-4.53 1.29 1.21-4.41-.31-.5a13.08 13.08 0 0 1-2-6.97c0-7.23 5.87-13.1 13.1-13.1s13.1 5.87 13.1 13.1-5.87 13.1-13.1 13.1zm7.19-9.69c-.39-.2-2.31-1.14-2.67-1.27-.36-.13-.62-.2-.88.2-.26.39-1 1.27-1.23 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.15-1.94-1.17-1.04-1.96-2.33-2.19-2.72-.23-.39-.02-.6.17-.79.17-.17.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.2-2.91-.31-.75-.62-.65-.88-.66h-.75c-.26 0-.69.1-1.05.49-.36.39-1.38 1.35-1.38 3.29 0 1.94 1.41 3.82 1.61 4.08.2.26 2.78 4.24 6.74 5.95.94.41 1.67.65 2.24.83.94.3 1.8.26 2.48.16.76-.11 2.31-.94 2.64-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z"/>
        </svg>
      </a>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes whatsappPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}