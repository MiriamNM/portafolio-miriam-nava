import queens from "../assets/reina.jpg";
import Profile from "../assets/Profile.png";
import BurgerQueen from "../assets/BurgerQueen.png";
import minutos from "../assets/minutos.jpg";
import pathMDLinks from "../assets/path.png";
import llevele from "../assets/llevele.png";
import Banqueate from "../assets/banqueate.png";

const projectsData = [];
projectsData.push({
  title: "Llevele llevele app",
  stack: "Node, Express, Postgres, Sequelize, Docker, React, Tailwind",
  image: llevele,
  url: "https://github.com/MiriamNM/llevele-llevele-app",
});
projectsData.push({
  title: "Banqueate",
  stack: "Next.js, React, Tailwind, Docker",
  image: Banqueate,
  url: "https://github.com/MiriamNM/banqueate",
});
projectsData.push({
  title: "Miriam´s profile",
  stack: "React, tailwind, Ant Desing",
  image: Profile,
  url: "https://github.com/MiriamNM/portafolio-miriam-nava/tree/main",
});
projectsData.push({
  title: "Technical test Cuenca, Eight-queens-puzzle",
  stack: "Node, Express, MongoDB, Mongoose, React, CSS, HTML",
  image: queens,
  url: "https://github.com/MiriamNM/Eight-queens-puzzle",
});
projectsData.push({
  title: "CDMX010-burger-queen-api-client",
  stack: "React, CSS, HTML",
  image: BurgerQueen,
  url: "https://github.com/Jael91/CDMX010-burger-queen-api-client",
});
projectsData.push({
  title: "Technical test 99minutos, Space Land",
  stack: "React, SASS, HTML",
  image: minutos,
  url: "https://github.com/MiriamNM/99minutos-frontend-interview-test-2/tree/JR-miriamnava/space-land",
});
projectsData.push({
  title: "CDMX010-md-links",
  stack: "Node.js",
  image: pathMDLinks,
  url: "https://github.com/MiriamNM/CDMX010-md-links",
});

export { projectsData };
