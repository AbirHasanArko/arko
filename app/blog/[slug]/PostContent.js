'use client';

import { useEffect } from 'react';

export default function ReadingProgress() {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      const bar = document.getElementById('reading-progress');
      if (bar) bar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="reading-progress" className="reading-progress" />;
}