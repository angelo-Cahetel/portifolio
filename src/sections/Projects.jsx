import React from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="flex w-full min-h-screen p-3 md:p-6 sticky"
    >
      <div className="bg-white rounded-2xl flex flex-col w-full p-6 md:p-12 lg:p-20">
        <div className="justify-center">
          <h1 className="text-[#0000FF] text-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-instrument italic">
            Projects
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-11.25">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
