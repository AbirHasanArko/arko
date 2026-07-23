'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import ScrollReveal from '@/components/ScrollReveal';
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
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// archive</p>
          <h1 className="page-title">Projects</h1>
          <p className="page-lede">
            Software I've built, broken, and rebuilt — from production hospital
            platforms to a 32-bit CPU designed in Logisim.
          </p>
        </header>
      </ScrollReveal>

      <FilterBar filters={FILTERS} active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <p className={styles.empty}>No projects match this filter yet.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} href={`/projects/${p.slug}`} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}