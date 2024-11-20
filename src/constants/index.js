import {
  mobile,
  backend,
  creator,
  web,
  photoshop,
  aftereffects,
  arnold,
  charactercreator,
  illustrator,
  maya,
  mediaencoder,
  premiere,
  roughanimator,
  spine,
  substance,
  unity,
  rog,
  code,
  sob,
  games,
  carrent,
  jobit,
  tripguide,
  blender,
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
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Autodesk Maya",
    icon: maya,
  },
  {
    name: "Arnold Renderer",
    icon: arnold,
  },
  {
    name: "After Effects",
    icon: aftereffects,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Premiere Pro",
    icon: premiere,
  },
  {
    name: "Rough Animator",
    icon: roughanimator,
  },
  {
    name: "Spine 2D",
    icon: spine,
  },
  {
    name: "Character Creator",
    icon: charactercreator,
  },
  {
    name: "Media Encoder",
    icon: mediaencoder,
  },
  {
    name: "Substance Painter",
    icon: substance,
  },
];

const experiences = [
  {
    title: "Digital artist ",
    company_name: "7SOBStudio",
    icon: sob,
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
    icon: rog,
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
    icon: code,
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
    icon: games,
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
    name: "Border Patrol",
    description:
      "Border Patrol is a mobile shooter game designed for an American audience. The game focuses on defending the border by eliminating threats, with a storyline centered around protecting the nation from terrorist incursions. It offers engaging gameplay with a strong emphasis on strategy and action, providing players with an immersive experience.",
    tags: [
      {
        name: "ShooterGame",
        color: "blue-text-gradient",
      },
      {
        name: "BorderDefense",
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
    name: "Hooligan",
    description:
      "Hooligan is a car simulation game tailored for the Azerbaijani audience. The game offers players an immersive experience of driving popular cars found in Azerbaijan across various local terrains and landscapes. With its focus on authenticity and cultural relevance, Hooligan captures the essence of Azerbaijani driving culture, providing a unique and engaging experience.",
    tags: [
      {
        name: "CarSimulation",
        color: "blue-text-gradient",
      },
      {
        name: "AzerbaijanDriving",
        color: "green-text-gradient",
      },
      {
        name: "AuthenticExperience",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Forest Survivor",
    description:
      "Forest Survivor is a mobile survival game that follows the journey of a small red panda as it defends the forest from goblins and various evil woodland creatures. The game combines action and strategy, challenging players to protect the forest while facing waves of enemies in a vibrant and engaging environment.",
    tags: [
      {
        name: "SurvivalGame",
        color: "blue-text-gradient",
      },
      {
        name: "RedPandaAdventure",
        color: "green-text-gradient",
      },
      {
        name: "DefendTheForest",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
