
import { getSortedPostsData, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Archive } from 'lucide-react';
import { format } from 'date-fns';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'A collection of thoughts, tutorials, and updates on my journey.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <PageWrapper>
      <section id="blog" className="animate-fadeIn">
        <SectionTitle>My Blog</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Here are some of my thoughts, tutorials, and updates on my journey.
        </p>

        <div className="max-w-md mx-auto mb-12 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/blog/archive">
              <Archive className="mr-2 h-4 w-4" />
              View Archive
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {allPostsData.length > 0 ? (
            allPostsData.map(({ slug, date, title, excerpt, tags }) => (
              <Link href={`/blog/${slug}`} key={slug} className="group block h-full">
                <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full bg-card/50 hover:bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-1">
                      <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow py-0">
                    <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4 mt-auto pt-4">
                     {tags && tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center font-semibold text-accent text-sm pt-2">
                      Read Post
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full mt-10">
              No posts found.
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
