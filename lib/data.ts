import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact as SiReactIcon,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiMui,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGraphql
} from 'react-icons/si';
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import EkkocareImg from "@/public/ekkacare.png"
import RumiImg from "@/public/rumi.png"
import EmotionImg from "@/public/human emo.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "sathyabama university",
    location: "Chennai,India",
    description:
      "Forged in the crucible of curiosity, I mastered many coding languages and wove the magic of logic to shine in coding contests during my 2nd year.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Virinchi ,Hyd",
    description:
      "ransformed from a front-end specialist to a proficient full-stack and Java developer, crafting seamless and innovative digital experiences",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Data analyst",
    location: "malaysia, kuala lumpur",
    description:
      "I’m a data analyst with expertise in data analysis, machine learning, AI/ML techniques, and data visualization using advanced tools, and I’m open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "ekkocare",
    description:
      "Health Wallet: Your health. Your money. In one place Take control of your healthcare spending",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: EkkocareImg,
  },
  {
    title: "rumi",
    description:
      "AI learning dashboards: Illuminating insights to accelerate AI mastery.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    imageUrl: RumiImg,
  },
  {
    title: "Live-Human-Emotion-Classification",
    description:
      "Decoding the real-time language of human feelings.",
    tags: ["Python", "TensorFlow", "NLP", "Flask"],
    imageUrl: EmotionImg,
  },
] as const;


export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};
export const skillsData: Skill[] = [
  {
    name: "HTML 5",
    icon: SiHtml5,
    color: "#E34F26"
  },
  {
    name: "CSS 3",
    icon: SiCss3,
    color: "#1572B6"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6"
  },
  {
    name: "React JS",
    icon: SiReactIcon,
    color: "#61DAFB"
  },
  {
    name: "React Native",
    icon: SiReactIcon,
    color: "#61DAFB"
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    color: "#000000"
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28"
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791"
  },
  {
    name: "MUI",
    icon: SiMui,
    color: "#007FFF"
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E"
  },
  {
    name: "Shadcn UI",
    icon: FaCode,
    color: "#000000"
  },
  {
    name: "Sanity CMS",
    icon: FaDatabase,
    color: "#F03E2F"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933"
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248"
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC"
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098"
  }
];

