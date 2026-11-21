'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SkillBar.module.css';

export default function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ratio = Math.max(0, Math.min(1, level / 100));

  return (
    <div ref={ref} className={styles.row}>
      <div className={styles.head}>
        <span className={styles.name}>{name}</span>
        <span className={`${styles.level} tabular`}>{level}%</span>
      </div>
      <div className={styles.track} aria-hidden="true">
        <div
          className={styles.fill}
          style={{ transform: `scaleX(${active ? ratio : 0})` }}
        />
      </div>
    </div>
  );
}
