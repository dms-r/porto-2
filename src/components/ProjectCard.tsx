import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProjectItem } from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.dataAiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl md:text-2xl font-headline text-primary mb-2">{project.name}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30">
        <div className="flex justify-end w-full space-x-3">
          {project.liveDemoUrl && (
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.githubRepoUrl && (
            <Button variant="default" asChild>
              <Link href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
