import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillTicker from '@/components/SkillTicker';
import { projects } from '@/data/projects';
import { experience } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Abir Hasan Arko — Software Systems & Applied AI',
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const recentWork = experience.filter((e) => e.current).slice(0, 3);

  return (
    <>
      <Hero />

      <div className="page-shell">
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-heading">Currently</p>
              <h2 className="section-title">Active Roles</h2>
            </div>
            <Link href="/experience" className={styles.sectionLink}>
              <span>Full timeline</span>
              <span className={styles.linkArrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.recentWorkGrid}>
            {recentWork.map((role) => (
              <article
                key={`${role.org}-${role.role}`}
                className={styles.recentWorkCard}
              >
                <div className={styles.recentWorkTop}>
                  <span className={styles.activeTag}>
                    <span className={styles.activeDot} aria-hidden="true" />
                    Active
                  </span>
                  <span className={`${styles.recentWorkDates} tabular`}>
                    {role.start} — {role.end}
                  </span>
                </div>
                <h3 className={styles.recentWorkRole}>{role.role}</h3>
                <p className={styles.recentWorkOrg}>
                  {role.org} · {role.location}
                </p>
                <ul className={styles.recentWorkBullets}>
                  {role.bullets.slice(0, 2).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-heading">Selected Work</p>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <Link href="/projects" className={styles.sectionLink}>
              <span>All projects</span>
              <span className={styles.linkArrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.projectGrid}>
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} href={`/projects/${p.slug}`} />
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <SkillTicker />
        </section>

        <section className={styles.ctaSection}>
          <p className="section-heading">Collaborate</p>
          <h2 className={styles.ctaTitle}>Let&apos;s build something together.</h2>
          <p className={styles.ctaText}>
            Open to conversations around AI tooling, backend systems, and
            developer education.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <span>Get in touch</span>
              <span className={styles.linkArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/projects" className={styles.ctaGhost}>
              Browse projects
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
