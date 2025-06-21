
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';

interface TocEntry {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentSelector: string;
  isMobile?: boolean; // New prop
}

export default function TableOfContents({ contentSelector, isMobile = false }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const articleContent = document.querySelector(contentSelector);
    if (!articleContent) return;

    const headingElements = Array.from(
      articleContent.querySelectorAll('h2, h3, h4')
    ) as HTMLElement[];
    
    const extractedHeadings = headingElements.map((heading) => {
      const text = heading.innerText;
      const level = parseInt(heading.tagName.substring(1), 10);
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, ''); // Remove all non-word chars
      heading.id = id;
      return { id, text, level };
    });

    setHeadings(extractedHeadings);

    // Intersection Observer for active heading highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
              // Set the first intersecting element as active
              setActiveId(entry.target.id);
              return; // Exit after finding the first one
            }
        }
      },
      { rootMargin: '0% 0% -85% 0%' } // Highlight when heading is in top 15% of viewport
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, [contentSelector]);

  if (headings.length === 0) {
    return null;
  }

  const TocNav = (
    <nav>
      <ul className="space-y-2 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block text-sm transition-colors hover:text-primary -ml-px border-l-2',
                {
                  'pl-3': heading.level === 2,
                  'pl-6': heading.level === 3,
                  'pl-9': heading.level === 4,
                },
                heading.id === activeId
                  ? 'font-semibold text-primary border-primary'
                  : 'text-muted-foreground border-transparent'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (isMobile) {
    return TocNav;
  }

  return (
    <aside className="sticky top-24 hidden lg:block">
      <h3 className="text-lg font-headline font-semibold mb-4 flex items-center text-primary">
        <List className="mr-2 h-5 w-5 text-accent" />
        Table of Contents
      </h3>
      {TocNav}
    </aside>
  );
}
