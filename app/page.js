import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillTicker from '@/components/SkillTicker';
import { projects } from '@/data/projects';
import { experience } from '@/data/academics';
import { researchNotes } from '@/data/research';
import styles from './page.module.css';

export const metadata = {
  title: 'Abir Hasan Arko — Software Systems & Applied AI',
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const recentWork = experience.filter((e) => e.current).slice(0, 3);
  const featuredResearch = researchNotes.slice(0, 2);

  return (
    <>
      <Hero />

      <div className="page-shell">
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className="monograph-index tabular">§ 01</span>
            <h2 className="section-title">Research &amp; Inquiry</h2>
            <span className="monograph-rule" aria-hidden="true" />
            <Link href="/research" className={styles.sectionLink}>
              <span>All notes</span>
              <span className={styles.linkArrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.researchGrid}>
            {featuredResearch.map((item) => (
              <article key={item.id} className={styles.researchCard}>
                <div className={styles.researchTop}>
                  <span className={`${styles.researchId} tabular`}>[{item.id}]</span>
                  <span className={`${styles.researchYear} tabular`}>{item.year}</span>
                </div>
                <h3 className={styles.researchTitle}>{item.title}</h3>
                <p className={styles.researchAbstract}>{item.abstract}</p>
                <div className={styles.researchFooter}>
                  <Link href="/research" className={styles.researchLink}>
                    Read note →
                  </Link>
                  {item.projectSlug && (
                    <Link
                      href={`/projects/${item.projectSlug}`}
                      className={styles.researchMutedLink}
                    >
                      Artifact
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className="monograph-index tabular">§ 02</span>
            <h2 className="section-title">Selected Projects</h2>
            <span className="monograph-rule" aria-hidden="true" />
            <Link href="/projects" className={styles.sectionLink}>
              <span>All projects</span>
              <span className={styles.linkArrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.projectGrid}>
            {featured.map((p, idx) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={`P-0${idx + 1}`}
                href={`/projects/${p.slug}`}
              />
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className="monograph-index tabular">§ 03</span>
            <h2 className="section-title">Active Roles</h2>
            <span className="monograph-rule" aria-hidden="true" />
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
          <SkillTicker sectionNum="§ 04" />
        </section>

        <section className={styles.closingNote}>
          <p className={styles.closingQuote}>
            Always glad to talk research, quiet engineering, or teaching over a
            cup of tea or an email.
          </p>
          <Link href="/contact" className={styles.ctaPrimary}>
            <span>Say hello</span>
            <span className={styles.linkArrow} aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </>
  );
}
