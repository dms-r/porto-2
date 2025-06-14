
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Users } from 'lucide-react'; // Changed Shapes to Users
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';

export default function Home() {
  const { name, title, bio, heroImage, heroImageAiHint, projects, workExperience } = portfolioData;

  return (
    <PageWrapper className="!py-0"> {/* Override default PageWrapper padding for hero */}
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center bg-card py-16 md:py-24 animate-fadeIn">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left lg:col-span-3 animate-fadeInUp">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Hi, I&apos;m <span className="text-accent">{name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {bio}
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-foreground hover:bg-accent hover:text-accent-foreground dark:border-secondary dark:text-foreground dark:hover:bg-secondary/20 dark:hover:text-foreground shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/skills"> 
                  View Skills <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Outer container for grid layout and max width on XL screens */}
          <div className="relative lg:col-span-2 xl:w-96 animate-fadeInUp">
            {/* Middle container for border, padding, aspect ratio, shape, and shadow. Centered if xl:w-96 is larger. */}
            <div className="aspect-video md:aspect-square p-1 border-4 border-border rounded-full shadow-2xl mx-auto max-w-full">
              {/* Inner container for the image itself, to ensure it's clipped round and fills the padded area */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${name} - ${title}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  data-ai-hint={heroImageAiHint}
                  className="transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <div key={project.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/projects">
                See All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Brief Experience Overview Section */}
      <section id="brief-experience" className="py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>Career Highlights</SectionTitle>
          <div className="space-y-8">
            {workExperience.slice(0, 2).map((exp, index) => (
               <div key={exp.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <ExperienceCard experience={exp} defaultOpen={index === 0} />
               </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/experience">
                View Full Experience <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}

export const metadata = {
  title: 'Home',
  description: `The official portfolio of ${portfolioData.name}, a ${portfolioData.title}. Discover projects, skills, and professional experience.`,
};

