import React from "react";
import JobExperience from "./JobExperience.js";
import SchoolExperience from "./SchoolExperience.js";

const Experience = () => {
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
        EXPERIENCE
      </h2>
      <br />
      <br />
      <JobExperience />
      <br />
      <br />
      <h3
        className="font-bold text-3xl"
        style={{
          backgroundClip: "text",
          backgroundImage:
            "linear-gradient(to right, #C27ADD, #FFD233, #5990EE)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        SCHOLARSHIP
      </h3>
      <br />
      <SchoolExperience />
      <br />
    </div>
  );
};

export default Experience;
