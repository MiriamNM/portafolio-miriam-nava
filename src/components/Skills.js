import React from "react";
import ButtonsSkills from "./ButtonsSkills";
import ButtonsSoftSkills from "./ButtonsSoftSkills";

const Skills = () => {
  return (
    <div className="px-10 py-10 my-20 sm:px-10 sm:py-2 md:px-10 md:py-2 text-dark">
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
        SKILLS
      </h3>
      <br />
      <h4 className="text-gray">Hard skills</h4>
      <ButtonsSkills />
      <br />
      <br />
      <h4 className="text-gray">Soft skills</h4>
      <ButtonsSoftSkills />
    </div>
  );
};

export default Skills;
