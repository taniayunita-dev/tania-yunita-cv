import type { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    id: 'food-ordering-platform',
    title: 'Food Ordering Platform',
    shortDescription:
      'A food ordering platform for restaurant discovery, menu browsing, cart management, checkout, and order tracking.',

    description:
      'A web-based food ordering platform that allows users to discover restaurants, explore menus, manage their cart, complete checkout, and review their order history.',

    role: 'Frontend Developer',

    technologies: ['React', 'RedwoodJS', 'GraphQL', 'AWS'],

    features: [
      'Restaurant listing',
      'Restaurant and food detail',
      'Search',
      'Filtering',
      'Cart',
      'Checkout',
      'Payment',
      'Order history',
      'Authentication',
      'Admin dashboard',
    ],

    caseStudyUrl: '/projects/food-ordering-platform',
  },

  {
    id: 'recipe-recommendation',
    title: 'Recipe Recommendation App',

    shortDescription:
      'A recipe discovery experience that recommends recipes based on ingredients available to the user.',

    description:
      'A responsive recipe application designed to help users discover recipes based on ingredients they already have.',

    role: 'Frontend Developer',

    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],

    features: [
      'Ingredient input',
      'Ingredient chips',
      'Recipe search',
      'Recipe cards',
      'Recipe detail',
      'Filtering',
      'Loading states',
      'Error states',
      'Empty states',
    ],

    caseStudyUrl: '/projects/recipe-recommendation',
  },

  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',

    shortDescription:
      'A responsive dashboard demonstrating data visualization, tables, filtering, pagination, and complex UI states.',

    description:
      'A data-driven admin dashboard designed to demonstrate reusable UI components, data presentation, filtering, pagination, and responsive layouts.',

    role: 'Frontend Developer',

    technologies: ['React', 'TypeScript', 'Tailwind CSS'],

    features: [
      'Dashboard statistics',
      'Data tables',
      'Search',
      'Filtering',
      'Pagination',
      'Charts',
      'Loading states',
      'Empty states',
      'Error states',
    ],

    caseStudyUrl: '/projects/admin-dashboard',
  },
];