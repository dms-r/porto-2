"use client";

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const { toast } = useToast();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Ensure window is defined (runs on client)
    setCurrentUrl(`${window.location.origin}/blog/${slug}`);
  }, [slug]);

  const copyToClipboard = () => {
    if(!currentUrl) return;
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: 'Link Copied!',
      description: 'The post URL has been copied to your clipboard.',
    });
  };

  if (!currentUrl) {
    return null; // Don't render on server or before URL is ready
  }

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(title)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(title)}`;

  return (
    <div className="flex items-center gap-2 mt-8">
      <p className="font-semibold text-sm text-foreground mr-2">Share this post:</p>
      <Button variant="outline" size="icon" asChild>
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link">
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
