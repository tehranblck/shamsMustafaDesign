import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Artist",
    icon: web,
  },
  {
    title: "Game designer",
    icon: mobile,
  },
  {
    title: "Digital Artist",
    icon: backend,
  },
  {
    title: "3D generalist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital artist ",
    company_name: "7SOBStudio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2021 avgust - 2023 sept",
    points: [
      "I created my own NFT collection by following the latest trends.",
      " The collection features character designs and lifestyle-themed items that reflect their unique stories.",
      "I used Adobe design tools to bring these concepts to life, focusing on creativity and detail.",
    ],
  },
  {
    title: "3D Generalist",
    company_name: "ROG VFX Studio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " 2022 oct- 2023 aprel",
    points: [
      "In this project, I worked on creating 3D models for a film, including texturing and lighting tasks.",
      " I utilized tools such as Maya, Arnold Renderer, and Substance Painter to achieve high-quality results.",
      "The project required the creation of realistic, aged structures, allowing me to gain valuable experience in detailed topology and achieving a lifelike appearance.",
    ],
  },
  {
    title: "Game Artist",
    company_name: "Code Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023 dec - Present",
    points: [
      "Designed characters, created the user interface, and worked on 2D character animations.Took part in every aspect of development and successfully completed the project.",
      "Handled the entire 3D pipeline, including modeling, texturing, and animation. Delivered a polished game with engaging visuals and smooth gameplay.",
      "Worked on character design, UI, animations, and additional design elements. Focused on creating a realistic and immersive gaming experience.",
    ],
  },
  {
    title: "2D artist and UI designer",
    company_name: "85 Games Studio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 deb - Present",
    points: [
      "Designed the game concept in a 2D style and developed the entire art direction. Created the user interface, assets, and managed the entire art production pipeline.",
      "Designed the UI and UX, focusing on creating an intuitive and visually appealing experience.",
      "Ensured the design complemented the realistic nature of the game",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
