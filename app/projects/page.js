'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import { projects } from '@/data/projects';
import styles from './page.module.css';

const FILTERS = ['All', 'Python', 'Java', 'C++', 'PHP', 'Web', 'Hardware'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    const map = {
      Python: ['Python'],
      Java: ['Java'],
      'C++': ['C++'],
      PHP: ['PHP'],
      Web: ['Web', 'Laravel', 'FastAPI', 'JavaScript'],
      Hardware: ['Hardware', 'Logisim'],
    };
    const keywords = map[active] || [];
    return projects.filter((p) => {
      if (keywords.includes(p.category)) return true;
      return p.tech.some((t) => keywords.includes(t));
    });
  }, [active]);

  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Archive</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-lede">
          Systems I&apos;ve designed, stress-tested, and shipped — from hospital
          platforms and LLM validators to a 32-bit processor in Logisim.
        </p>
      </header>

      <FilterBar filters={FILTERS} active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <p className={styles.empty}>No projects match this filter yet.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p, idx) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={`P-${String(idx + 1).padStart(2, '0')}`}
              href={`/projects/${p.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
