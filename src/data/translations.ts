import type { Language } from "@/context/language/LanguageContext";

export const translations = {
  en: {
    navigation: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },

    hero: {
      role: 'Frontend Developer',
      headline:
        'Building thoughtful, responsive web experiences with React and TypeScript.',
      description:
        'Frontend Developer with 3+ years of professional experience building responsive web applications and user-focused interfaces.',
      viewWork: 'View my work',
      contact: 'Contact me',
      experience: '3+ Years Experience',
      react: 'React',
      typescript: 'TypeScript',
      responsive: 'Responsive UI',
    },

    about: {
      eyebrow: 'About Me',
      title: 'Hi, I’m Tania.',
      description:
        'Frontend Developer with 3+ years of experience building and maintaining web applications using React and TypeScript.',
      description2:
        'I translate UI designs into responsive web interfaces, build reusable components, and integrate APIs to deliver functional and maintainable applications.',
      education: 'Education',
      location: 'Location',
      stack: 'Stack I Work With',
      frontend: 'Frontend',
      uiStyling: 'UI & Styling',
      dataIntegration: 'Data & Integration',
      tools: 'Tools',
    },

    experience: {
      eyebrow: 'Professional Experience',
      title: 'My professional experience.',
      description:
        'Over the past 3+ years, I’ve worked on web applications across different products and teams.',
    },

    projects: {
      eyebrow: 'Selected Projects',
      title: 'Real-world work & selected case studies.',
      description:
        'A selection of professional experience and self-directed projects that showcase how I approach frontend development.',
      professional: 'Professional Experience',
      personal: 'Personal Case Study',
      viewCaseStudy: 'View case study',
    },

    howIBuild: {
      eyebrow: 'How I Build',
      title: 'How I approach frontend development.',
      description:
        'A selection of frontend practices I’m confident with, experienced in, and currently developing.',

      strong: 'Strong',
      strongDescription:
        'Areas I can confidently apply in real-world frontend development.',

      experienced: 'Experienced',
      experiencedDescription:
        'Areas I have applied across projects and professional experience.',

      developing: 'Currently Developing',
      developingDescription:
        'Areas I am actively strengthening through hands-on practice.',
    },

    language: {
      switchTo: 'Switch language',
    },
  },

  id: {
    navigation: {
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak',
    },

    hero: {
      role: 'Frontend Developer',
      headline:
        'Membangun pengalaman web yang responsif dan thoughtful dengan React dan TypeScript.',
      description:
        'Frontend Developer dengan pengalaman profesional lebih dari 3 tahun dalam membangun aplikasi web responsif dan antarmuka yang berfokus pada pengguna.',
      viewWork: 'Lihat karya saya',
      contact: 'Hubungi saya',
      experience: '3+ Tahun Pengalaman',
      react: 'React',
      typescript: 'TypeScript',
      responsive: 'Responsive UI',
    },

    about: {
      eyebrow: 'Tentang Saya',
      title: 'Hi, saya Tania.',
      description:
        'Frontend Developer dengan pengalaman lebih dari 3 tahun dalam membangun dan mengembangkan aplikasi web menggunakan React dan TypeScript.',
      description2:
        'Saya menerjemahkan desain UI menjadi antarmuka web yang responsif, membangun komponen yang reusable, dan mengintegrasikan API untuk menghasilkan aplikasi yang fungsional dan mudah dipelihara.',
      education: 'Pendidikan',
      location: 'Lokasi',
      stack: 'Stack yang Saya Gunakan',
      frontend: 'Frontend',
      uiStyling: 'UI & Styling',
      dataIntegration: 'Data & Integration',
      tools: 'Tools',
    },

    experience: {
      eyebrow: 'Pengalaman Profesional',
      title: 'Pengalaman profesional saya.',
      description:
        'Selama lebih dari 3 tahun, saya telah bekerja pada aplikasi web untuk berbagai produk dan tim.',
    },

    projects: {
      eyebrow: 'Proyek Pilihan',
      title: 'Proyek nyata & selected case studies.',
      description:
        'Kumpulan pengalaman profesional dan proyek mandiri yang menunjukkan bagaimana saya membangun aplikasi frontend.',
      professional: 'Pengalaman Profesional',
      personal: 'Personal Case Study',
      viewCaseStudy: 'Lihat case study',
    },

    howIBuild: {
      eyebrow: 'How I Build',
      title: 'Bagaimana saya membangun aplikasi frontend.',
      description:
        'Beberapa praktik frontend yang saya kuasai, berpengalaman dalam penerapannya, dan sedang saya kembangkan.',

      strong: 'Strong',
      strongDescription:
        'Area yang dapat saya terapkan dengan percaya diri dalam pengembangan frontend di dunia nyata.',

      experienced: 'Experienced',
      experiencedDescription:
        'Area yang telah saya terapkan dalam berbagai proyek dan pengalaman profesional.',

      developing: 'Currently Developing',
      developingDescription:
        'Area yang sedang saya kembangkan melalui praktik dan proyek secara langsung.',
    },

    language: {
      switchTo: 'Ganti bahasa',
    },
  },
} as const;

export function getTranslations(language: Language) {
  return translations[language];
}