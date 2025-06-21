
import { getPostData, getAllPostSlugs, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarDays, ChevronLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
      keywords: post.tags,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found."
    }
  }
}

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
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
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 gap-x-12">
        
        <article className="lg:col-span-3">
          <header className="mb-8">
            <SectionTitle as="h1" className="text-left mb-2">{post.title}</SectionTitle>
            
            <div className="flex items-center text-muted-foreground mb-4">
              <CalendarDays className="mr-2 h-4 w-4" />
              <time dateTime={post.date}>{format(new Date(post.date), 'LLLL d, yyyy')}</time>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
            
            <div className="lg:hidden border-y border-border my-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="toc" className="border-b-0">
                  <AccordionTrigger className="py-3 text-sm font-semibold text-primary hover:no-underline">
                    Table of Contents
                  </AccordionTrigger>
                  <AccordionContent>
                    <TableOfContents contentSelector="#article-content" isMobile={true} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </header>

          <div
            id="article-content"
            className="prose dark:prose-invert lg:prose-lg max-w-none prose-p:text-foreground prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
          />

          <footer className="mt-12 pt-8 border-t">
            <ShareButtons title={post.title} slug={post.slug} />
          </footer>
        </article>

        <div className="lg:col-span-1">
          <TableOfContents contentSelector="#article-content" />
        </div>

      </div>
    </PageWrapper>
  );
}
