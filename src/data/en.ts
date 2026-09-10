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
        id:1,
    role: "Frontend Developer",
    description:
      "Worked on a web-based product application and contributed to UI implementation and bug fixing.",
    company: "PT Printerous Global",
    period: "December 2021 – January 2022",
    note: "Freelance · Remote",
    responsibilities: [
      "Sliced UI designs from Figma into web interfaces.",
      "Fixed frontend bugs and improved existing interfaces.",
      "Integrated frontend features with APIs.",
      "Collaborated with developers to complete assigned tasks.",
    ],
    stacks: [
      "ReactJS",
      "Axios",
      "Bootstrap",
      "Git",
      "GitLab",
    ],
  },
        {
          id:2,
    role: "Frontend Developer",
    description:
      "Contributed to the development of a TAPERA website application for BNI's client.",
    company: "PT Bank Negara Indonesia, Tbk",
    period: "February 2022 – August 2022",
    note: "Internship · Remote",
    responsibilities: [
      "Developed frontend features for the TAPERA website application.",
      "Implemented UI based on project requirements.",
      "Worked with a Single SPA Micro Frontend architecture.",
      "Integrated frontend features with APIs.",
      "Collaborated with other developers throughout the development process.",
    ],
    stacks: [
      "Single SPA Micro Frontend",
      "ReactJS",
      "Axios",
      "Ant Design",
      "Git",
      "GitLab",
    ],
  },

  {
    id:3,
    role: "Frontend Developer",
    description:
      "Worked as a Frontend Developer building and maintaining web applications for internal and external clients.",
    company: "PT Walden Global Services (WGS)",
    period: "December 2021 – 2024",
    responsibilities: [
      "Translated UI designs from Figma into responsive web interfaces.",
      "Built reusable React components and implemented frontend features based on project requirements.",
      "Integrated frontend applications with REST APIs.",
      "Collaborated with Backend Developers, UI/UX Designers, QA, and Project Managers.",
      "Fixed bugs and maintained applications across Development, Staging, and Production environments.",
      "Used Git and GitLab for version control and team collaboration.",
    ],
    stacks: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Axios",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "REST API",
      "Git",
      "GitLab",
      "Vercel",
    ],
  },

  {
    id:4,
    role: "Frontend Developer",
    description:
      "Worked as a Frontend Developer at a startup, contributing to a food ordering platform and its administrative dashboard.",
    company: "Dragatron",
    period: "2024 – 2025",
    responsibilities: [
      "Translated Figma designs into responsive and functional web interfaces.",
      "Implemented frontend logic for restaurant, food, search, filter, cart, checkout, payment, and order history features.",
      "Integrated frontend applications with GraphQL APIs.",
      "Implemented form validation and user interaction flows.",
      "Worked with authentication and protected routes using token-based sessions.",
      "Collaborated with Backend Developers and UI/UX Designers to deliver frontend features.",
      "Contributed to the development of the administrative dashboard.",
    ],
    stacks: [
      "ReactJS",
      "TypeScript",
      "RedwoodJS",
      "GraphQL",
      "AWS",
      "REST API",
      "Local Storage",
      "Git",
    ],
  },

  {
    id:5,
    role: "Career Break",
    description:
      "A planned career break focused on personal responsibilities while continuing to maintain and develop frontend engineering skills.",
    company: "Career Break",
    period: "July 2025 – July 2026",
    note:
      "Continued learning and building frontend projects independently to stay connected with modern frontend development practices.",
    responsibilities: [
      "Maintained and strengthened frontend development skills through independent learning.",
      "Built and refined personal frontend projects using React and TypeScript.",
      "Practiced responsive UI implementation and reusable component architecture.",
      "Worked on API integration, authentication, state management, and frontend application structure.",
      "Continued learning modern frontend development practices and tools.",
    ],
    stacks: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "REST API",
      "Git",
      "Vite",
    ],
  },
]
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
