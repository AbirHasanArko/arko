import Link from 'next/link';
import { profile } from '@/data/profile';
import styles from './Hero.module.css';

const METRICS = [
  { value: `${profile.stats.repositories}+`, label: 'Public repositories' },
  { value: `${profile.stats.problemsSolved}+`, label: 'Algorithmic problems' },
  { value: profile.stats.cgpa.toFixed(2), label: 'CGPA at KUET' },
  { value: String(profile.stats.hackathonWins), label: 'Hackathon podiums' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={`${styles.eyebrowRow} ${styles.stagger1}`}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.eyebrowText}>
            {profile.location} · Open to collaborations
          </span>
        </div>

        <h1 className={`${styles.title} ${styles.stagger2}`}>
          {profile.name}
        </h1>

        <p className={`${styles.lead} ${styles.stagger3}`}>
          Designing <em className={styles.italic}>software systems</em>, shipping
          backend services, and building applied AI workflows that hold up in
          production.
        </p>

        <p className={`${styles.meta} ${styles.stagger3}`}>
          CSE undergraduate at <strong>KUET</strong> · Machine Learning Intern at{' '}
          <strong>FlyRank AI</strong> · Founder of <strong>Arcode</strong>
        </p>

        <div className={`${styles.actions} ${styles.stagger4}`}>
          <Link href="/projects" className={styles.ctaPrimary}>
            <span>View selected work</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Get in touch
          </Link>
        </div>

        <dl className={`${styles.metrics} ${styles.stagger4}`}>
          {METRICS.map((item) => (
            <div key={item.label} className={styles.metric}>
              <dt className={styles.metricLabel}>{item.label}</dt>
              <dd className={`${styles.metricValue} tabular`}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
