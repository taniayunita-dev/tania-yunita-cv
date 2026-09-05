// export interface Project {
//   id: string;
//   title: string;
//   shortDescription: string;
//   description: string;
//   role: string;
//   technologies: string[];
//   features: string[];
//   image?: string;
//   githubUrl?: string;
//   liveUrl?: string;
//   caseStudyUrl?: string;
// }

export type ProjectType = 'professional' | 'personal';

export interface Project {
  id:string
  slug: string;
  title: string;
  type: ProjectType;
  role: string;
  description: string;
  features: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}