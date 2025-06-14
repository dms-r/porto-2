
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Briefcase, Code, Lightbulb, Users, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home', icon: <Lightbulb className="mr-2 h-5 w-5" /> },
  { href: '/experience', label: 'Experience', icon: <Briefcase className="mr-2 h-5 w-5" /> },
  { href: '/projects', label: 'Projects', icon: <Code className="mr-2 h-5 w-5" /> },
  { href: '/skills', label: 'Skills', icon: <Users className="mr-2 h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="mr-2 h-5 w-5" /> },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background/60 backdrop-blur-sm"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-3xl font-headline font-bold text-primary hover:text-accent transition-colors" aria-label="ElegantFolio Home">
          ElegantFolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 px-3 py-2 text-sm",
                pathname === link.href ? "text-accent font-semibold border-b-2 border-accent rounded-none" : ""
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ThemeToggle className="ml-2" />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggle className="mr-2" />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-7 w-7 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link href="/" className="mb-6 text-2xl font-headline font-bold text-primary">
                    ElegantFolio
                  </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                     <Link
                        href={link.href}
                        className={cn(
                          "flex items-center rounded-md p-3 text-lg font-medium transition-colors hover:bg-primary/10",
                          pathname === link.href ? "text-primary bg-primary/5" : "text-foreground"
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
