
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { type PostData } from '@/lib/posts';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Archive, Tag } from 'lucide-react';
import { format } from 'date-fns';

const POSTS_PER_PAGE = 5;

export default function BlogClientPage({ allPostsData }: { allPostsData: PostData[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return allPostsData;
    }
    return allPostsData.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, allPostsData]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <PageWrapper>
      <section id="blog" className="animate-fadeIn">
        <SectionTitle>My Blog</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Here are some of my thoughts, tutorials, and updates on my journey.
        </p>

        <div className="max-w-md mx-auto mb-12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10"
              aria-label="Search blog posts"
            />
          </div>
          <Button asChild variant="outline">
            <Link href="/blog/archive">
              <Archive className="mr-2 h-4 w-4" />
              View Archive
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto min-h-[400px]">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map(({ slug, date, title, excerpt, tags }) => (
              <Link href={`/blog/${slug}`} key={slug} className="group block">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground mb-4">{excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4">
                     {tags && tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                         <Tag className="h-4 w-4 text-muted-foreground" />
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center font-semibold text-accent mt-auto pt-2">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full mt-10">
              No posts found for your search query.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
