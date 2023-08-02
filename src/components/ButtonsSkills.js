import React from "react";
import { SkillsImagesData } from "../data/SkillsImagesData";

const ButtonsSkills = () => {
  return (
    <div class="flex w-full px-5">
      <ul class="mt-10 font-medium grid grid-cols-8 gap-2">
        {SkillsImagesData.map((image) => (
          <li key={image.text} className="flex flex-wrap justify-center">
            <button className="w-full py-0.5 px-0.5 m-0 rounded-lg bg-gradient-to-r from-purple via-blue-1 to-blue-2 border-1">
              <span className="flex flex-row justify-center text-dark px-5 py-2 font-semibold bg-white rounded">
                <img src={image.img} alt={image.title} class="pt-1 px-2" />
                <p class="pt-1">{image.title}</p>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsSkills;
