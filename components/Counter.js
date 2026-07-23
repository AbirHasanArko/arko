'use client';

import { useEffect, useRef, useState } from 'react';
import { easeOutCubic, clamp } from '@/lib/utils';

export default function Counter({ value, duration = 1600, suffix = '', prefix = '' }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const decimals = String(value).includes('.')
    ? Math.min(String(value).split('.')[1].length, 2)
    : 0;
  const factor = Math.pow(10, decimals);
  const target = Math.round(Number(value) * factor) / factor;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now) => {
              const t = clamp((now - start) / duration, 0, 1);
              const eased = easeOutCubic(t);
              const next = (eased * target);
              const stepped = decimals > 0
                ? Math.round(next * factor) / factor
                : Math.round(next);
              setDisplay(stepped);
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, decimals, factor]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}