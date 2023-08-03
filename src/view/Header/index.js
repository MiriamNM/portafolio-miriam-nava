import React from "react";
import { Link } from "react-router-dom";
import routes from "../../data/routers";

const Header = () => {
  return (
    <nav className="flex flex-row-reverse pr-20 mr-20">
      <div>
        <ul className="font-medium grid grid-flow-col justify-stretch md:space-x-5 md:mt-8 pl-10">
          {routes.map((route) => {
            return (
              <li key={route.to}>
                <Link to={route.to} className="text-lg pr-15 focus:text-pink-1">
                  {route.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
