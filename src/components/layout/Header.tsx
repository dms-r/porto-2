
"use client";

import Link from 'next/link';
import { useState, useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Briefcase, Code, Lightbulb, Users, Mail, GraduationCap, Rss, User, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from 'react';

type NavLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

type NavGroup = {
  label: string;
  icon: ReactNode;
  items: NavLink[];
};

// The main navigation structure
const navItems: (NavLink | NavGroup)[] = [
  { href: '/', label: 'Home', icon: <Lightbulb className="mr-2 h-5 w-5" /> },
  {
    label: 'About Me',
    icon: <User className="mr-2 h-5 w-5" />,
    items: [
      { href: '/experience', label: 'Experience', icon: <Briefcase className="mr-2 h-5 w-5" /> },
      { href: '/education', label: 'Education', icon: <GraduationCap className="mr-2 h-5 w-5" /> },
      { href: '/skills', label: 'Skills', icon: <Users className="mr-2 h-5 w-5" /> },
    ],
  },
  { href: '/projects', label: 'Projects', icon: <Code className="mr-2 h-5 w-5" /> },
  { href: '/blog', label: 'Blog', icon: <Rss className="mr-2 h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="mr-2 h-5 w-5" /> },
];

// Type guard to check if an item is a NavGroup
function isNavGroup(item: NavLink | NavGroup): item is NavGroup {
  return (item as NavGroup).items !== undefined;
}


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
      "sticky top-0 z-50 w-full transition-all duration-300 border-b",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background/60 backdrop-blur-sm"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-3xl font-headline font-bold text-primary hover:text-accent transition-colors" aria-label="ElegantFolio Home">
          dpublic
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) =>
            isNavGroup(item) ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 px-3 py-2 text-sm flex items-center",
                      // Highlight if any sub-item is active
                      item.items.some(subItem => pathname === subItem.href) ? "text-accent font-semibold border-b-2 border-accent rounded-none" : ""
                    )}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.href} asChild>
                      <Link href={subItem.href} className={cn(
                        "flex items-center w-full cursor-pointer",
                        pathname === subItem.href ? "font-semibold text-accent" : ""
                      )}>
                        {React.cloneElement(subItem.icon as React.ReactElement, { className: "mr-2 h-5 w-5" })}
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 px-3 py-2 text-sm",
                  pathname === item.href ? "text-accent font-semibold border-b-2 border-accent rounded-none" : ""
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          )}
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
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2 mt-4">
                <SheetClose asChild>
                  <Link href="/" className="mb-6 text-2xl font-headline font-bold text-primary">
                    ElegantFolio
                  </Link>
                </SheetClose>
                {navItems.map((item) =>
                  isNavGroup(item) ? (
                    <div key={item.label} className="space-y-2">
                       <div className="flex items-center rounded-md px-3 pt-3 text-lg font-medium text-muted-foreground">
                        {item.icon}
                        {item.label}
                      </div>
                      <div className="flex flex-col space-y-2 pl-6">
                         {item.items.map((subItem) => (
                           <SheetClose asChild key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "flex items-center rounded-md p-3 text-lg font-medium transition-colors hover:bg-primary/10",
                                pathname === subItem.href ? "text-primary bg-primary/5" : "text-foreground"
                              )}
                            >
                              {subItem.icon}
                              {subItem.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SheetClose asChild key={item.href}>
                       <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-md p-3 text-lg font-medium transition-colors hover:bg-primary/10",
                            pathname === item.href ? "text-primary bg-primary/5" : "text-foreground"
                          )}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                    </SheetClose>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
