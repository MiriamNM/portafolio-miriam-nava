import { HashRouter } from "react-router-dom";
import Header from "../view/Header/index.js";
import Main from "../view/Main/index.js";
import Footer from "../view/Footer/index.js";
import "./App.css";
// import AboutMe from '../components/AboutMe.js';
// import Home from '../components/Home.js';
// import Skills from '../components/Skills.js';
// import Scholarship from '../components/Scholarship.js';
// import Experience from '../components/Experience.js';
// import Projects from '../components/Projects.js';

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <HashRouter>
        <Header />
        {/*
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<p>Not found</p>} /> */}
        <Main />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
