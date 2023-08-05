import React from "react";
import JobExperience from "./JobExperience.js";
import SchoolExperience from "./SchoolExperience.js";

const Experience = () => {
  return (
    <div className="px-40 mx-0 py-30 my-0 sm:px-10 sm:py-2 md:px-10 md:py-2 text-dark">
      <h2>
        <span className="font-bold text-3xl bg-gradient-lila-blond text-transparent bg-clip-text">
          EXPERIENCE
        </span>
      </h2>
      <br />
      <br />
      <JobExperience />
      <br />
      <br />
      <h3>
        <span className="font-bold text-3xl bg-gradient-lila-blond text-transparent bg-clip-text">
          SCHOLARSHIP
        </span>
      </h3>
      <br />
      <SchoolExperience />
      <br />
    </div>
  );
};

export default Experience;
