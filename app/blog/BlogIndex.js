'use client';

import { useMemo, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import FilterBar from '@/components/FilterBar';
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
      <header className="page-header">
        <p className="page-eyebrow">Writing</p>
        <h1 className="page-title">Blog</h1>
        <p className="page-lede">
          Notes on applied AI, backend architecture, and the craft of shipping
          software that lasts.
        </p>
      </header>

      {tags.length > 1 && (
        <FilterBar filters={tags} active={active} onChange={setActive} />
      )}

      {filtered.length === 0 ? (
        <p className={styles.empty}>No posts yet. Stay tuned.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
