import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6 py-8 md:py-12", className)}>
      {children}
    </div>
  );
}
