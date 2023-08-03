import React from "react";
import { aboutMeData } from "../data/AboutMeData";

const TextAboutMe = () => {
  return (
    <>
      <div>
        <p className="text-lg">Hey, I'm</p>
        <br />
        <h1
          className="font-poppins text-6xl md:text-7xl"
          style={{
            backgroundClip: "text",
            backgroundImage:
              "linear-gradient(to right, #E845A7, #FFD233, #DD5789)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Miriam Nava
        </h1>
      </div>
      <br />
      <br />
      <div className="mb-20">
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
