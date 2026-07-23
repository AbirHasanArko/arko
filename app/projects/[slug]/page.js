import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjectSlugs, getProjectBySlug, projects } from '@/data/projects';
import ReadingProgress from '@/app/blog/[slug]/PostContent';
import MDXComponents from '@/components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { classNames } from '@/lib/utils';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.name} · Project`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const longContent = project.longDescription || project.description;

  return (
    <article className="page-shell">
      <ReadingProgress />

      <Link href="/projects" className={styles.back}>
        ← All projects
      </Link>

      <header className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.emoji} aria-hidden="true">
            {project.emoji}
          </span>
          <div className={styles.headingText}>
            <p className={styles.eyebrow}>// {project.category}</p>
            <h1 className={styles.title}>{project.name}</h1>
          </div>
        </div>

        <ul className={styles.badges} aria-label="project status">
          {project.featured && (
            <li className={classNames(styles.badge, styles.badgeFeatured)}>featured</li>
          )}
          {project.status && (
            <li className={classNames(styles.badge, styles.badgeStatus)}>
              {project.status}
            </li>
          )}
          {project.date && (
            <li className={classNames(styles.badge, styles.badgeMuted)}>{project.date}</li>
          )}
        </ul>

        <p className={styles.summary}>{project.description}</p>

        <ul className={styles.tech} aria-label="tech stack">
          {project.tech.map((t) => (
            <li key={t} className={styles.techItem}>
              {t}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              View source ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              Live demo ↗
            </a>
          )}
        </div>
      </header>

      {project.demoEmbed && (
        <section className={styles.demo}>
          <p className="section-heading">// live demo</p>
          <h2 className="section-title">Try it</h2>
          <span className={styles.iframeWrap}>
            <iframe
              src={project.demoEmbed}
              title={`${project.name} live demo`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </span>
        </section>
      )}

      <section className={`prose ${styles.body}`}>
        <MDXRemote source={longContent} components={MDXComponents} />

        {project.highlights && project.highlights.length > 0 && (
          <>
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <>
            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <>
            <h2>What I learned</h2>
            <ul>
              {project.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      <footer className={styles.footer}>
        <Link href="/projects" className={styles.footerLink}>
          ← All projects
        </Link>
      </footer>

      {others.length > 0 && (
        <section className={styles.others}>
          <p className="section-heading">// more work</p>
          <h2 className="section-title">Other projects</h2>
          <ul className={styles.othersGrid}>
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className={styles.otherCard}>
                  <span className={styles.otherEmoji} aria-hidden="true">
                    {p.emoji}
                  </span>
                  <span className={styles.otherName}>{p.name}</span>
                  <span className={styles.otherDesc}>{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
