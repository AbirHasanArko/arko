'use client';

import { useEffect, useState } from 'react';
import styles from './CodeFloat.module.css';

const GLYPHS = [
  '0', '1', '{', '}', '<', '>', '/', ';', '()', '=>',
  'const', 'let', '==', '!=', '&&', '||', '++',
  '[]', '...', '$_', '[]', 'fn()', 'return', 'await',
  'AI', '//', '*/', 'npm', 'git', '//', 'EOF', 'nil',
];

function makeBurst(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    text: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    left: Math.random() * 100,
    // distribute phase across a 22s cycle so glyphs spread evenly around the cube spin
    delay: -Math.random() * 22,
    duration: 22,
    drift: (Math.random() - 0.5) * 50,
    sway: Math.random() * 18,
    size: 12 + Math.random() * 14,
    opacity: 0.12 + Math.random() * 0.22,
  }));
}

export default function CodeFloat({ count = 18 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(makeBurst(count));
  }, [count]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className={styles.glyph}
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            opacity: it.opacity,
            animationDuration: `${it.duration}s`,
            animationDelay: `${it.delay}s`,
            '--drift': `${it.drift}px`,
            '--sway': `${it.sway}px`,
          }}
        >
          {it.text}
        </span>
      ))}
    </div>
  );
}
