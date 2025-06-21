import { getSortedPostsData, type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import { format } from 'date-fns';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog Archive',
    description: 'A complete archive of all blog posts, sorted by year.',
};

export default function ArchivePage() {
  const allPosts = getSortedPostsData();

  const postsByYear = allPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, PostData[]>);

  const sortedYears = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <PageWrapper>
      <section id="archive" className="max-w-4xl mx-auto animate-fadeIn">
        <SectionTitle>Blog Archive</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12">
          All my articles and thoughts, organized by year.
        </p>

        {sortedYears.length > 0 ? (
          <Accordion type="multiple" defaultValue={sortedYears.slice(0, 1)}>
            {sortedYears.map((year) => (
              <AccordionItem value={year} key={year}>
                <AccordionTrigger className="text-2xl font-headline text-primary">
                  {year}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-4">
                    {postsByYear[year].map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group block p-4 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                                <time className="text-sm text-muted-foreground mt-1 sm:mt-0">
                                    {format(new Date(post.date), 'MMMM d')}
                                </time>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-muted-foreground">No posts have been archived yet.</p>
        )}
      </section>
    </PageWrapper>
  );
}
