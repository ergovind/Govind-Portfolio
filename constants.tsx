
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Govind",
  title: "Senior Full-Stack Engineer & Cloud Specialist",
  about: "I am a passionate technologist with over 8 years of experience building scalable distributed systems and intuitive user interfaces. My expertise lies in bridging the gap between robust backend architectures and high-performance frontend applications. I thrive on solving complex engineering challenges and mentoring cross-functional teams.",
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Three.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless"]
    },
    {
      category: "AI & Tools",
      items: ["LangChain", "OpenAI API", "Gemini API", "Vector DBs", "PyTorch"]
    }
  ],
  experience: [
    {
      company: "Tech Global Solutions",
      role: "Lead Software Engineer",
      period: "2021 - Present",
      description: [
        "Architected a micro-frontend migration reducing bundle size by 40%.",
        "Led a team of 10 developers to deliver an enterprise-level SaaS platform serving 50k+ daily users.",
        "Implemented real-time data visualization dashboards using D3.js and WebSockets."
      ]
    },
    {
      company: "Innovate AI",
      role: "Senior Full Stack Developer",
      period: "2018 - 2021",
      description: [
        "Built and deployed machine learning models for predictive maintenance using Python and AWS SageMaker.",
        "Optimized database queries resulting in a 60% improvement in API response times.",
        "Introduced automated testing suites, increasing code coverage from 20% to 85%."
      ]
    }
  ],
  projects: [
    {
      title: "AI Pulse - Enterprise Monitoring",
      description: "An AI-powered monitoring tool that predicts server failures before they occur using anomaly detection.",
      tags: ["React", "Python", "PyTorch", "AWS"],
      link: "#",
      image: "https://picsum.photos/seed/aipulse/600/400"
    },
    {
      title: "Nebula UI Kit",
      description: "A high-performance, accessible design system for modern web applications.",
      tags: ["TypeScript", "React", "Storybook", "Tailwind"],
      link: "#",
      image: "https://picsum.photos/seed/nebulaui/600/400"
    },
    {
      title: "CryptoFlow Dashboard",
      description: "Real-time cryptocurrency tracking and analytics platform with complex charting.",
      tags: ["Next.js", "Go", "Redis", "D3.js"],
      link: "#",
      image: "https://picsum.photos/seed/cryptoflow/600/400"
    }
  ],
  contact: {
    email: "govind.dev@example.com",
    linkedin: "https://linkedin.com/in/govind",
    github: "https://github.com/govind"
  }
};
