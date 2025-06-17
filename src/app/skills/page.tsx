
import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import SkillBadge from '@/components/SkillBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolioData';
import type { SkillCategory, Skill } from '@/data/portfolioData'; // Import Skill type
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Skills Overview',
  description: `Technical skills and competencies of ${portfolioData.name}, including programming languages, frameworks, and tools.`,
};

export default function SkillsPage() {
  const { technical: technicalSkills, soft: softSkills } = portfolioData.skills;

  return (
    <PageWrapper>
      <section id="skills" className="animate-fadeIn">
        <SectionTitle>Skills Overview</SectionTitle>
        
        <div className="space-y-12">
          {technicalSkills.map((category: SkillCategory, catIndex: number) => (
            <div key={category.name} className={cn("animate-fadeInUp")} style={{animationDelay: `${catIndex * 0.1}s`}}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary flex items-center">
                    <category.icon className="mr-3 h-7 w-7 text-accent" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-auto-rows-fr">
                    {category.skills.map((skill: Skill, skillIndex: number) => ( // Use Skill type
                       <div key={skill.name} className="animate-fadeInUp h-full" style={{animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`}}>
                          <SkillBadge name={skill.name} level={skill.level} className="h-full" />
                       </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {softSkills && softSkills.length > 0 && (
            <div className={cn("animate-fadeInUp")} style={{animationDelay: `${technicalSkills.length * 0.1}s`}}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skillName, index) => ( // Changed skill to skillName for clarity
                       <div key={skillName} className="animate-fadeInUp" style={{animationDelay: `${(technicalSkills.length * 0.1) + (index * 0.05)}s`}}>
                        <SkillBadge name={skillName} className="bg-secondary/50 border-secondary text-secondary-foreground" />
                       </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
