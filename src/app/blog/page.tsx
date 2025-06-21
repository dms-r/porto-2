import Link from 'next/link';
import { getSortedPostsData, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolioData';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Thoughts and articles from ${portfolioData.name}.`,
};

export default function BlogPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <PageWrapper>
      <section id="blog" className="animate-fadeIn">
        <SectionTitle>My Blog</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Here are some of my thoughts, tutorials, and updates on my journey.
        </p>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <Link href={`/blog/${slug}`} key={slug} className="group block">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{excerpt}</p>
                  <div className="flex items-center font-semibold text-accent">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
