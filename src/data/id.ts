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
  Zap,
  ShieldCheck
} from 'lucide-react';
import LogoPrinterous from '@/assets/images/printerous-logo.jpg'
import LogoBNI from '@/assets/images/bank-bni-logo.png'
import LogoDGR from '@/assets/images/dragatron-logo.webp'
import LogoWGS from '@/assets/images/wgs-logo.svg'

import Project1 from '@/assets/images/e-learning.png'
import Project2 from '@/assets/images/sidasafe.png'
import Project3 from '@/assets/images/food-ordering.png'

export const id: Translation = {
  nav: {
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Proyek',
    skills: 'Keahlian',
    contact: 'Kontak',
  },
hero: {
    eyebrow: 'FRONTEND DEVELOPER',
    headlineParts: ['Saya membangun antarmuka responsif dan siap pakai (production-ready) dengan', 'React dan TypeScript.'],
    headline: "Saya memanfaatkan AI untuk membangun dengan cepat, serta fondasi yang kuat untuk membangun dengan tepat.",
    subtext:
      'Frontend Developer dengan pengalaman 3+ tahun dalam membangun aplikasi web yang mudah dirawat dan menghadirkan pengalaman pengguna yang andal menggunakan React dan TypeScript.',
    cta1: 'Lihat karya saya',
    cta2: 'Hubungi saya',
    credibilities: ['Pengalaman 3+ Tahun', 'React', 'TypeScript', 'API Integration']
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
    eyebrow: 'KEAHLIAN',
    heading: 'Tech Stack & Kapabilitas Saya.',
    subtext:
      "Gambaran terstruktur tentang keahlian utama, pengalaman praktis, dan pengembangan teknis yang sedang saya jalani.",
    items: [
      {
        number: '01',
        title: 'Kuasai dengan Baik',
        desc: 'Bidang yang dapat saya terapkan dengan percaya diri dalam pengembangan frontend dunia nyata.',
        tags: ['Javascript', 'Typescript', 'ReactJS', 'NextJS', 'HTML5', 'CSS3', 'Tailwindcss', 'Bootstrap', 'git', 'Github', 'Gitlab'],
      },
      {
        number: '02',
        title: 'Berpengalaman',
        desc: 'Bidang yang telah saya terapkan di berbagai proyek dan pengalaman profesional.',
        tags: ['API Integration', 'Rest API', 'PostgreSQL', 'Authentication', 'Error Handling', 'State Management', 'Redux', 'Context', 'Design System', 'Jest'],
      },
      {
        number: '03',
        title: 'Sedang Didalami',
        desc: 'Bidang yang sedang aktif saya perkuat melalui praktik langsung.',
        tags: ['Testing', 'Advanced State Architecture', 'Web Performance Optimization'],
      },
    ],
},
  howIBuild: {
    eyebrow: 'CARA SAYA MEMBANGUN',
    heading: 'Pendekatan praktis yang saya terapkan dalam frontend engineering',
    subtext:
      'Pengembangan frontend yang baik lebih dari sekadar mengubah desain menjadi kode. Saya berfokus untuk menciptakan antarmuka yang berguna bagi pengguna, mudah dirawat oleh pengembang, dan siap untuk berkembang (built for scale).',
    principles: [
      {
        icon: Boxes,
        title: 'Component-driven',
        desc: 'Saya memecah antarmuka menjadi komponen yang dapat digunakan kembali (reusable) agar UI tetap konsisten dan codebase lebih mudah dirawat.',
      },
      {
        icon: Type,
        title: 'Type-safe',
        desc: 'Saya menggunakan TypeScript untuk membuat prop komponen, data aplikasi, dan respon API lebih mudah dipahami serta lebih aman saat dikerjakan.',
      },
      {
        icon: Smartphone,
        title: 'Responsif',
        desc: 'Saya membangun antarmuka dengan mempertimbangkan berbagai ukuran layar, mulai dari tata letak seluler hingga tampilan desktop yang lebih luas.',
      },
      {
        icon: Zap,
        title: 'AI-Accelerated Workflow',
        desc: 'Saya memanfaatkan alat AI modern untuk mempercepat penulisan boilerplate dan koding rutin, sehingga punya lebih banyak waktu untuk menyempurnakan arsitektur kompleks, logika, dan UX.',
      },
      {
        icon: Gauge,
        title: 'Berfokus pada Performa',
        desc: 'Saya mengoptimalkan proses rendering, menerapkan lazy-loading pada komponen, dan meminimalkan ukuran bundle agar aplikasi tetap cepat seiring pertumbuhannya.',
      },
      {
        icon: Accessibility,
        title: 'Aksesibel secara Default (A11y)',
        desc: 'Saya menerapkan HTML semantik, standar ARIA, dan panduan WCAG untuk memastikan aplikasi web bersifat inklusif dan dapat diakses oleh siapa saja.',
      },
      {
        icon: ShieldCheck,
        title: 'Tested with Intent',
        desc: 'Saya menguji komponen dan logika krusial menggunakan alat seperti Jest dan React Testing Library untuk mendeteksi potensi bug lebih awal.',
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
        period: "Juli 2025 – september 2026",
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
    eyebrow: 'PROYEK',
    heading: "Proyek Pilihan",
    subheading:"Beberapa proyek yang pernah saya bangun dan kontribusikan, menampilkan pengembangan frontend praktis dan antarmuka yang berfokus pada pengguna.",
    items:[
       {
    id: '1',
    date:'2023',

    slug: 'fe-online-learning-platform',
    title: 'FE Online Learning Platform',
    type: 'professional',
    role: 'Fullstack Developer',
    description:
      'Platform pembelajaran online tempat penyedia materi dapat menyajikan konten pelajaran berbentuk video atau PDF. Platform ini juga menyediakan kuis yang wajib dikerjakan oleh pengguna, serta fitur ulasan/testimoni untuk kursus yang telah dibeli.',
    features: [
      'Slicing UI Design',
      'API Integration',
      'Push code ke repositori GitLab',
    ],
    stacks: ['React JS', 'Laravel', 'MySQL', 'Axios', 'Redux', 'Bootstrap', 'Javascript'],
    image: Project1,
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '2',
    date:'2023',

    slug: 'cms-online-learning-platform',
    title: 'CMS Online Learning Platform',
    type: 'professional',
    role: 'Frontend & Backend Developer',
    description:
      'CMS berbasis web yang terhubung dengan proyek FE Online Learning Platform. Melalui platform ini, admin/pengguna dapat mengelola data seperti Mentor, Konten Kursus, Materi Pelajaran, Banner, Kategori Kursus, serta menghasilkan laporan daftar kursus yang dibeli oleh pengguna.',
    features: [
      'Membuat UI',
      'Membuat fungsi CRUD untuk data yang dibutuhkan',
      'Push code ke repositori GitLab',
      'Bekerja sama dengan developer lain untuk menyelesaikan tugas tepat waktu',
    ],
    stacks: ['Laravel', 'MySQL', 'Bootstrap'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '3',
    date:'2023',

    slug: 'iot-for-close-and-open-door',
    title: 'IoT for Close and Open Door',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'Platform situs web yang dikonversi menjadi Aplikasi Desktop menggunakan IoT untuk membuka pintu otomatis. Dibuat untuk perusahaan gym tanpa staf/karyawan, di mana setiap pelanggan yang ingin masuk harus memasukkan kode unik ke PC AIO. Jika kode benar, pintu akan terbuka secara otomatis.',
    features: [
      'Slicing UI Design ke Website',
      'API Integration',
      'Push ke repositori GitHub',
      'Bekerja sama dengan developer lain untuk menyelesaikan tugas tepat waktu, saling membantu dan berkolaborasi saat tugas selesai',
    ],
    stacks: ['React JS', 'Axios', 'Redux', 'Bootstrap', 'Electron'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '4',
    date:'2022',

    slug: 'dashboard-website',
    title: 'Dashboard Website',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'Platform web untuk membantu operasional jual-beli mobil pada bisnis showroom. Aplikasi ini digunakan untuk menyimpan dan mengelola data seperti daftar showroom, inventaris mobil tiap showroom, transaksi, dan informasi produk.',
    features: [
      'Slicing UI Design ke Website',
      'API Integration',
      'Mendiskusikan library yang akan digunakan',
      'Push ke repositori GitHub',
      'Bekerja sama dengan developer lain untuk menyelesaikan tugas tepat waktu, serta saling membantu dalam tim',
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
    date:'2022',

    slug: 'content-management-system',
    title: 'Content Management System',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'Aplikasi web untuk membantu Admin di perusahaan teknologi yang memfasilitasi transaksi pembayaran antara penjual dan pembeli. Sistem ini membantu Admin memantau informasi transaksi, status pembayaran, dan persetujuan penarikan dana (withdraw) pengguna.',
    features: [
      'Slicing UI Design ke Website',
      'API Integration',
      'Mendiskusikan library yang akan digunakan',
      'Push ke repositori GitHub',
    ],
    stacks: ['React JS', 'Axios', 'Ant Design'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '6',
    date:'2021',

    slug: 'queue-management-system',
    title: 'Queue Management System',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'Proyek akhir untuk Front End Bootcamp Digital Talent Kominfo (beasiswa hasil kolaborasi dengan beberapa bank terbesar di Indonesia). Dibuat bersama 2 rekan tim, platform ini membantu nasabah bank memesan tiket antrean layanan perbankan secara online.',
    features: [
      'Mengatur pembagian tugas pengembangan dalam tim dan mendiskusikan fitur yang akan dibangun',
      'Slicing UI Design ke Website',
      'Mendiskusikan library yang akan digunakan',
      'Memastikan komunikasi tim berjalan efektif',
      'Push ke repositori Git',
      'Bekerja sama dengan developer lain untuk menyelesaikan tugas tepat waktu',
      'Deploy website ke publik menggunakan Vercel',
    ],
    stacks: ['React JS', 'Axios', 'Bootstrap', 'PWA'],
    image: '',
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '7',
    date:'2025',

    slug: 'restaurant-shop-website',
    title: 'Restaurant Shop Website',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'Aplikasi web untuk membantu pemilik restoran menjual produk makanan secara online maupun pemesanan langsung di tempat. Sistem ini memberikan informasi transaksi, estimasi waktu memasak, dan nomor meja pelanggan.',
    features: [
      'Slicing UI Design ke Website',
      'API Integration',
      'Mendiskusikan library yang akan digunakan',
      'Push ke repositori GitHub',
      'Bekerja sama dengan developer lain untuk menyelesaikan tugas tepat waktu dan saling membantu dalam tim',
    ],
    stacks: ['React JS', 'Axios', 'Ant Design', 'Javascript', 'RedwoodJS'],
    image: Project3,
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '8',
    date:'2025',

    slug: 'landing-page-sidasafe',
    title: 'Landing Page SidaSafe',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'Sebuah landing page responsif untuk SidaSafe, perusahaan transportasi. Situs web ini dirancang untuk menampilkan layanan perusahaan, keunggulan armada, fitur utama, dan profil korporat untuk memberikan pengalaman yang informatif bagi calon klien.',
    features: [
      'Desain Web Responsif',
      'Slicing UI Design',
      'Hero Section Interaktif & Tampilan Layanan',
      'Integrasi Formulir Kontak & Pertanyaan',
    ],
    stacks: ['HTML5', 'CSS3', 'Javascript'],
    image: Project2,
    liveUrl: '',
    caseStudyUrl: '',
  },
  {
    id: '9',
    date:'2026',
    slug: 'recipe-meal-planner-app',
    title: 'Aplikasi Resep & Meal Planner',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'Aplikasi web personal yang dirancang untuk membantu pengguna menemukan resep berdasarkan bahan makanan yang ada di rumah maupun nama resep. Dilengkapi fitur untuk menyimpan resep favorit dan menyusun jadwal makan mingguan (meal plan) secara praktis.',
    features: [
      'Pencarian Resep Berdasarkan Bahan & Nama',
      'Manajemen Resep Favorit / Simpan Resep',
      'Perencana Jadwal Makan (Meal Planner) Interaktif',
      'UI Responsif & Manajemen State Interaktif',
    ],
    stacks: ['React JS', 'Tailwind CSS', 'TypeScript', 'Context API', 'Axios'],
    image: '',
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
