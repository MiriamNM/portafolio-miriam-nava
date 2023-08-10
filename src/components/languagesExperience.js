import React from "react";
import { languagesData } from "../data/ExperienceData";

const LanguagesExperience = () => {
  return (
    <>
      <ul>
        <li>
          {languagesData.map(({ language }) => (
            <div key={language}>
              <p className="text-base">{language}</p>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
};

export default LanguagesExperience;
