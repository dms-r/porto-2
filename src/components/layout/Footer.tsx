import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-accent transition-colors">
            <Github className="h-7 w-7" />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent transition-colors">
            <Linkedin className="h-7 w-7" />
          </Link>
          <Link href="mailto:your.email@example.com" aria-label="Email Contact" className="hover:text-accent transition-colors">
            <Mail className="h-7 w-7" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Candidate Name. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
