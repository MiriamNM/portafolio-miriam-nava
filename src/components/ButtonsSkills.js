import React from "react";
import { SkillsImagesData } from "../data/SkillsImagesData";

const ButtonsSkills = () => {
  return (
    <div className="flex w-full px-5">
      <ul className="mt-10 font-medium grid grid-cols-8 gap-2 md:grid-cols-2 sm:grid-cols-2">
        {SkillsImagesData.map((image) => (
          <li key={image.text} className="flex flex-wrap justify-center">
            <div className="w-full pt-0.5 pb-0.5 px-0.5 m-0 rounded-lg border-2 bg-gradient-pink-yellow border-none">
              <span className="flex flex-row justify-center text-dark px-5 py-2 font-semibold bg-white rounded">
                <img src={image.img} alt={image.title} className="pt-1 px-1" />
                <p className="pt-2">{image.title}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsSkills;
