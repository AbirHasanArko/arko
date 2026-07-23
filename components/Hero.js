'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import GlitchText from './GlitchText';
import WireframeCube from './WireframeCube';
import ScanlineOverlay from './ScanlineOverlay';
import CodeFloat from './CodeFloat';
import Counter from './Counter';
import ScrollReveal from './ScrollReveal';
import styles from './Hero.module.css';

const FULL_NAME = profile.name;
const ROLES = [
  'CSE Undergrad @ KUET',
  'Founder @ Arcode',
  'ML Intern @ FlyRank AI',
  'Software Engineer',
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  const [hideNameCursor, setHideNameCursor] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');

  // Typewriter for name
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      i += 1;
      setTyped(FULL_NAME.slice(0, i));
      if (i < FULL_NAME.length) {
        const delay = 60 + Math.random() * 60;
        setTimeout(tick, delay);
      } else {
        setDone(true);
      }
    };
    setTimeout(tick, 350);
    return () => {
      cancelled = true;
    };
  }, []);

  // Once the name finishes typing, give the cursor a beat then turn it off.
  useEffect(() => {
    if (!done) return undefined;
    const t = setTimeout(() => setHideNameCursor(true), 900);
    return () => clearTimeout(t);
  }, [done]);

  // Cycle rotating roles: type in, hold, then move on (no backspace).
  useEffect(() => {
    if (!done) return undefined;
    const target = ROLES[roleIndex] || '';
    let i = 0;
    let phase = 'typing'; // 'typing' | 'holding'
    const HOLD_MS = 2600;

    const tick = () => {
      if (phase === 'typing') {
        i += 1;
        setRoleText(target.slice(0, i));
        if (i >= target.length) {
          phase = 'holding';
          setTimeout(() => {
            if (phase !== 'holding') return; // unmounted guard
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }, HOLD_MS);
        }
      }
    };

    const interval = setInterval(tick, 70);
    return () => {
      phase = 'idle';
      clearInterval(interval);
    };
  }, [done, roleIndex]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <WireframeCube size={260} />
        <CodeFloat count={18} />
      </div>

      <ScanlineOverlay />

      <div className={styles.content}>
        <ScrollReveal>
          <p className={styles.greeting}>
            <span className={styles.cursorPrompt}>$</span> hello, my name is
          </p>
        </ScrollReveal>

        <h1 className={styles.name}>
          <span className={styles.typed}>{typed}</span>
          <span
            className={`${styles.cursor} ${done ? styles.cursorDone : ''} ${
              done && hideNameCursor ? styles.cursorOff : ''
            }`}
            aria-hidden="true"
          />
        </h1>

        <ScrollReveal delay={0.2}>
          <p className={styles.roles}>
            <span className={styles.roleLabel}>I build things.</span>{' '}
            <span className={styles.roleText}>{roleText}</span>
            <span className={styles.roleCursor} aria-hidden="true">▍</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className={styles.tagline}>
            <GlitchText text={profile.shortBio} />
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <Counter value={profile.stats.repositories} suffix="+" />
              </span>
              <span className={styles.statLabel}>repos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <Counter value={profile.stats.problemsSolved} suffix="+" />
              </span>
              <span className={styles.statLabel}>problems</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <Counter value={profile.stats.cgpa} />
              </span>
              <span className={styles.statLabel}>CGPA</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <Counter value={profile.stats.hackathonWins} />
              </span>
              <span className={styles.statLabel}>podiums</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.65}>
          <div className={styles.ctas}>
            <a href="/projects" className={styles.ctaPrimary}>
              View Projects →
            </a>
            <a href="/contact" className={styles.ctaGhost}>
              Get in touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}