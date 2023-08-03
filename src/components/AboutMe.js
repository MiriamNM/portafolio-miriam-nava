import React from "react";
import ButtonsAboutMe from "./ButtonsAboutMe";
import TextAboutMe from "./TextAboutMe";

const AboutMe = () => {
  return (
    <div className="px-20 py-10 mx-20 sm:px-1 sm:py-2 md:px-1 md:py-2 text-dark">
      <TextAboutMe />
      <ButtonsAboutMe />
    </div>
  );
};

export default AboutMe;
