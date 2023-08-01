import React from "react";
import { projectsData } from "../data/ProjectsData";

const Projects = () => {
  return (
    <div class="px-10 flex flex-col text-dark">
      {projectsData.map(({ title, url }) => {
        return (
          <>
            <button
              class="bg-pink-1 rounded-full py-2 mx-20 my-5 text-white"
              key={title}
            >
              <a href={url}>⭐️ {title}</a>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
