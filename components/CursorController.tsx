'use client';

import { useEffect } from 'react';

export default function CursorController() {
  useEffect(() => {
    const ring = document.getElementById('cur-ring');
    const dot = document.getElementById('cur-dot');

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;

      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }

      requestAnimationFrame(loop);
    };

    loop();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .ev-card, .t-card, .sch-row, input, select, textarea'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('ch');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('ch');
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return null;
}
