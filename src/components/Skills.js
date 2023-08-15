import React from "react";
import ButtonsSkills from "./ButtonsSkills";
import ButtonsSoftSkills from "./ButtonsSoftSkills";

const Skills = () => {
  return (
    <div
      className="px-40 mx-0 pt-20 mb-20 sm:px-10 sm:py-10 md:px-10 md:py-10 text-dark"
      id="skills"
    >
      <h3>
        <span className="font-bold text-3xl bg-gradient-pink-yellow text-transparent bg-clip-text">
          SKILLS
        </span>
      </h3>
      <br />
      <h4 className="text-gray font-medium">Hard skills</h4>
      <ButtonsSkills />
      <br />
      <br />
      <h4 className="text-gray font-medium">Soft skills</h4>
      <ButtonsSoftSkills />
    </div>
  );
};

export default Skills;
