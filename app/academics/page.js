import Link from 'next/link';
import Timeline from '@/components/Timeline';
import { education, coursework } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Education',
  description:
    'Academic background, schools, and continuing education milestones.',
};

export default function AcademicsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Education</p>
        <h1 className="page-title">Academic Background</h1>
        <p className="page-lede">
          A timeline of schools, programs, and core computer science foundations
          that shaped my engineering path.
        </p>
        <nav className={styles.crossLinks} aria-label="Related sections">
          <Link href="/experience">Work Experience →</Link>
          <Link href="/credentials">Credentials &amp; Achievements →</Link>
        </nav>
      </header>

      <section className="section">
        <Timeline items={education} type="education" />
      </section>

      {coursework && coursework.length > 0 && (
        <section className="section">
          <p className="section-heading">KUET CSE</p>
          <h2 className="section-title">Selected Coursework</h2>
          <ul className={styles.courseGrid}>
            {coursework.map((course) => (
              <li key={course} className={styles.courseItem}>
                {course}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.ctaSection}>
        <p className="section-heading">Explore</p>
        <h2 className={styles.ctaTitle}>Continue browsing</h2>
        <div className={styles.ctaGrid}>
          <Link href="/experience" className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>Experience</span>
            <span className={styles.ctaLabel}>Work History</span>
            <span className={styles.ctaHint}>Internships, leadership, ventures</span>
          </Link>
          <Link href="/credentials" className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>Credentials</span>
            <span className={styles.ctaLabel}>Certifications &amp; Wins</span>
            <span className={styles.ctaHint}>Certs, hackathons, scholarships</span>
          </Link>
          <Link href="/projects" className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>Projects</span>
            <span className={styles.ctaLabel}>Selected Builds</span>
            <span className={styles.ctaHint}>Web, applied AI, and hardware</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
