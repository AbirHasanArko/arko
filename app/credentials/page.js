import Link from 'next/link';
import CertificateCard from '@/components/CertificateCard';
import ScrollReveal from '@/components/ScrollReveal';
import { certifications, achievements } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Credentials & Achievements',
  description:
    'Professional certifications, hackathon wins, scholarships, and competition milestones.',
};

export default function CredentialsPage() {
  return (
    <div className="page-shell">
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// credentials</p>
          <h1 className="page-title">Credentials & Achievements</h1>
          <p className="page-lede">
            Industry certifications, academic scholarships, hackathon placings,
            and the milestones I'm proudest of.
          </p>
          <nav className={styles.crossLinks} aria-label="Related sections">
            <Link href="/academics">Education →</Link>
            <Link href="/experience">Work Experience →</Link>
          </nav>
        </header>
      </ScrollReveal>

      <section id="certifications" className="section">
        <ScrollReveal>
          <p className="section-heading">// certifications</p>
          <h2 className="section-title">Credentials</h2>
          <p className={styles.sectionLede}>
            Courses, programs, and exams I've completed.
          </p>
        </ScrollReveal>
        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.05}>
              <CertificateCard cert={cert} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="achievements" className="section">
        <ScrollReveal>
          <p className="section-heading">// achievements</p>
          <h2 className="section-title">Notable wins</h2>
          <p className={styles.sectionLede}>
            Hackathon placings, scholarships, and milestones worth remembering.
          </p>
        </ScrollReveal>
        <div className={styles.achievementGrid}>
          {achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.05}>
              <article className={styles.achievement}>
                <h3 className={styles.achievementTitle}>{a.title}</h3>
                <p className={styles.achievementOrg}>
                  {a.org} · {a.date}
                </p>
                <p className={styles.achievementDesc}>{a.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
