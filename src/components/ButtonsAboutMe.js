import React from "react";
import { NavLink } from "react-router-dom";
import AboutMeButtons from "../data/AboutMeButtons";

const ButtonsAboutMe = () => {
  return (
    <div className="flex flex-row pt-20">
      <ul className="mt-10 font-medium grid grid-cols-3 gap-4">
        {AboutMeButtons.map((button) => (
          <li key={button.text} className="flex">
            <button className="w-full py-0.5 px-0.5 m-0 rounded-lg bg-gradient-to-r from-purple via-blue-1 to-blue-2 border-1">
              <NavLink
                to={button.url}
                className="flex flex-row justify-center text-dark px-5 py-2 font-semibold bg-white rounded"
              >
                <img src={button.img} className="pb-1 pr-2" alt={button.text} />
                {button.text}
              </NavLink>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsAboutMe;
