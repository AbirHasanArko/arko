import Link from 'next/link';
import { profile } from '@/data/profile';
import PhotoCard from './PhotoCard';
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
        <div className={styles.grid}>
          <div className={styles.copy}>
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
              Designing <em className={styles.italic}>software systems</em>,
              shipping backend services, and building applied AI workflows that
              hold up in production.
            </p>

            <div className={`${styles.about} ${styles.stagger3}`}>
              <p>
                I&apos;m a Computer Science undergraduate at{' '}
                <strong>KUET</strong> building reliable, user-focused software —
                from hospital management platforms and LLM-powered tool-call
                validators to a custom 32-bit processor in Logisim.
              </p>
              <p>
                Outside coursework, I run <strong>Arcode</strong> to teach
                programming in Bengali and work as a Machine Learning intern at{' '}
                <strong>FlyRank AI</strong>.
              </p>
            </div>

            <div className={`${styles.actions} ${styles.stagger4}`}>
              <Link href="/projects" className={styles.ctaPrimary}>
                <span>View selected work</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Get in touch
              </Link>
              <Link href="/blog" className={styles.textLink}>
                Read the blog →
              </Link>
            </div>
          </div>

          <div className={`${styles.media} ${styles.stagger3}`}>
            <PhotoCard />
          </div>
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
