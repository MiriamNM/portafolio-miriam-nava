import React from "react";
import { aboutMeData } from "../data/AboutMeData";

const TextAboutMe = () => {
  return (
    <>
      <div>
        <p className="text-lg">Hey, I'm</p>
        <br />
        <h1>
          <span className="font-poppins text-8xl md:text-7xl bg-gradient-pink-yellow text-transparent bg-clip-text">
            Miriam Nava
          </span>
        </h1>
      </div>
      <br />
      <br />
      <div className="mb-20 md:my-1 sm:my-1">
        {aboutMeData.map(({ aboutme }, index) => (
          <p key={index} className="text-lg">
            {aboutme}
          </p>
        ))}
      </div>
    </>
  );
};

export default TextAboutMe;
