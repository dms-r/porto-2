
import { getSortedPostsData } from '@/lib/posts';
import BlogClientPage from './components/BlogClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'A collection of thoughts, tutorials, and updates on my journey.',
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return <BlogClientPage allPostsData={allPostsData} />;
}
