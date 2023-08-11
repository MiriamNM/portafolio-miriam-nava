import React from "react";
import { NavLink } from "react-router-dom";
import AboutMeButtons from "../data/AboutMeButtons";

const ButtonsAboutMe = () => {
  return (
    <div className="flex flex-row md:justify-center sm:justify-center pt-20 sm:pt-1 sm:mt-0 md:pt-1 md:mt-0">
      <ul className="mt-10 font-medium grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 sm:mt-5 md:mt-5">
        {AboutMeButtons.map((button) => (
          <li key={button.text} className="flex">
            <button className="w-full py-0.5 px-0.5 m-0 rounded-lg bg-gradient-pink-yellow hover:bg-gradient-wine-purple active:bg-gradient-wine-purple">
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
