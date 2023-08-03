import React from "react";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="px-10 py-10 my-20 sm:px-10 sm:py-2 md:px-10 md:py-2 text-dark">
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
