
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}
