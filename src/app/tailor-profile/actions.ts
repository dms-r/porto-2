// "use server"; // Removed for static export compatibility with GitHub Pages

import { portfolioData, type CandidateProfile } from '@/data/portfolioData';

// IMPORTANT: In a real Genkit app, you would import your flow from `src/ai/flows/...`
// e.g. import { profileTailorFlow } from '@/ai/flows/profileTailorFlow';
// For this example, we'll simulate an AI call.

export async function generateSummaryAction(jobDescription: string): Promise<{ summary?: string; error?: string }> {
  // For static export (GitHub Pages), Server Actions are not supported.
  // This feature will not work in the statically exported version.
  console.warn("Profile tailoring feature (Server Action) is not available in static export mode.");
  return { error: "The AI profile tailoring feature is not available on this statically hosted site. For full functionality, please visit a deployment that supports server-side features or contact the administrator." };

  // Original Server Action logic (commented out to allow static build):
  /*
  const candidateProfile: CandidateProfile = portfolioData;

  try {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Placeholder: Simulate calling a Genkit flow
    // const result = await profileTailorFlow.run({ jobDescription, profile: candidateProfile });
    // const summary = result; // Assuming the flow returns a string

    // Simulated AI response
    if (jobDescription.toLowerCase().includes("error")) {
        throw new Error("Simulated AI error: Could not process the job description.");
    }
    if (!jobDescription.trim()) {
        return { error: "Job description cannot be empty." };
    }

    const summary = `Based on your requirement for a "${jobDescription.substring(0, 30)}...", my experience at ${candidateProfile.workExperience[0].company} working on ${candidateProfile.projects[0].name} and skills in ${candidateProfile.skills.technical[0].skills[0].name} and ${candidateProfile.skills.technical[1].skills[0].name} would be highly relevant. I am adept at (AI-generated content focusing on matching skills)...`;
    
    return { summary };

  } catch (e: any) {
    console.error("AI Generation Error:", e);
    return { error: e.message || "An unexpected error occurred while generating the summary." };
  }
  */
}
