import React from "react";
import me from "../assets/me.jpg";
import { aboutMeData } from "../data/AboutMeData";

const AboutMe = () => {
  return (
    <div class="p-10">
      <div class="">
        <img src={me} class="mx-auto" alt={me} width="187" />
      </div>
      <br />
      <br />
      {aboutMeData.map(({ aboutme }) => {
        return (
          <>
            <p>{aboutme}</p>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default AboutMe;
