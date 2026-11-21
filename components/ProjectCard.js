import Link from 'next/link';
import { classNames } from '@/lib/utils';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, href, index }) {
  const cardHref = href || (project.slug ? `/projects/${project.slug}` : null);

  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <span className={`${styles.meta} tabular`}>
          {index ? <span className={styles.catalogId}>[{index}]</span> : null}
          <span>
            {project.category} · {project.date}
          </span>
        </span>
        {project.status === 'ongoing' ? (
          <span className={classNames(styles.status, styles.ongoing)}>
            <span className={styles.statusDot} aria-hidden="true" />
            Ongoing
          </span>
        ) : project.featured ? (
          <span className={classNames(styles.status, styles.featured)}>
            Selected
          </span>
        ) : null}
      </div>

      <div className={styles.titleRow}>
        {cardHref ? (
          <h3 className={styles.title}>
            <Link
              href={cardHref}
              className={styles.titleLink}
              aria-label={`Open ${project.name}`}
            >
              <span className={styles.titleOverlay} aria-hidden="true" />
              {project.name}
            </Link>
          </h3>
        ) : (
          <h3 className={styles.title}>{project.name}</h3>
        )}
        {cardHref && (
          <span className={styles.cornerArrow} aria-hidden="true">
            ↗
          </span>
        )}
      </div>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tech} aria-label={`${project.name} tech stack`}>
        {project.tech.slice(0, 5).map((t) => (
          <li key={t} className={styles.techItem}>
            {t}
          </li>
        ))}
      </ul>

      {(project.github || project.live) && (
        <div className={styles.footer}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              Live demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
