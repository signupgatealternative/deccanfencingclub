'use client';

import { useEffect } from 'react';

export default function ProgressBar() {
  useEffect(() => {
    const updateProgress = () => {
      const progressBar = document.getElementById('prog');
      if (progressBar) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return null;
}
