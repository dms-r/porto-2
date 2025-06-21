
import { getSortedPostsData } from '@/lib/posts';
import BlogClientPage from './components/BlogClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'A collection of thoughts, tutorials, and updates on my journey.',
};

// This is a Server Component
export default function BlogPage() {
  // Fetch data on the server at build time
  const allPostsData = getSortedPostsData();

  // Pass the data to the Client Component
  return <BlogClientPage allPostsData={allPostsData} />;
}
