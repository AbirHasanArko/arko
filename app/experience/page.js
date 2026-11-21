import Link from 'next/link';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import { experience } from '@/data/academics';
import { skills } from '@/data/skills';
import styles from './page.module.css';

export const metadata = {
  title: 'Work Experience',
  description:
    'Internships, leadership roles, and the ventures I run on the side.',
};

export default function ExperiencePage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Experience</p>
        <h1 className="page-title">Where I&apos;ve Worked</h1>
        <p className="page-lede">
          Internships, leadership roles, and the ventures I run on the side.
          Most recent first.
        </p>
        <nav className={styles.crossLinks} aria-label="Related sections">
          <Link href="/academics">Education →</Link>
          <Link href="/credentials">Credentials &amp; Achievements →</Link>
        </nav>
      </header>

      <section className="section">
        <Timeline items={experience} type="experience" />
      </section>

      <section id="skills" className="section">
        <p className="section-heading">Skills</p>
        <h2 className="section-title">Proficiency at a Glance</h2>
        <p className={styles.skillsLede}>
          Levels reflect how confidently I ship production work in each stack —
          not just how often I open the docs.
        </p>
        <div className={styles.skillsGrid}>
          {skills.map((cat) => (
            <article key={cat.category} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{cat.category}</h3>
              <div className={styles.skillList}>
                {cat.items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>See the code behind the work.</h2>
        <p className={styles.ctaText}>
          Detailed architectures, live demos, and source repositories live on
          the projects page.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/projects" className={styles.ctaPrimary}>
            Browse projects →
          </Link>
          <Link href="/contact" className={styles.ctaGhost}>
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
