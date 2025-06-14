import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { portfolioData } from '@/data/portfolioData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects Portfolio',
  description: `A showcase of web development projects by ${portfolioData.name}, highlighting skills in various technologies.`,
};

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <PageWrapper>
      <section id="projects" className="animate-fadeIn">
        <SectionTitle>Project Portfolio</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <div key={project.id} className="animate-fadeInUp" style={{animationDelay: `${index * 0.05}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
