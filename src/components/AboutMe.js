import React from "react";
import { aboutMeData } from "../data/AboutMeData";

const AboutMe = () => {
  return (
    <div class="px-40 py-20 my-20">
      <div class="">
        <p class="text-lg">Hey, I'm</p>
        <br />
        <span>
          <h1 class="font-poppins text-8xl from-pink-2 via-yellow to-pink-3 bg-gradient-to-r bg-clip-text text-transparent">
            Miriam Nava
          </h1>
        </span>
      </div>
      <br />
      <br />
      {aboutMeData.map(({ aboutme }) => {
        return (
          <>
            <p class="text-lg">{aboutme}</p>
          </>
        );
      })}
    </div>
  );
};

export default AboutMe;
