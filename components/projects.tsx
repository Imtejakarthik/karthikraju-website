"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.map((project, index) => (
          <div key={index} className={`w-full md:w-[calc(50%-1rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

