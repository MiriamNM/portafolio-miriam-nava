import React from "react";
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
      <p>⭐️ Problem solving</p>
      <p>⭐️ Critical thinking</p>
      <p>⭐️ Collaboration and teamwork</p>
      <p>⭐️ Professionalism and work ethic</p>
      <p>⭐️ Initiative and self-direction</p>
      <p>⭐️ Adaptability and flexibility</p>
      <p>⭐️ Self-learning</p>
      <p>⭐️ Planning, organization and time management</p>
    </div>
  );
};

export default Skills;
