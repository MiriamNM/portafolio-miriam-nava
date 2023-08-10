import React from "react";
import JobExperience from "./JobExperience.js";
import LanguagesExperience from "./languagesExperience.js";
import SchoolExperience from "./SchoolExperience.js";

const Experience = () => {
  return (
    <div className="px-40 mx-0 pt-20 mb-20 sm:px-10 sm:py-10 md:px-10 md:py-10 text-dark">
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
          STUDIES
        </span>
      </h3>
      <br />
      <SchoolExperience />
      <br />
      <br />
      <h3>
        <span className="font-bold text-3xl bg-gradient-lila-blond text-transparent bg-clip-text">
          LANGUAGES
        </span>
      </h3>
      <br />
      <LanguagesExperience />
    </div>
  );
};

export default Experience;
