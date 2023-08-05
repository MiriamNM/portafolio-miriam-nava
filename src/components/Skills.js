import React from "react";
import ButtonsSkills from "./ButtonsSkills";
import ButtonsSoftSkills from "./ButtonsSoftSkills";

const Skills = () => {
  return (
    <div className="px-40 mx-0 py-30 my-0 sm:px-10 sm:py-2 md:px-10 md:py-2 text-dark">
      <h3>
        <span className="font-bold text-3xl bg-gradient-lila-blond text-transparent bg-clip-text">
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
