import type { Experience } from '../types/experience.types';

export const experiences: Experience[] = [
  {
    id: 'dragatron',
    company: 'Dragatron',
    role: 'Frontend Developer',
    duration: '2024 — 2025',
    description:
      'Worked on a food ordering platform focused on restaurant discovery, menu browsing, ordering, and administrative workflows.',
    technologies: ['React', 'RedwoodJS', 'GraphQL', 'AWS'],
    responsibilities: [
      'Developed responsive interfaces for the food ordering platform.',
      'Built features across restaurant discovery, menu browsing, cart, checkout, and order history.',
      'Implemented search and filtering experiences.',
      'Worked with GraphQL for frontend data integration.',
      'Contributed to authentication and admin dashboard features.',
    ],
  },

  {
    id: 'wgs',
    company: 'PT WGS',
    role: 'Frontend Developer',
    duration: '2022 — 2024',
    description:
      'Worked as a frontend developer building and maintaining web applications and administrative interfaces.',
    technologies: ['React'],
    responsibilities: [
      'Developed responsive web interfaces using React.',
      'Worked in a small frontend development team.',
      'Built reusable frontend components.',
      'Integrated frontend interfaces with application data and APIs.',
      'Maintained and improved existing frontend features.',
    ],
  },
];