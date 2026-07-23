import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import PhotoCard from '@/components/PhotoCard';
import SkillTicker from '@/components/SkillTicker';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/data/projects';
import { experience } from '@/data/academics';
import styles from './page.module.css';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const recentWork = experience.filter((e) => e.current).slice(0, 3);

  return (
    <>
      <Hero />

      <div className="page-shell">
        <ScrollReveal>
          <section className={styles.bioStrip}>
            <p>
              <span className={styles.prompt}>$</span> I design software systems,
              ship backend services, and build AI workflows that hold up in
              production.
            </p>
          </section>
        </ScrollReveal>

        <SkillTicker />

        <section className={styles.recentWorkSection}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div>
                <p className="section-heading">// currently</p>
                <h2 className="section-title">Recent Work</h2>
              </div>
              <Link href="/experience" className={styles.sectionLink}>
                Full timeline →
              </Link>
            </div>
          </ScrollReveal>
          <div className={styles.recentWorkGrid}>
            {recentWork.map((role, i) => (
              <ScrollReveal key={`${role.org}-${role.role}`} delay={i * 0.05}>
                <article className={styles.recentWorkCard}>
                  <span className={styles.recentWorkBadge}>active</span>
                  <h3 className={styles.recentWorkRole}>{role.role}</h3>
                  <p className={styles.recentWorkOrg}>
                    {role.org} · {role.location}
                  </p>
                  <p className={styles.recentWorkDates}>
                    {role.start} — {role.end}
                  </p>
                  <ul className={styles.recentWorkBullets}>
                    {role.bullets.slice(0, 2).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="section">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div>
                <p className="section-heading">// featured work</p>
                <h2 className="section-title">Selected Projects</h2>
              </div>
              <Link href="/projects" className={styles.sectionLink}>
                All projects →
              </Link>
            </div>
          </ScrollReveal>

          <div className={styles.projectGrid}>
            {featured.map((p) => (
              <ScrollReveal key={p.slug} delay={0.05}>
                <Link href={`/projects/${p.slug}`} className={styles.cardLink}>
                  <ProjectCard project={p} />
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <p className={styles.viewAll}>
              <Link href="/projects" className={styles.viewAllLink}>
                View all projects →
              </Link>
            </p>
          </ScrollReveal>
        </section>

        <section className={styles.photoSection}>
          <ScrollReveal>
            <div className={styles.photoLayout}>
              <div>
                <p className="section-heading">// about</p>
                <h2 className="section-title">Hi, I'm Abir.</h2>
                <p className={styles.about}>
                  I'm a CSE undergraduate at <strong>KUET</strong> building reliable,
                  user-focused software — from hospital management platforms and
                  LLM-powered validators to a custom 32-bit processor in Logisim.
                  I run <strong>Arcode</strong>, where I teach programming in Bengali,
                  and I'm currently a Machine Learning intern at{' '}
                  <strong>FlyRank AI</strong>.
                </p>
                <div className={styles.aboutLinks}>
                  <Link href="/experience" className={styles.inlineLink}>
                    See my journey →
                  </Link>
                  <Link href="/blog" className={styles.inlineLink}>
                    Read the blog →
                  </Link>
                  <Link href="/projects" className={styles.inlineLink}>
                    Browse projects →
                  </Link>
                </div>
              </div>
              <PhotoCard />
            </div>
          </ScrollReveal>
        </section>

        <section className={styles.ctaSection}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>Let's build something.</h2>
            <p className={styles.ctaText}>
              Open to collaborations on AI tooling, backend systems, and developer
              education.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/projects" className={styles.ctaPrimary}>
                Browse Projects
              </Link>
              <Link href="/blog" className={styles.ctaGhost}>
                Read the Blog
              </Link>
              <Link href="/contact" className={styles.ctaGhost}>
                Contact
              </Link>
              <Link href="/experience" className={styles.ctaGhost}>
                My Background
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}