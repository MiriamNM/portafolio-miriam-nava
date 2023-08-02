import React from "react";
import ButtonsAboutMe from "./ButtonsAboutMe";
import TextAboutMe from "./TextAboutMe";

const AboutMe = () => {
  return (
    <div className="px-10 py-10 my-20 md:px-20 lg:px-40 text-dark">
      <TextAboutMe />
      <ButtonsAboutMe />
    </div>
  );
};

export default AboutMe;
