import React from "react";
import skills from "../assets/skills.png";
import lifeSkills from "../assets/lifeSkills.png";

const Skills = () => {
  return (
    <div class="pl-40">
      <img src={skills} alt="skills" />
      <img src={lifeSkills} alt="skills" />
      {/* <h3>Life skills</h3>
            <p>Problem solving</p>
            <p>Critical thinking</p>
            <p>Collaboration and teamwork</p>
            <p>Professionalism and work ethic</p>
            <p>Initiative and self-direction</p>
            <p>Adaptability and flexibility</p>
            <p>Self-learning</p>
            <p>Planning, organization and time management</p> */}
    </div>
  );
};

export default Skills;
