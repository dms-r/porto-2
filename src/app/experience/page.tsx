import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import { portfolioData } from '@/data/portfolioData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience',
  description: `Detailed work experience of ${portfolioData.name}, showcasing roles, responsibilities, and achievements.`,
};

export default function ExperiencePage() {
  const { workExperience } = portfolioData;

  return (
    <PageWrapper>
      <section id="experience" className="animate-fadeIn">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <ExperienceCard experience={exp} defaultOpen={index === 0} />
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
