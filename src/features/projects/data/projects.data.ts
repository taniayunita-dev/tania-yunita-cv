import type { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    id:'fop1',
    slug: 'food-ordering-platform',
    title: 'Food Ordering Platform',
    type: 'professional',
    role: 'Frontend Developer',
    description:
      'A food ordering platform built as part of my role at Dragatron, covering customer-facing features and an admin dashboard.',
    features: [
      'Homepage',
      'Restaurant listing',
      'Food detail',
      'Search and filtering',
      'Cart and checkout',
      'Order history',
      'Payment',
      'Admin dashboard',
    ],
    technologies: ['React', 'RedwoodJS', 'GraphQL', 'AWS'],
    image: '/images/projects/food-ordering-platform.webp',
    caseStudyUrl: '/projects/food-ordering-platform',
  },

  {
    id:'fop2',
    slug: 'recipe-recommendation-app',
    title: 'Recipe Recommendation App',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'A self-directed project focused on helping users discover recipes based on ingredients they already have.',
    features: [
      'Ingredient-based search',
      'Recipe recommendations',
      'Search and filtering',
      'Responsive recipe interface',
    ],
    technologies: [
      'React',
      'TypeScript',
      'REST API',
      'Tailwind CSS',
    ],
    image: '/images/projects/recipe-recommendation.webp',
    caseStudyUrl: '/projects/recipe-recommendation-app',
  },

  {
    id:'fop3',
    slug: 'admin-dashboard',
    title: 'Admin Dashboard',
    type: 'personal',
    role: 'Frontend Developer',
    description:
      'A self-directed dashboard project focused on building a responsive and data-driven interface for managing application data.',
    features: [
      'Dashboard overview',
      'Data tables',
      'Search and filtering',
      'Responsive layouts',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    image: '/images/projects/admin-dashboard.webp',
    caseStudyUrl: '/projects/admin-dashboard',
  },
];

// export const projects: Project[] = [
//   {
//     id: 'food-ordering-platform',
//     title: 'Food Ordering Platform',
//     shortDescription:
//       'A food ordering platform for restaurant discovery, menu browsing, cart management, checkout, and order tracking.',

//     description:
//       'A web-based food ordering platform that allows users to discover restaurants, explore menus, manage their cart, complete checkout, and review their order history.',

//     role: 'Frontend Developer',

//     technologies: ['React', 'RedwoodJS', 'GraphQL', 'AWS'],

//     features: [
//       'Restaurant listing',
//       'Restaurant and food detail',
//       'Search',
//       'Filtering',
//       'Cart',
//       'Checkout',
//       'Payment',
//       'Order history',
//       'Authentication',
//       'Admin dashboard',
//     ],

//     caseStudyUrl: '/projects/food-ordering-platform',
//   },

//   {
//     id: 'recipe-recommendation',
//     title: 'Recipe Recommendation App',

//     shortDescription:
//       'A recipe discovery experience that recommends recipes based on ingredients available to the user.',

//     description:
//       'A responsive recipe application designed to help users discover recipes based on ingredients they already have.',

//     role: 'Frontend Developer',

//     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],

//     features: [
//       'Ingredient input',
//       'Ingredient chips',
//       'Recipe search',
//       'Recipe cards',
//       'Recipe detail',
//       'Filtering',
//       'Loading states',
//       'Error states',
//       'Empty states',
//     ],

//     caseStudyUrl: '/projects/recipe-recommendation',
//   },

//   {
//     id: 'admin-dashboard',
//     title: 'Admin Dashboard',

//     shortDescription:
//       'A responsive dashboard demonstrating data visualization, tables, filtering, pagination, and complex UI states.',

//     description:
//       'A data-driven admin dashboard designed to demonstrate reusable UI components, data presentation, filtering, pagination, and responsive layouts.',

//     role: 'Frontend Developer',

//     technologies: ['React', 'TypeScript', 'Tailwind CSS'],

//     features: [
//       'Dashboard statistics',
//       'Data tables',
//       'Search',
//       'Filtering',
//       'Pagination',
//       'Charts',
//       'Loading states',
//       'Empty states',
//       'Error states',
//     ],

//     caseStudyUrl: '/projects/admin-dashboard',
//   },
// ];