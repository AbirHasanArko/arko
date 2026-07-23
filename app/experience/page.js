import Link from 'next/link';
import Timeline from '@/components/Timeline';
import ScrollReveal from '@/components/ScrollReveal';
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
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// experience</p>
          <h1 className="page-title">Where I've Worked</h1>
          <p className="page-lede">
            Internships, leadership roles, and the ventures I run on the side.
            Most recent first.
          </p>
          <nav className={styles.crossLinks} aria-label="Related sections">
            <Link href="/academics">Education →</Link>
            <Link href="/credentials">Credentials & Achievements →</Link>
          </nav>
        </header>
      </ScrollReveal>

      <section className="section">
        <ScrollReveal delay={0.1}>
          <Timeline items={experience} type="experience" />
        </ScrollReveal>
      </section>

      <section id="skills" className="section">
        <ScrollReveal>
          <p className="section-heading">// skills</p>
          <h2 className="section-title">Proficiency at a Glance</h2>
          <p className={styles.skillsLede}>
            Levels reflect how confidently I ship production work in each
            stack — not just how often I open the docs.
          </p>
        </ScrollReveal>
        <div className={styles.skillsGrid}>
          {skills.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.06}>
              <article className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{cat.category}</h3>
                <div className={styles.skillList}>
                  {cat.items.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <ScrollReveal>
          <h2 className={styles.ctaTitle}>Want details?</h2>
          <p className={styles.ctaText}>
            Project work and code artifacts live on the projects page.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/projects" className={styles.ctaPrimary}>
              Browse Projects
            </Link>
            <Link href="/contact" className={styles.ctaGhost}>
              Get in touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
