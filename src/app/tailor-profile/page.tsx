import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import ProfileTailoringForm from './components/ProfileTailoringForm';
import { portfolioData } from '@/data/portfolioData';
import type { Metadata } from 'next';
import { Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profile Tailoring Tool',
  description: `AI-powered tool to generate personalized summaries for ${portfolioData.name}'s profile based on job descriptions.`,
};

export default function TailorProfilePage() {
  return (
    <PageWrapper>
      <section id="tailor-profile" className="max-w-3xl mx-auto animate-fadeIn">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <Brain className="h-16 w-16 text-accent mb-4" />
          <SectionTitle className="mb-2">Profile Tailoring Tool</SectionTitle>
          <p className="text-lg text-muted-foreground">
            Paste a job description below to generate a personalized summary highlighting relevant skills and experiences from my profile.
          </p>
        </div>
        <ProfileTailoringForm />
      </section>
    </PageWrapper>
  );
}
