import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import mdxComponents from '@/components/MDXComponents';
import ReadingProgress from './PostContent';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;

  return (
    <article className="page-shell">
      <ReadingProgress />

      <Link href="/blog" className={styles.back}>
        ← Back to blog
      </Link>

      <header className={styles.header}>
        <p className={styles.meta}>
          <time>{formatDate(frontmatter.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{readingTime}</span>
        </p>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        {frontmatter.excerpt && (
          <p className={styles.excerpt}>{frontmatter.excerpt}</p>
        )}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <ul className={styles.tags}>
            {frontmatter.tags.map((t) => (
              <li key={t}>#{t}</li>
            ))}
          </ul>
        )}
      </header>

      <div className={`prose ${styles.body}`}>
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      <footer className={styles.footer}>
        <Link href="/blog" className={styles.footerLink}>
          ← All posts
        </Link>
      </footer>
    </article>
  );
}