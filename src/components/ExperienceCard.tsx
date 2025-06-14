"use client"
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { WorkExperienceItem } from '@/data/portfolioData';
import { Briefcase, CalendarDays } from 'lucide-react';

interface ExperienceCardProps {
  experience: WorkExperienceItem;
  defaultOpen?: boolean;
}

export default function ExperienceCard({ experience, defaultOpen = false }: ExperienceCardProps) {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            {experience.logoUrl && (
              <Image 
                src={experience.logoUrl} 
                alt={`${experience.company} logo`} 
                width={50} 
                height={50} 
                className="rounded-md object-contain"
                data-ai-hint="company logo" 
              />
            )}
            <div>
              <CardTitle className="text-xl md:text-2xl font-headline text-primary">{experience.jobTitle}</CardTitle>
              <p className="text-md text-accent font-semibold flex items-center">
                <Briefcase className="mr-2 h-4 w-4" />
                {experience.company}
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            <CalendarDays className="mr-2 h-4 w-4" />
            {experience.employmentDates}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined} className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline hover:text-accent transition-colors py-2 [&[data-state=open]>svg]:text-accent">
              Responsibilities & Achievements
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground text-sm md:text-base">
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
