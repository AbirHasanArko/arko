import Link from 'next/link';
import CertificateCard from '@/components/CertificateCard';
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
      <header className="page-header">
        <p className="page-eyebrow">Credentials</p>
        <h1 className="page-title">Credentials &amp; Achievements</h1>
        <p className="page-lede">
          Industry certifications, academic scholarships, hackathon placings,
          and milestones worth remembering.
        </p>
        <nav className={styles.crossLinks} aria-label="Related sections">
          <Link href="/academics">Education →</Link>
          <Link href="/experience">Work Experience →</Link>
        </nav>
      </header>

      <section id="certifications" className="section">
        <p className="section-heading">Certifications</p>
        <h2 className="section-title">Completed Programs</h2>
        <p className={styles.sectionLede}>
          Courses, programs, and exams I&apos;ve completed.
        </p>
        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </section>

      <section id="achievements" className="section">
        <p className="section-heading">Achievements</p>
        <h2 className="section-title">Notable Wins</h2>
        <p className={styles.sectionLede}>
          Hackathon placings, scholarships, and competitive programming
          milestones.
        </p>
        <div className={styles.achievementGrid}>
          {achievements.map((a) => (
            <article key={a.title} className={styles.achievement}>
              <p className={`${styles.achievementOrg} tabular`}>
                {a.org} · {a.date}
              </p>
              <h3 className={styles.achievementTitle}>{a.title}</h3>
              <p className={styles.achievementDesc}>{a.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
