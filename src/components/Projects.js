import React from "react";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div
      className="px-40 mx-0 pt-20 mb-20 sm:px-10 sm:py-10 md:px-10 md:py-10 text-dark"
      id="projects"
    >
      <h2>
        <span className="font-bold text-3xl bg-gradient-pink-yellow text-transparent bg-clip-text">
          PROJECTS
        </span>
      </h2>
      <CardProjects />
    </div>
  );
};

export default Projects;
