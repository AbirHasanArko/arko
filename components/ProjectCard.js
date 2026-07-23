'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { classNames } from '@/lib/utils';
import styles from './ProjectCard.module.css';

const MAX_TILT = 8;

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useSpring(useTransform(y, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), {
    stiffness: 150,
    damping: 18,
  });
  const rY = useSpring(useTransform(x, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
    >
      <div className={styles.header}>
        <span className={styles.emoji} aria-hidden="true">
          {project.emoji}
        </span>
        <div className={styles.badges}>
          {project.featured && (
            <span className={classNames(styles.badge, styles.featured)}>
              featured
            </span>
          )}
          {project.status === 'ongoing' && (
            <span className={classNames(styles.badge, styles.ongoing)}>
              ongoing
            </span>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tech} aria-label={`${project.name} tech stack`}>
        {project.tech.map((t) => (
          <li key={t} className={styles.techItem}>
            {t}
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <span className={styles.date}>{project.date}</span>
        <div className={styles.links} onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}