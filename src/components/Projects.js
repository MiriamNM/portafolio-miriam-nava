import React from "react";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="px-40 mx-0 py-30 my-0 sm:px-0 sm:py-3 md:px-0 md:py-3 text-dark">
      <h2>
        <span className="font-bold text-3xl bg-gradient-lila-blond text-transparent bg-clip-text">
          PROJECTS
        </span>
      </h2>
      <CardProjects />
    </div>
  );
};

export default Projects;
