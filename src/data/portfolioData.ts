import type { LucideIcon } from 'lucide-react';
import { Code2, Layers3, Wrench, Briefcase, Lightbulb, Users, Mail, Linkedin, Github, Brain, ExternalLink, Settings2, Palette, ShieldCheck, Zap } from 'lucide-react'; // Added more icons

export interface WorkExperienceItem {
  id: string;
  company: string;
  jobTitle: string;
  employmentDates: string;
  description: string[];
  logoUrl?: string; // Optional company logo
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  githubRepoUrl?: string;
  dataAiHint: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: { name: string; proficiency?: number }[]; // Proficiency 0-100 for potential progress bar
}

export interface CandidateProfile {
  name: string;
  title: string;
  bio: string;
  heroImage: string;
  heroImageAiHint: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  workExperience: WorkExperienceItem[];
  projects: ProjectItem[];
  skills: {
    technical: SkillCategory[];
    soft?: string[]; // Optional soft skills
  };
}

export const portfolioData: CandidateProfile = {
  name: "Jane Doe", // Replace with actual name
  title: "Full Stack Web Developer",
  bio: "A passionate and creative web developer with a knack for building elegant and efficient solutions. Experienced in crafting responsive user interfaces and robust backend systems. Always eager to learn new technologies and take on challenging projects.",
  heroImage: "https://placehold.co/1200x600.png",
  heroImageAiHint: "developer workspace",
  contact: {
    email: "jane.doe@example.com",
    linkedin: "https://linkedin.com/in/janedoe-dev",
    github: "https://github.com/janedoe-dev",
  },
  workExperience: [
    {
      id: "exp1",
      company: "Tech Solutions Inc.",
      jobTitle: "Senior Web Developer",
      employmentDates: "Jan 2021 - Present",
      description: [
        "Led development of key features for a SaaS platform, improving user engagement by 20%.",
        "Mentored junior developers and conducted code reviews to ensure high-quality standards.",
        "Collaborated with UX/UI designers to translate mockups into responsive web applications.",
        "Optimized application performance, reducing load times by 30%.",
      ],
      logoUrl: "https://placehold.co/100x100.png",
    },
    {
      id: "exp2",
      company: "Innovatech Ltd.",
      jobTitle: "Full Stack Developer",
      employmentDates: "Jun 2018 - Dec 2020",
      description: [
        "Developed and maintained e-commerce websites using React, Node.js, and PostgreSQL.",
        "Integrated third-party APIs for payment processing and shipping.",
        "Participated in agile development cycles, including sprint planning and daily stand-ups.",
      ],
      logoUrl: "https://placehold.co/100x100.png",
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "E-commerce Platform",
      description: "A fully functional e-commerce platform with features like product listings, shopping cart, user authentication, and order management. Built with a modern MERN stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "ecommerce interface",
      liveDemoUrl: "#",
      githubRepoUrl: "#",
    },
    {
      id: "proj2",
      name: "Project Management Tool",
      description: "A collaborative project management tool designed to help teams organize tasks, track progress, and communicate effectively. Features include Kanban boards and real-time updates.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Shadcn UI"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "dashboard project management",
      liveDemoUrl: "#",
      githubRepoUrl: "#",
    },
    {
      id: "proj3",
      name: "Personal Blog Engine",
      description: "A lightweight and fast personal blog engine with Markdown support, static site generation for performance, and a clean, minimalist design.",
      technologies: ["Astro", "Svelte", "Tailwind CSS", "Markdown"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "blog interface",
      liveDemoUrl: "#",
    },
  ],
  skills: {
    technical: [
      {
        name: "Programming Languages",
        icon: Code2,
        skills: [
          { name: "JavaScript (ES6+)", proficiency: 95 },
          { name: "TypeScript", proficiency: 90 },
          { name: "Python", proficiency: 75 },
          { name: "HTML5", proficiency: 98 },
          { name: "CSS3/Sass", proficiency: 95 },
        ],
      },
      {
        name: "Frameworks & Libraries",
        icon: Layers3,
        skills: [
          { name: "React.js", proficiency: 95 },
          { name: "Next.js", proficiency: 90 },
          { name: "Node.js", proficiency: 85 },
          { name: "Express.js", proficiency: 80 },
          { name: "Tailwind CSS", proficiency: 95 },
          { name: "Redux", proficiency: 70 },
        ],
      },
      {
        name: "Databases & Tools",
        icon: Wrench,
        skills: [
          { name: "MongoDB", proficiency: 80 },
          { name: "PostgreSQL", proficiency: 70 },
          { name: "Git & GitHub", proficiency: 95 },
          { name: "Docker", proficiency: 65 },
          { name: "Webpack", proficiency: 70 },
          { name: "Jest/RTL", proficiency: 80 },
        ],
      },
       {
        name: "Other Skills",
        icon: Settings2,
        skills: [
          { name: "Responsive Design", proficiency: 95 },
          { name: "RESTful APIs", proficiency: 90 },
          { name: "Agile Methodologies", proficiency: 85 },
          { name: "UI/UX Principles", proficiency: 75 },
          { name: "SEO Best Practices", proficiency: 70 },
        ],
      },
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Adaptability",
      "Creativity",
      "Time Management",
    ],
  },
};

// For AI flow, Zod schema would be useful. Example:
// import { z } from 'zod';
// const WorkExperienceItemSchema = z.object(...);
// export const CandidateProfileSchema = z.object({ ... });
