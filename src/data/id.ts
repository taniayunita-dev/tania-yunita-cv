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
    eyebrow: 'PENGALAMAN',
    heading: "Tempat Saya Pernah Bekerja",
    desc: 'Perjalanan profesional saya di bidang frontend, membangun aplikasi web dan berkolaborasi dengan tim lintas fungsi.',
    items: [
       {
        id: 1,
        logo: LogoPrinterous,
        role: "Frontend Developer",
        description:
          "Mengerjakan aplikasi web berbasis produk dan berkontribusi dalam implementasi UI serta perbaikan bug.",
        company: "PT Printerous Global",
        period: "Desember 2021 – Januari 2022",
        note: "Freelance · Remote",
        responsibilities: [
          "Mengubah desain UI dari Figma menjadi tampilan web (slicing).",
          "Memperbaiki bug frontend dan menyempurnakan tampilan yang sudah ada.",
          "Mengintegrasikan fitur frontend dengan API.",
          "Berkolaborasi dengan developer lain untuk menyelesaikan tugas yang diberikan.",
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
        id: 2,
        logo: LogoBNI,
        role: "Frontend Developer",
        description:
          "Berkontribusi dalam pengembangan aplikasi website TAPERA untuk klien BNI.",
        company: "PT Bank Negara Indonesia, Tbk",
        period: "Februari 2022 – Agustus 2022",
        note: "Magang · Remote",
        responsibilities: [
          "Mengembangkan fitur frontend untuk aplikasi website TAPERA.",
          "Mengimplementasikan UI sesuai kebutuhan proyek.",
          "Bekerja dengan arsitektur Single SPA Micro Frontend.",
          "Mengintegrasikan fitur frontend dengan API.",
          "Berkolaborasi dengan developer lain selama proses pengembangan.",
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
        id: 3,
        logo: LogoWGS,
        role: "Frontend Developer",
        description:
          "Bekerja sebagai Frontend Developer membangun dan memelihara aplikasi web untuk klien internal maupun eksternal.",
        company: "PT Walden Global Services (WGS)",
        period: "April 2022 – September 2023",
        note: 'Fulltime · Hybrid',
        responsibilities: [
          "Menerjemahkan desain UI dari Figma menjadi tampilan web yang responsif.",
          "Membangun komponen React yang dapat digunakan kembali dan mengimplementasikan fitur frontend sesuai kebutuhan proyek.",
          "Mengintegrasikan aplikasi frontend dengan REST API.",
          "Berkolaborasi dengan Backend Developer, UI/UX Designer, QA, dan Project Manager.",
          "Memperbaiki bug dan memelihara aplikasi di lingkungan Development, Staging, dan Production.",
          "Menggunakan Git dan GitLab untuk version control dan kolaborasi tim.",
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
        id: 4,
        logo: LogoDGR,
        role: "Frontend Developer",
        note: "Fulltime · Remote",
        description:
          "Bekerja sebagai Frontend Developer di sebuah startup, berkontribusi pada platform pemesanan makanan beserta dashboard administratifnya.",
        company: "Dragatron",
        period: "September 2023 – Juli 2025",
        responsibilities: [
          "Menerjemahkan desain Figma menjadi tampilan web yang responsif dan fungsional.",
          "Mengimplementasikan logika frontend untuk fitur restoran, makanan, pencarian, filter, keranjang, checkout, pembayaran, dan riwayat pesanan.",
          "Mengintegrasikan aplikasi frontend dengan GraphQL API.",
          "Mengimplementasikan validasi form dan alur interaksi pengguna.",
          "Bekerja dengan autentikasi dan protected routes menggunakan sesi berbasis token.",
          "Berkolaborasi dengan Backend Developer dan UI/UX Designer untuk menghadirkan fitur frontend.",
          "Berkontribusi dalam pengembangan dashboard administratif.",
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
        id: 5,
        logo: 'CB',
        role: "Career Break",
        description:
          "Jeda karier yang direncanakan untuk fokus pada tanggung jawab pribadi, sambil terus menjaga dan mengembangkan kemampuan frontend engineering.",
        company: "Career Break",
        period: "Juli 2025 – Juli 2026",
        note:
          "Terus belajar dan membangun proyek frontend secara mandiri untuk tetap mengikuti praktik pengembangan frontend modern.",
        responsibilities: [
          "Mengikuti Perkembangan AI dan penggunaannya dalam pengembangan frontend",
          "Menjaga dan memperkuat kemampuan frontend development melalui pembelajaran mandiri.",
          "Membangun dan menyempurnakan proyek frontend pribadi menggunakan React dan TypeScript.",
          "Berlatih implementasi UI responsif dan arsitektur komponen yang dapat digunakan kembali.",
          "Mengerjakan integrasi API, autentikasi, state management, dan struktur aplikasi frontend.",
          "Terus mempelajari praktik dan tools pengembangan frontend modern.",
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
