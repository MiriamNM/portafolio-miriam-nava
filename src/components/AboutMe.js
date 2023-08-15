import React from "react";
import ButtonsAboutMe from "./ButtonsAboutMe";
import TextAboutMe from "./TextAboutMe";

const AboutMe = () => {
  return (
    <div
      className="px-40 mx-0 pt-20 mb-20 sm:px-10 sm:py-10 md:px-10 md:py-10 text-dark"
      id="about-me"
    >
      <TextAboutMe />
      <ButtonsAboutMe />
    </div>
  );
};

export default AboutMe;
