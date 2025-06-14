
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard'; // Reusing ExperienceCard for education items
import { portfolioData } from '@/data/portfolioData';
import type { Metadata } from 'next';
import type { EducationItem } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Education',
  description: `Educational background of ${portfolioData.name}, detailing studies and academic achievements.`,
};

export default function EducationPage() {
  const { education } = portfolioData;

  if (!education || education.length === 0) {
    return (
      <PageWrapper>
        <SectionTitle>Education</SectionTitle>
        <p className="text-center text-lg text-muted-foreground">No educational background information available at this time.</p>
      </PageWrapper>
    );
  }

  // Type casting items to WorkExperienceItem to satisfy ExperienceCard props,
  // as EducationItem is an alias or structurally compatible.
  const educationItemsForCard = education as EducationItem[];


  return (
    <PageWrapper>
      <section id="education" className="animate-fadeIn">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {educationItemsForCard.map((edu, index) => (
            <div key={edu.id} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <ExperienceCard 
                experience={edu} 
                defaultOpen={index === 0} 
              />
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
