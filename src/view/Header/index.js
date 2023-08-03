import React from "react";
import { Link } from "react-router-dom";
import routes from "../../data/routers";

const Header = () => {
  return (
    <nav className="flex flex-row-reverse md:flex md:justify-end sm:flex sm:justify-end pr-20 mr-20">
      <div>
        <ul className="font-medium space-x-5 pl-10 flex flex-row">
          {routes.map((route) => {
            return (
              <li key={route.to}>
                <Link
                  to={route.to}
                  className="text-lg pr-4 focus:text-pink-1 md:text-base sm:text-base px-2"
                >
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
