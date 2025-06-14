
import type { LucideIcon } from 'lucide-react';
import { Briefcase, Lightbulb, Users, Mail, Linkedin, Github, Brain, ExternalLink, Palette, ShieldCheck, Zap, Laptop, Cpu, Wifi, AppWindow, Code2, Layers3, Wrench, Settings2, GraduationCap } from 'lucide-react';

export interface WorkExperienceItem {
  id: string;
  company: string;
  jobTitle: string;
  employmentDates: string;
  description: string[];
  logoUrl?: string;
}

// Using WorkExperienceItem structure for Education items for component reusability
// company -> institution, jobTitle -> program/degree, employmentDates -> duration
export type EducationItem = WorkExperienceItem;

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
  name:string;
  icon: LucideIcon;
  skills: { name: string; proficiency?: number }[];
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
  education: EducationItem[];
  projects: ProjectItem[];
  skills: {
    technical: SkillCategory[];
    soft?: string[];
  };
}

export const portfolioData: CandidateProfile = {
  name: "Dimas Refaldy",
  title: "Passionate IT Enthusiast & High School Graduate",
  bio: "A passionate high school graduate with a strong interest in computer and network technology. Possess basic hardware/software and network troubleshooting skills from self-learning experiences and personal projects. Highly committed to learning and contributing to the field of technology.",
  heroImage: "https://placehold.co/1200x600.png",
  heroImageAiHint: "tech setup computer",
  contact: {
    email: "dimas@dpublic.my.id",
    linkedin: "https://linkedin.com/in/dimas-refaldy",
    github: "https://github.com/dms-r",
  },
  workExperience: [
    {
      id: "exp2",
      company: "Community Support",
      jobTitle: "Informal Technical Support",
      employmentDates: "2024 - Present",
      description: [
        "Regularly assisted family and friends in solving computer-related problems (e.g. printer error, virus removal, slow internet connection).",
        "Provided basic guidance on using Microsoft Office and Google Workspace applications.",
      ],
      logoUrl: "https://placehold.co/100x100.png",
    },
  ],
  education: [
    {
      id: "edu1",
      company: "SMAN 1 Haurgeulis, Indramayu", // Displayed as Institution
      jobTitle: "Student - Mathematics and Natural Sciences", // Displayed as Program/Major
      employmentDates: "2022 - 2024", // Displayed as Duration
      description: [
        "Focused on Mathematics and Natural Sciences.",
        "Achieved a GPA of 94/100.",
        "Graduated with a strong foundation for technical learning."
      ],
      logoUrl: "https://placehold.co/100x100.png", // Placeholder for school logo
    },
  ],
  projects: [
    {
      id: "proj1_existing", // Keep original project, ensure ID is unique if conflicts
      name: "Personal Computing & Networking Lab", // Original name was more generic
      description: "A hands-on initiative focusing on PC assembly, multi-OS configuration (Windows & Linux), hardware troubleshooting, and optimizing home network setups. This project showcases practical skills in system administration and network management.",
      technologies: ["Windows 10/11", "Linux (Ubuntu/Debian)", "Hardware Assembly", "Network Troubleshooting", "Wi-Fi Optimization", "Dual Boot"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "computer components network",
    },
    {
      id: "proj_homelab",
      name: "Home Lab & Personal Computer Setup",
      description: "A self-driven project involving PC assembly from components, installation and dual-boot configuration of Windows and Linux operating systems, hardware troubleshooting and upgrades (RAM, SSD), and optimization of home Wi-Fi networks. This project demonstrates practical skills in system administration, hardware management, and network setup.",
      technologies: ["PC Assembly", "Windows 10/11", "Linux (Ubuntu/Debian)", "Hardware Troubleshooting", "Network Configuration", "Wi-Fi Optimization", "Dual Boot"],
      imageUrl: "https://placehold.co/600x400.png", 
      dataAiHint: "computer hardware setup",
    }
  ],
  skills: {
    technical: [
      {
        name: "Operating Systems",
        icon: Laptop,
        skills: [
          { name: "Windows 10/11 (Installation & Configuration)" },
          { name: "Basic Linux (Ubuntu/Debian)" },
          { name: "Dual-Boot Environments" },
        ],
      },
      {
        name: "Hardware",
        icon: Cpu,
        skills: [
          { name: "PC Component Identification" },
          { name: "Hardware Troubleshooting (RAM, HDD/SSD, PSU)" },
          { name: "Peripheral Management" },
          { name: "PC Assembly & Upgrades" },
        ],
      },
      {
        name: "Networking",
        icon: Wifi,
        skills: [
          { name: "TCP/IP Fundamentals" },
          { name: "DNS & DHCP Configuration" },
          { name: "Internet Connection Troubleshooting" },
          { name: "Wi-Fi Setup & Optimization" },
          { name: "Basic Network Security" },
        ],
      },
      {
        name: "Software & Applications",
        icon: AppWindow,
        skills: [
          { name: "Microsoft Office Suite (Word, Excel)" },
          { name: "Google Workspace (Docs, Sheets)" },
          { name: "Application Management" },
          { name: "Basic Antivirus Management" },
        ],
      },
    ],
    soft: [
      "Problem Solving",
      "Self-Learning",
      "Commitment to Learning",
      "Technical Aptitude",
      "Adaptability",
      "Attention to Detail",
    ],
  },
};
