
import { getPostData, getAllPostSlugs, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { CalendarDays, ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { portfolioData } from '@/data/portfolioData';

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
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [portfolioData.name],
        images: post.imageUrl ? [
          {
            url: post.imageUrl,
            width: 1200,
            height: 630,
            alt: post.imageAlt || post.title,
          }
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.imageUrl ? [post.imageUrl] : [],
      }
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
  return paths;
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
      <article className="max-w-4xl mx-auto animate-fadeIn">
        <div className="mb-8 text-center">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <header className="mb-8 text-center">
           {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
          <SectionTitle as="h1" className="text-center !text-3xl md:!text-5xl mb-4">{post.title}</SectionTitle>
          <div className="flex items-center justify-center text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), 'LLLL d, yyyy')}</time>
          </div>
        </header>
        
        {post.imageUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg animate-fadeInUp">
            <Image 
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={post.imageAiHint || 'blog technology'}
            />
          </div>
        )}

        <div className="lg:grid lg:grid-cols-4 lg:gap-x-12">
          <div className="lg:col-span-3">
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

            <div
              id="article-content"
              className="prose dark:prose-invert lg:prose-lg max-w-none prose-p:text-foreground prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
            />

            <footer className="mt-12 pt-8 border-t">
              <ShareButtons title={post.title} slug={post.slug} />
            </footer>
          </div>

          <aside className="lg:col-span-1">
            <TableOfContents contentSelector="#article-content" />
          </aside>
        </div>
      </article>
    </PageWrapper>
  );
}
