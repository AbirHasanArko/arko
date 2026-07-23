import Link from 'next/link';
import Timeline from '@/components/Timeline';
import ScrollReveal from '@/components/ScrollReveal';
import { education } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Education',
  description:
    'Academic background, schools, and continuing education milestones.',
};

export default function AcademicsPage() {
  return (
    <div className="page-shell">
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// education</p>
          <h1 className="page-title">Education</h1>
          <p className="page-lede">
            A timeline of schools, programs, and the grades that shaped my
            engineering journey.
          </p>
          <nav className={styles.crossLinks} aria-label="Related sections">
            <Link href="/experience">Work Experience →</Link>
            <Link href="/credentials">Credentials & Achievements →</Link>
          </nav>
        </header>
      </ScrollReveal>

      <section className="section">
        <ScrollReveal delay={0.1}>
          <Timeline items={education} type="education" />
        </ScrollReveal>
      </section>

      <section className={styles.ctaSection}>
        <ScrollReveal>
          <h2 className={styles.ctaTitle}>Keep exploring</h2>
          <p className={styles.ctaText}>
            Jump straight to my work history, credentials, or other corners of
            the site.
          </p>
          <div className={styles.ctaGrid}>
            <Link href="/experience" className={styles.ctaCard}>
              <span className={styles.ctaEyebrow}>// experience</span>
              <span className={styles.ctaLabel}>Work Experience</span>
              <span className={styles.ctaHint}>Internships, leadership, ventures</span>
            </Link>
            <Link href="/credentials" className={styles.ctaCard}>
              <span className={styles.ctaEyebrow}>// credentials</span>
              <span className={styles.ctaLabel}>Credentials & Achievements</span>
              <span className={styles.ctaHint}>Certs, hackathons, scholarships</span>
            </Link>
            <Link href="/projects" className={styles.ctaCard}>
              <span className={styles.ctaEyebrow}>// projects</span>
              <span className={styles.ctaLabel}>Projects</span>
              <span className={styles.ctaHint}>10+ builds across web, AI, hardware</span>
            </Link>
            <Link href="/blog" className={styles.ctaCard}>
              <span className={styles.ctaEyebrow}>// blog</span>
              <span className={styles.ctaLabel}>Blog</span>
              <span className={styles.ctaHint}>Notes on AI, CP, and building</span>
            </Link>
            <Link href="/contact" className={styles.ctaCard}>
              <span className={styles.ctaEyebrow}>// contact</span>
              <span className={styles.ctaLabel}>Get in touch</span>
              <span className={styles.ctaHint}>Email, phone, socials</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
