import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionTitle({ children, className, as: Component = 'h2' }: SectionTitleProps) {
  return (
    <Component className={cn("font-headline text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 text-center", className)}>
      {children}
    </Component>
  );
}
