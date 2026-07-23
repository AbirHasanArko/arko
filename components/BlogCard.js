import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {
  const { slug, frontmatter, readingTime } = post;
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <p className={styles.meta}>
        <time>{formatDate(frontmatter.date)}</time>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{readingTime || frontmatter.readingTime || '— min read'}</span>
      </p>
      <h3 className={styles.title}>{frontmatter.title}</h3>
      <p className={styles.excerpt}>{frontmatter.excerpt}</p>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <ul className={styles.tags}>
          {frontmatter.tags.map((t) => (
            <li key={t} className={styles.tag}>#{t}</li>
          ))}
        </ul>
      )}
      <span className={styles.readMore}>Read post →</span>
    </Link>
  );
}