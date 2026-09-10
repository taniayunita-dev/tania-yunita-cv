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

export const id: Translation = {
  nav: {
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Kontak',
  },
  hero: {
    eyebrow: 'FRONTEND DEVELOPER',
    headlineParts: ['Saya membangun interface yang responsive dan production-ready dengan', 'React dan TypeScript.'],
    headline: 'Saya membangun interface yang responsive dan production-ready dengan React dan TypeScript.',
    subtext:
      'Frontend Developer dengan pengalaman 3+ tahun membangun web application yang clean, scalable, dan maintainable.',
    cta1: 'Lihat portfolio saya',
    cta2: 'Hubungi saya',
    credibilities:['3+ Tahun Pengalaman','React','TypeScript', 'Responsive UI','Integrasi API' ]

  },
  about: {
    eyebrow: 'TENTANG SAYA',
    greeting: 'Hai, saya',
    name: 'Tania',
    p1: 'Frontend Developer dengan pengalaman 3+ tahun membangun dan maintain web application menggunakan React dan TypeScript.',
    p2: 'Saya menerjemahkan UI design menjadi web interface yang responsive, membangun reusable component, dan integrate API untuk menghasilkan aplikasi yang fungsional dan maintainable.',
    eduLabel: 'PENDIDIKAN',
    degree: 'S1',
    field: 'Teknik Informatika',
    university: 'Universitas Teknologi Bandung',
    locLabel: 'LOKASI',
    location: 'Bekasi, Indonesia',
    stackTitle: 'STACK YANG SAYA GUNAKAN',
    stackCategories: {
      frontend: 'Frontend',
      styling: 'UI & Styling',
      data: 'Data & Integration',
      tools: 'Tools',
    },
  },
  skills: {
    eyebrow: 'SKILLS',
    heading: 'Bagaimana saya mendekati frontend development.',
    subtext: 'Beberapa frontend practice yang saya kuasai, sudah pernah terapkan, dan sedang saya kembangkan.',
    items: [
      {
        number: '01',
        title: 'Menguasai',
        desc: 'Area yang bisa saya terapkan dengan percaya diri dalam real-world frontend development.',
        tags: ['Component Architecture', 'Responsive UI', 'Performance', 'Accessibility'],
      },
      {
        number: '02',
        title: 'Berpengalaman',
        desc: 'Area yang sudah saya terapkan di berbagai project dan pengalaman profesional.',
        tags: ['API Integration', 'Authentication', 'Error Handling', 'State Management'],
      },
      {
        number: '03',
        title: 'Sedang Dikembangkan',
        desc: 'Area yang sedang aktif saya perdalam melalui hands-on practice.',
        tags: ['Testing', 'Advanced State Architecture', 'CI/CD', 'Web Performance Optimization'],
      },
    ],
  },
  howIBuild: {
    eyebrow: 'PENDEKATAN SAYA',
    heading: 'Pendekatan yang saya gunakan dalam frontend engineering',
    subtext:
      'Frontend development yang baik itu lebih dari sekadar menerjemahkan design menjadi code. Saya fokus membangun interface yang berguna untuk user dan maintainable untuk developer.',
    principles: [
      {
        icon:Boxes,
        title: 'Component-driven',
        desc: 'Saya memecah interface menjadi reusable component untuk menjaga UI tetap konsisten dan codebase lebih mudah di-maintain.',
      },
      {
        icon: Type,
        title: 'Type-safe',
        desc: 'Saya menggunakan TypeScript agar component props, application data, dan API response lebih mudah dipahami dan lebih aman untuk dikerjakan.',
      },
      {
        icon: Smartphone,
        title: 'Responsive',
        desc: 'Saya membangun interface dengan mempertimbangkan berbagai ukuran layar, dari mobile layout hingga desktop experience yang lebih besar.',
      },
      {
        icon: Gauge,
        title: 'Performance-focused',
        desc: 'Saya optimize rendering, lazy-load component, dan minimize bundle size supaya aplikasi tetap cepat seiring bertambah besar.',
      },
      {
        icon: Accessibility,
        title: 'Accessible by default',
        desc: 'Saya mengikuti semantic HTML dan ARIA practice supaya interface bisa digunakan oleh sebanyak mungkin user.',
      },
      {
        icon: Smartphone,
        title: 'Tested with intent',
        desc: 'Saya menulis test untuk logic dan component yang kritikal, bukan sekadar mengejar coverage number, untuk menangkap regression sebelum sampai ke production.',
      },
    ],
  },
  experience: {
    eyebrow: 'EXPERIENCE',
    heading: 'Tempat saya menerapkan apa yang saya bangun.',
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
    heading: 'Hal-hal yang sudah saya bangun.',
    items: [
      {
        name: 'TaskFlow',
        slug:'task-flow',
        image:'',
        desc: 'Task management app yang dibangun untuk explore optimistic UI update dan drag-and-drop interaction.',
        stacks: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
        demoLabel: 'Live Demo',
        codeLabel: 'GitHub',
      },
      {
        name: 'WeatherNow',
        slug:'weather-now',
        image:'',
        desc: 'Weather dashboard dengan location search, dibangun dengan fokus pada data visualization yang clean.',
        stacks: ['React', 'TypeScript', 'GraphQL'],
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
    eyebrow: 'KONTAK',
    heading: 'Yuk bangun sesuatu bersama.',
    subheading:'Ada peluang atau projek yang ingin didiskusikan?',
    subtext:
      'Saya saat ini open untuk frontend developer role dan freelance project. Feel free untuk reach out — saya biasanya respond dalam 1 hari.',
    cta: 'Kirim Pesan',
     contactLinks: [
    {
        label: 'Email',
        desc: 'Kirim email',
        href: `mailto:taniayunita.dev@gmail.com`,
        icon: Mail,
        external:true
    },
    {
        label: 'GitHub',
        desc: 'Lihat kode dan projek saya',
        href: 'https://github.com/taniayunita-dev',
        icon: Github,
        external: true,
    },
    {
        label: 'LinkedIn',
        desc: 'Mari terhubung secara profesional',
        href: 'https://www.linkedin.com/in/taniayunita/',
        icon: Linkedin,
        external: true,
    },
]
  },
  footer: {
    rights: '© 2026 Tania Yunita. Seluruh hak cipta dilindungi.',
  },
  meta: {
    themeToggleLabel: 'Ubah mode gelap',
    langLabel: 'Ubah bahasa',
  },
};
