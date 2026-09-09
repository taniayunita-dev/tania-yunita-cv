import type { LucideIcon } from "lucide-react";

export type Lang = 'en' | 'id';

export interface Translation {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headlineParts: [string, string]; // split so "React" and "TypeScript" can stay unstyled/untranslated inline if needed
    headline: string;
    subtext: string;
    cta1: string;
    cta2: string;
    credibilities:string[];
  };
  about: {
    eyebrow: string;
    greeting: string; // "Hi, I'm" / "Hai, saya"
    name: string;
    p1: string;
    p2: string;
    eduLabel: string;
    degree: string;
    field: string;
    university: string;
    locLabel: string;
    location: string;
    stackTitle: string;
    stackCategories: {
      frontend: string;
      styling: string;
      data: string;
      tools: string;
    };
  };
  skills: {
    eyebrow: string;
    heading: string;
    subtext: string;
    items: {
      number: string;
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  howIBuild: {
    eyebrow: string;
    heading: string;
    subtext: string;
    principles: {
      title: string;
      desc: string;
      icon: LucideIcon;
    }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: {
      role: string;
      description?:string;
      company: string;
      period: string;
      note?: string;
      responsibilities: string[];
      stacks:string[]
    }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subheading?:string;
    items: {
      name: string;
      desc: string;
      image:string;
      stacks: string[];
      slug:string;
      demoLabel: string;
      codeLabel: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading:string;
    subtext: string;
    name:string;
    email:string;
    github:string;
    linkedin:string;
    contactLinks:{
      label:string;
      desc:string;
      href:string;
      icon:LucideIcon;
      external:boolean;
    }[]
    cta: string;
  };
  footer: {
    rights: string;
  };
  meta: {
    themeToggleLabel: string;
    langLabel: string;
  };
}
