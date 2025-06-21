
import { getPostData, getAllPostSlugs, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import TableOfContents from '@/components/TableOfContents';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found."
    }
  }
}

export function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(p => ({ slug: p.params.slug }));
}

export default async function PostPage({ params }: Props) {
  let post: PostData;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-4 gap-x-12">
        
        {/* Main Article Content */}
        <article className="lg:col-span-3">
          <header className="mb-8">
            <SectionTitle as="h1" className="text-left mb-2">{post.title}</SectionTitle>
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              <time dateTime={post.date}>{format(new Date(post.date), 'LLLL d, yyyy')}</time>
            </div>
          </header>

          <div
            id="article-content"
            className="prose dark:prose-invert lg:prose-lg max-w-none prose-p:text-foreground prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
          />
        </article>

        {/* Table of Contents Sidebar */}
        <div className="lg:col-span-1">
          <TableOfContents contentSelector="#article-content" />
        </div>

      </div>
    </PageWrapper>
  );
}
