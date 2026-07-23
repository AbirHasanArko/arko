import { getAllPosts, getAllTags } from '@/lib/mdx';
import BlogIndex from './BlogIndex';

export const metadata = {
  title: 'Blog',
  description:
    'Notes on AI, backend engineering, and shipping software that lasts.',
};

export default function Page() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return <BlogIndex posts={posts} tags={tags} />;
}