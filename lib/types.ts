import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export interface Skill {
    name: string;
    icon: React.ComponentType;
    }