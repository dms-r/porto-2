
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData'; // Import portfolioData to access contact info

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, name } = portfolioData;

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {contact.github && (
            <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-accent transition-colors">
              <Github className="h-7 w-7" />
            </Link>
          )}
          {contact.linkedin && (
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent transition-colors">
              <Linkedin className="h-7 w-7" />
            </Link>
          )}
          {contact.email && (
            <Link href={`mailto:${contact.email}`} aria-label="Email Contact" className="hover:text-accent transition-colors">
              <Mail className="h-7 w-7" />
            </Link>
          )}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
