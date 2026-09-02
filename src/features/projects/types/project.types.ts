export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}