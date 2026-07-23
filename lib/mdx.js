import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPostSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data,
    content,
    readingTime: data.readingTime || estimateReadingTime(content),
  };
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => {
      const da = new Date(a.frontmatter.date || 0).getTime();
      const db = new Date(b.frontmatter.date || 0).getTime();
      return db - da;
    });
  return posts;
}

export function getAllTags() {
  const posts = getAllPosts();
  const tagSet = new Set();
  posts.forEach((p) => {
    (p.frontmatter.tags || []).forEach((t) => tagSet.add(t));
  });
  return Array.from(tagSet).sort();
}

function estimateReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}