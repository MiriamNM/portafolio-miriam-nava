import React from "react";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="px-10 py-10 my-20 md:px-20 lg:px-40 text-dark">
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
      {/* <div className="grid grid-cols-2 gap-4">
        {projectsData.map(({ title, url, stack, image }) => {
          return (
            <div key={title} className="flex flex-col">
              <img
                src={image}
                alt={title}
                className="object-contain h-48 w-full rounded-lg"
              />
              <div className="flex flex-row">
                <h3>{title}</h3>
                <button className="flex justify-items-start rounded-full py-2 mx-20 my-5 text-white">
                  <a href={url} className="flex justify-items-end">
                    <img
                      src={github}
                      alt={title}
                      className="flex justify-items-end"
                    />
                  </a>
                </button>
              </div>
              <p className="text-blue-4">{stack}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Projects;
