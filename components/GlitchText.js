'use client';

import { useState } from 'react';
import styles from './GlitchText.module.css';

export default function GlitchText({ text, as: Tag = 'span' }) {
  const [active, setActive] = useState(false);

  return (
    <Tag
      className={`${styles.glitch} ${active ? styles.active : ''}`}
      data-text={text}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {text}
    </Tag>
  );
}