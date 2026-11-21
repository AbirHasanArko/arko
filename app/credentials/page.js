import CertificateCard from '@/components/CertificateCard';
import { certifications, achievements } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Credentials & Achievements',
  description:
    'Certifications, hackathon honors, scholarships, and competition milestones.',
};

export default function CredentialsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Credentials</p>
        <h1 className="page-title">Credentials &amp; Honors</h1>
        <p className="page-lede">
          Verified coursework, academic scholarships, hackathon placings, and
          problem-solving milestones.
        </p>
      </header>

      <section id="certifications" className="section">
        <div className="monograph-bar">
          <span className="monograph-index">§ 01 · Certifications</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <h2 className="section-title">Completed Programs</h2>
        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="monograph-bar">
          <span className="monograph-index">§ 02 · Honors &amp; Milestones</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <h2 className="section-title">Notable Wins</h2>
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
