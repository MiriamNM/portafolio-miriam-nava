import React from "react";
import { lifeSkillsData } from "../data/LifeSkillsData";

const ButtonsSoftSkills = () => {
  return (
    <div class="flex justify-center w-full px-5">
      <ul class="mt-10 font-medium grid grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1">
        {lifeSkillsData.map((sofkS) => (
          <li key={sofkS.text} className="flex flex-wrap justify-center">
            <div className="w-full py-0.5 px-0.5 m-0 rounded-lg bg-gradient-to-r from-pink-1 via-yellow-1 to-pink-2 border-1">
              <span className="flex flex-row justify-center text-dark px-5 py-2 font-semibold bg-white rounded">
                <p class="pt-1">{sofkS.text}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsSoftSkills;
