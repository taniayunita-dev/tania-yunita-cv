import type { Translation } from '../types/i18n';
import {
  Accessibility,
  Boxes,
  Gauge,
  Mail,
  Smartphone,
  GitBranchIcon as Github,
    Link as Linkedin,
  Type,
} from 'lucide-react';


export const en: Translation = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'FRONTEND DEVELOPER',
    headlineParts: ['I build responsive, production-ready interfaces with', 'React and TypeScript.'],
    headline: 'I build responsive, production-ready interfaces with React and TypeScript.',
    subtext:
      'Frontend Developer with 3+ years of experience building clean, scalable, and maintainable web applications.',
    cta1: 'View my work',
    cta2: 'Contact me',
    credibilities:['3+ Years Experience','React','TypeScript', 'Responsive UI','API Integration' ]
  },
  about: {
    eyebrow: 'ABOUT ME',
    greeting: "Hi, I'm",
    name: 'Tania',
    p1: 'Frontend Developer with 3+ years of experience building and maintaining web applications using React and TypeScript.',
    p2: 'I translate UI designs into responsive web interfaces, build reusable components, and integrate APIs to deliver functional and maintainable applications.',
    eduLabel: 'EDUCATION',
    degree: 'Bachelor Degree',
    field: 'Informatics',
    university: 'Universitas Teknologi Bandung',
    locLabel: 'LOCATION',
    location: 'Bekasi, Indonesia',
    stackTitle: 'STACK I WORK WITH',
    stackCategories: {
      frontend: 'Frontend',
      styling: 'UI & Styling',
      data: 'Data & Integration',
      tools: 'Tools',
    },
  },
  skills: {
    eyebrow: 'SKILLS',
    heading: 'How I approach frontend development.',
    subtext:
      "A selection of frontend practices I'm confident with, experienced in, and currently developing.",
    items: [
      {
        number: '01',
        title: 'Strong',
        desc: 'Areas I can confidently apply in real-world frontend development.',
        tags: ['Component Architecture', 'Responsive UI', 'Performance', 'Accessibility'],
      },
      {
        number: '02',
        title: 'Experienced',
        desc: 'Areas I have applied across projects and professional experience.',
        tags: ['API Integration', 'Authentication', 'Error Handling', 'State Management'],
      },
      {
        number: '03',
        title: 'Currently Developing',
        desc: 'Areas I am actively strengthening through hands-on practice.',
        tags: ['Testing', 'Advanced State Architecture', 'CI/CD', 'Web Performance Optimization'],
      },
    ],
  },
  howIBuild: {
    eyebrow: 'HOW I BUILD',
    heading: 'A practical approach i use in frontend engineering',
    subtext:
      'Good frontend development is about more than translating a design into code. I focus on creating interfaces that are useful for users and maintainable for developers.',
    principles: [
      {
        icon: Boxes,
        title: 'Component-driven',
        desc: 'I break interfaces into reusable components to keep the UI consistent and the codebase easier to maintain.',
      },
      {
        icon: Type,
        title: 'Type-safe',
        desc: 'I use TypeScript to make component props, application data, and API responses easier to understand and safer to work with.',
      },
      {
        icon: Smartphone,
        title: 'Responsive',
        desc: 'I build interfaces with different screen sizes in mind, from mobile layouts to larger desktop experiences.',
      },
      {
        icon: Gauge,
        title: 'Performance-focused',
        desc: 'I optimize rendering, lazy-load components, and minimize bundle size so apps stay fast as they grow.',
      },
      {
        icon: Accessibility,
        title: 'Accessible by default',
        desc: 'I follow semantic HTML and ARIA practices so interfaces work for as many users as possible.',
      },
      {
        icon: Smartphone,
        title: 'Tested with intent',
        desc: 'I write tests for critical logic and components, not for coverage numbers, to catch regressions before they reach production.',
      },
    ],
  },
  experience: {
    eyebrow: 'EXPERIENCE',
    heading: "Where I've applied what I build.",
    items: [
      {
        role: 'Frontend Developer',
        company: 'TechNova Studio',
        period: 'Jan 2023 — Present',
        responsibilities: [
          'Built and maintained responsive web applications using React and TypeScript, serving 10,000+ active users.',
          'Collaborated with designers to translate Figma prototypes into production-ready, reusable components.',
          'Integrated REST APIs and GraphQL endpoints to power dynamic, data-driven interfaces.',
          'Improved page load performance by 35% through code-splitting and lazy loading.',
        ],
        stacks:[]
      },
      {
        role: 'Frontend Developer',
        company: 'Studio Kreasi Digital',
        period: 'Jun 2021 — Dec 2022',
        note: '(Freelance)',
        responsibilities: [
          'Developed multiple client websites from scratch using React, delivering fully responsive UI across devices.',
          'Implemented authentication flows and protected routes for a multi-role dashboard application.',
        ],
        stacks:[]
      },
    ],
  },
  projects: {
    eyebrow: 'PROJECTS',
    heading: "Things I've built.",
    items: [
      {
        name: 'TaskFlow',
        desc: 'A task management app built to explore optimistic UI updates and drag-and-drop interactions.',
        stacks: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
        demoLabel: 'Live Demo',
        codeLabel: 'GitHub',
        slug:'task-flow',
        image:''
      },
      {
        name: 'WeatherNow',
        desc: 'A weather dashboard with location search, built with a focus on clean data visualization.',
        stacks: ['React', 'TypeScript', 'GraphQL'],
        image:'',
        slug:'weather-now',
        demoLabel: 'Live Demo',
        codeLabel: 'GitHub',
      },
    ],
  },
  contact: {
    name:'Tania Yunita',
    email: 'taniayunita.dev@gmail.com',
    github:'https://github.com/taniayunita-dev',
    linkedin: 'https://www.linkedin.com/in/taniayunita/',
    eyebrow: 'CONTACT',
    heading: "Let's build something together.",
    subheading: "Have a project or opportunity in mind?",
    subtext:
      "I'm currently open to frontend developer roles and freelance projects. Feel free to reach out — I usually respond within a day.",
    cta: 'Send a Message',
    contactLinks: [
    {
        label: 'Email',
        desc: 'Send me an email',
        href: `mailto:taniayunita.dev@gmail.com`,
        icon: Mail,
        external:true
    },
    {
        label: 'GitHub',
        desc: 'View my code and projects',
        href: 'https://github.com/taniayunita-dev',
        icon: Github,
        external: true,
    },
    {
        label: 'LinkedIn',
        desc: 'Connect with me professionally',
        href: 'https://www.linkedin.com/in/taniayunita/',
        icon: Linkedin,
        external: true,
    },
]
  },
  footer: {
    rights: '© 2026 Tania Yunita. All rights reserved.',
  },
  meta: {
    themeToggleLabel: 'Toggle dark mode',
    langLabel: 'Change language',
  },
};
