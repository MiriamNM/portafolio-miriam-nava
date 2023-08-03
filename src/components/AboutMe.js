import React from "react";
import ButtonsAboutMe from "./ButtonsAboutMe";
import TextAboutMe from "./TextAboutMe";

const AboutMe = () => {
  return (
    <div className="px-10 py-10 my-20 sm:px-10 sm:py-2 md:px-10 md:py-2 text-dark">
      <TextAboutMe />
      <ButtonsAboutMe />
    </div>
  );
};

export default AboutMe;
