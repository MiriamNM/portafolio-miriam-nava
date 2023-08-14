import React from "react";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const routes = [];
routes.push({
  to: <AboutMe />,
  text: "About me",
});
routes.push({
  to: <Experience />,
  text: "Experience",
});
routes.push({
  to: <Projects />,
  text: "Skills",
});
routes.push({
  to: <Skills />,
  text: "Projects",
});

export default routes;
