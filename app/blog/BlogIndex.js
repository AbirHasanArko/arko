'use client';

import { useMemo, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import FilterBar from '@/components/FilterBar';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function BlogIndex({ posts, tags: initialTags }) {
  const tags = useMemo(() => ['All', ...initialTags], [initialTags]);
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return posts;
    return posts.filter((p) => (p.frontmatter.tags || []).includes(active));
  }, [posts, active]);

  return (
    <div className="page-shell">
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// dispatches</p>
          <h1 className="page-title">Blog</h1>
          <p className="page-lede">
            Notes on AI, backend engineering, and the craft of shipping software
            that lasts.
          </p>
        </header>
      </ScrollReveal>

      {tags.length > 1 && (
        <FilterBar filters={tags} active={active} onChange={setActive} />
      )}

      {filtered.length === 0 ? (
        <p className={styles.empty}>No posts yet. Stay tuned.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.05}>
              <BlogCard post={p} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}