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
import LogoPrinterous from '@/assets/images/printerous-logo.jpg'
import LogoBNI from '@/assets/images/bank-bni-logo.png'
import LogoDGR from '@/assets/images/dragatron-logo.webp'
import LogoWGS from '@/assets/images/wgs-logo.svg'

import Project1 from '@/assets/images/e-learning.png'
import Project2 from '@/assets/images/sidasafe.png'
import Project3 from '@/assets/images/food-ordering.png'


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
    headline: "I use AI to move fast. The architecture, quality, and experience? That's on me.",
    subtext:
      'Frontend Developer with 3+ years of experience building maintainable web applications with React and TypeScript.',
    cta1: 'View my work',
    cta2: 'Contact me',
    credibilities:['3+ Years Experience','React','TypeScript','API Integration' ]
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
        tags: ['React & Typescript','Component Architecture', 'Responsive UI', 'Performance', 'Accessibility'],
      },
      {
        number: '02',
        title: 'Experienced',
        desc: 'Areas I have applied across projects and professional experience.',
        tags: ['API Integration', 'Authentication', 'Error Handling', 'State Management', 'Design System'],
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
    heading: "Where I've worked",
    desc:'My professional journey in frontend development, where I built web applications and collaborated with cross-functional teams.',
    items: [
       {
        id:1,
        logo:LogoPrinterous,
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
          logo:LogoBNI,
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
    logo:LogoWGS,
    role: "Frontend Developer",
    description:
      "Worked as a Frontend Developer building and maintaining web applications for internal and external clients.",
    company: "PT Walden Global Services (WGS)",
    period: "April 2022 – September 2023",
    note: 'Fulltime · Hybrid',
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
    logo:LogoDGR,
    role: "Frontend Developer",
    note: "Fulltime · Remote",
    description:
      "Worked as a Frontend Developer at a startup, contributing to a food ordering platform and its administrative dashboard.",
    company: "Dragatron",
    period: "September 2023 – July 2025",
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
    logo:'CB',
    role: "Career Break",
    description:
      "A planned career break focused on personal responsibilities while continuing to maintain and develop frontend engineering skills.",
    company: "Career Break",
    period: "July 2025 – July 2026",
    note:
      "Continued learning and building frontend projects independently to stay connected with modern frontend development practices.",
    responsibilities: [
      "Keeping up with AI developments and its use in front-end development",
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
    items:[
       {
    id: '1',
    slug: 'fe-online-learning-platform',
    title: 'FE Online Learning Platform',
    type: 'professional',
    role: 'Fullstack Developer',
    description:
      'This website provides an online learning platform, where providers can present lesson content in video or pdf form. This platform also provides quizzes that must be done by the user, and users can also provide testimonials on the courses they have purchased.',
    features: [
      'Slicing UI Design',
      'API Integration',
      'Push code to gitlab repository',
    ],
    stacks: ['React JS', 'Laravel', 'MySQL', 'Axios', 'Redux', 'Bootstrap', 'Javascript'],
    image: Project1,
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '2',
    slug: 'cms-online-learning-platform',
    title: 'CMS Online Learning Platform',
    type: 'professional',
    role: 'Frontend & Backend Developer',
    description:
      'A web based CMS related to the FE Online Learning Platform project. In this platform, users can create data such as Mentor, Course Content, Lesson Content, Banner Content, Category of The Course, and generate reports such as the course list that has been purchased by users.',
    features: [
      'Create UI',
      'Create CRUD function for the required data',
      'Push code to gitlab repository',
      'Work in tandem with other developers to resolve task on time',
    ],
    stacks: ['Laravel', 'MySQL', 'Bootstrap'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '3',
    slug: 'iot-for-close-and-open-door',
    title: 'IoT for Close and Open Door',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'A website platform converted to a Desktop Application, using IoT for opening a door, built for a Gym Company where the gym has no employee. Every customer entering the room has to input the code number into a PC AIO, and if the code is correct, the door automatically opens and the customer can enter the room.',
    features: [
      'Slicing UI Design to Website',
      'API integration',
      'Push to Git Github repository',
      'Work in tandem with other developers to resolve task on time or ask for help or offering help to others if my task have done',
    ],
    stacks: ['React JS', 'Axios', 'Redux', 'Bootstrap', 'Electron'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '4',
    slug: 'dashboard-website',
    title: 'Dashboard Website',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'A website platform to help a showroom business sell and buyback cars. This web app is used to store and create data such as showroom list, inventory car product for each showroom, transaction, and product information.',
    features: [
      'Slicing UI Design to Website',
      'API integration',
      'Discussing a library to be used',
      'Push to Git Github repository',
      'Work in tandem with other developers to resolve task on time or ask for help or offering help to others if my task have done',
    ],
    stacks: [
      'React JS',
      'Axios',
      'Redux',
      'Material UI',
      'Typescript',
      'NX Monorepo',
    ],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '5',
    slug: 'content-management-system',
    title: 'Content Management System',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'A website to help an Admin in a technology company that helps sellers and buyers make payment transactions. This website helps the Admin get information about transactions, payment status, and approval for users who will withdraw their money from the app.',
    features: [
      'Slicing UI Design to Website',
      'API integration',
      'Discussing a library to be used',
      'Push to Git Github repository',
    ],
    stacks: ['React JS', 'Axios', 'Ant Design'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '6',
    slug: 'queue-management-system',
    title: 'Queue Management System',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'Final project for the Front End Bootcamp Digital Talent Kominfo, a scholarship program in collaboration with some of the biggest banks in Indonesia. Built with 2 other friends, this website helps banking customers order queue tickets to get banking services.',
    features: [
      'Arrange dividing task for development to my team and discuss about what the feature should we build',
      'Slicing UI Design to Website',
      'Discussing a library to be used',
      'Make sure all the communication is effective',
      'Push to Git repository',
      'Work in tandem with other developers to resolve task on time',
      'Deploy website to public using Vercel',
    ],
    stacks: ['React JS', 'Axios', 'Bootstrap', 'PWA'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '7',
    slug: 'restaurant-shop-website',
    title: 'Restaurant Shop Website',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'A website to help a seller sell their food products online, where customers can also order directly in the restaurant. This app gives information for transactions, cooking time, and the customer table.',
    features: [
      'Slicing UI Design to Website',
      'API integration',
      'Discussing a library to be used',
      'Push to Git Github repository',
      'Work in tandem with other developers to resolve task on time or ask for help or offering help to others if my task have done',
    ],
    stacks: ['React JS', 'Axios', 'Ant Design', 'Javascript', 'RedwoodJS'],
    image: Project3,
    liveUrl: '',
    caseStudyUrl: '',
  },
    ]
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
