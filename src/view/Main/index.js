import React from "react";
import AboutMe from "../../components/AboutMe";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Main = () => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Main;
