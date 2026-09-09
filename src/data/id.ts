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
        role: 'Frontend Developer',
        company: 'TechNova Studio',
        period: 'Jan 2023 — Sekarang',
stacks:[],
        responsibilities: [
          'Membangun dan maintain web application yang responsive menggunakan React dan TypeScript, melayani 10.000+ active user.',
          'Berkolaborasi dengan designer untuk menerjemahkan Figma prototype menjadi reusable component yang production-ready.',
          'Integrate REST API dan GraphQL endpoint untuk menghasilkan interface yang dynamic dan data-driven.',
          'Meningkatkan performa page load sebesar 35% melalui code-splitting dan lazy loading.',
        ],
      },
      {
        role: 'Frontend Developer',
        company: 'Studio Kreasi Digital',
        period: 'Jun 2021 — Des 2022',
        note: '(Freelance)',
        stacks:[],
        responsibilities: [
          'Mengembangkan beberapa website client dari nol menggunakan React, menghasilkan UI yang fully responsive di berbagai device.',
          'Implementasi authentication flow dan protected route untuk dashboard application multi-role.',
        ],
      },
    ],
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
