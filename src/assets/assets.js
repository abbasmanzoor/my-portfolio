import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './profile.jpg';
import projectImg5 from './Tic-tac-toe.png';
import projectImg6 from './modren-calculator.png';
import projectImg3 from './E-commerce.png';
import projectImg4 from './portfolio.png';
import projectImg1 from './Image-Gallery.png';
import projectImg2 from './BI-Analytic.png';
import ScaleFlow from './ScaleFlow.png';

export const assets = {
    profileImg,
    // ✅ Google Drive Direct Download Link
    resume: 'https://drive.google.com/uc?export=download&id=137xaOD2ZhzyEUZ09KvxgXqY3pdRlt0H_',
};

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML','CSS','React js', 'Javascript', 'TypeScript','Tailwind css']
  },
];

export const projects = [
   {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["REACT", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://my-portfolio-git-master-abbasmanzoors-projects.vercel.app/",
    code: "https://github.com/abbasmanzoor/my-portfolio.git",
  },
    {
    title: "Tic-Tac-Toe Game",
    description: "A classic Tic-Tac-Toe game with a modern UI and smooth animations.",
    image: projectImg5,
    tech: ["HTML5", "JavaScript", "CSS3"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://tic-tac-toe0-nine.vercel.app/",
    code: "https://github.com/abbasmanzoor/tic-tac-toe0.git",
  },
  {
    title: "Calculator App",
    description: "A simple yet elegant calculator application with a modern UI and smooth animations.",
    image: projectImg6,
    tech: ["JavaScript", "HTML5", "CSS3", "Framer Motion"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://novacalc-calculator1.vercel.app/",
    code: "https://github.com/abbasmanzoor/novacalc-calculator1.git",
  },
 {
    title: "Image Gallery",
    description: "A responsive image gallery with filtering, sorting, and lightbox features.",
    image: projectImg1,
    tech: ["HTML5", "CSS3", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaStripe],
    demo: "https://lmage-gallery0.vercel.app/",
    code: "https://github.com/abbasmanzoor/lmage-gallery0.git",
  },
    {
    title: "BI Analytic Dashboard",
    description: "A comprehensive business intelligence dashboard for data visualization and analysis.",
    image: projectImg2,
    tech: ["TypeScript", "localStorage", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud ],
    demo: "https://bi-analytics-dashboard0.vercel.app/",
    code: "https://github.com/abbasmanzoor/bi-analytics-dashboard0.git",
  },
  {
    title: "ScaleFlow",
    description: "A modern SaaS platform for scaling businesses with advanced analytics and automation.",
    image: ScaleFlow,
    tech: ["React","typescript", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://scaleflow-saas0.vercel.app",
    code: "https://github.com/abbasmanzoor/scaleflow-saas0.git"
  },
  {
    title: "E-commerce website",
    description: "A modern e-commerce platform with a focus on user experience and seamless checkout.",
    image: projectImg3,
    tech: ["HTML5", "CSS3", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "https://github.com/abbasmanzoor",
  },
];

export const workData = [
  {
    role: "Junior Frontend Developer",
    company: "Self-Employed",
    duration: "2025 - Present",
    description: "Independently designing and developing frontend web applications using React.js, TypeScript, Javascript and Tailwind CSS. Focused on building a strong portfolio, exploring modern frameworks, and delivering clean, responsive user interfaces.",
    color: "purple"
  },
];