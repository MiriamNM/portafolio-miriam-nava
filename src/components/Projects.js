import React from "react";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="px-20 py-10 mx-20 sm:px-1 sm:py-2 md:px-1 md:py-2 text-dark">
      <h2
        className="font-bold text-3xl"
        style={{
          backgroundClip: "text",
          backgroundImage:
            "linear-gradient(to right, #C27ADD, #FFD233, #5990EE)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        PROJECTS
      </h2>
      <CardProjects />
    </div>
  );
};

export default Projects;
