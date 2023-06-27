import React from "react";
import { lifeSkillsData } from "../data/LifeSkillsData";
import Carousel from "./Carousel";

const Skills = () => {
  return (
    <div class="pl-40">
      <h3 class="font-bold text-xl" style={{ color: "#BB1970" }}>
        Skills and software
      </h3>
      <br />
      <Carousel />
      <br />
      <br />
      <br />
      <h3 class="font-bold text-xl" style={{ color: "#BB1970" }}>
        Life skills
      </h3>
      <br />
      {lifeSkillsData.map(({ text }) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export default Skills;
