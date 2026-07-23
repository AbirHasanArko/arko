'use client';

import { useEffect, useState } from 'react';
import styles from './WireframeCube.module.css';

const TECH_SEQUENCE = [
  'AI',
  'LLM',
  'RAG',
  'GPT-4',
  'Gemini',
  'LangChain',
  'OpenAI',
  'Function Calling',
  'Prompt Eng.',
  'Vector DB',
  'Embeddings',
  'ML',
  'PyTorch',
  'TensorFlow',
  'Web',
  'FastAPI',
  'Laravel',
  'ASP.NET',
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Postgres',
  'MySQL',
  'Docker',
  'Linux',
  'Git',
  'CI/CD',
  'Raspberry Pi',
  'Arduino',
  'Verilog',
  'Embedded',
  'C++',
  'Python',
  'Java',
  'PHP',
  'C#',
];

export default function WireframeCube({ size = 280, variant = 'wireframe' }) {
  const faceStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div
      className={styles.scene}
      style={{ width: `${size * 1.6}px`, height: `${size * 1.6}px` }}
      aria-hidden="true"
    >
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.back}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.right}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.left}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.top}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.bottom}`} style={faceStyle} />

        {variant === 'core' ? <CoreLabel size={size} /> : null}
      </div>
    </div>
  );
}

function CoreLabel({ size }) {
  const coreSize = Math.round(size * 0.95);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TECH_SEQUENCE.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={styles.coreLabel}
      style={{ width: `${coreSize}px`, height: `${coreSize}px` }}
    >
      <span className={styles.coreLabelText} key={index}>
        {TECH_SEQUENCE[index]}
      </span>
    </div>
  );
}