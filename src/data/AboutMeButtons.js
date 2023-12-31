// import React from "react";
import VectorGitHub from "../assets/VectorGitHub.png";
import VectorLinkedin from "../assets/VectorLinkedin.png";
import VectorMail from "../assets/VectorMail.png";

const email = "miriamnavamucino@gmail.com";
const subject = "Email from Portafolio";

const AboutMeButtons = [];
AboutMeButtons.push({
  url: `mailto:${email}?subject=${encodeURIComponent(subject)}`,
  text: "Send an email",
  img: VectorMail,
});
AboutMeButtons.push({
  url: "https://www.linkedin.com/in/miriam-nava-muci%C3%B1o/",
  text: "LinkedIn",
  img: VectorLinkedin,
});
AboutMeButtons.push({
  url: "https://github.com/MiriamNM",
  text: "GitHub",
  img: VectorGitHub,
});

export default AboutMeButtons;
