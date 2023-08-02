import React from "react";
// import { Routes, Route } from "react-router-dom";
import AboutMe from "../../components/AboutMe";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
// import { Button } from "antd";

const Main = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes> */}
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
