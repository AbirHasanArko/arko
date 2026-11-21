'use client';

import { useEffect, useRef } from 'react';

export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const node = barRef.current;
      if (!node) return;
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const ratio = total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
      node.style.transform = `scaleX(${ratio})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={barRef} className="reading-progress" aria-hidden="true" />;
}
