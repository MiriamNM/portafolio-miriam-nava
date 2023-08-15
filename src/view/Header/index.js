import React, { useState } from "react";
import routes from "../../data/routers";

const Header = () => {
  const [routerHash, setRouterHash] = useState("");
  const handleRouter = (e) => {
    setRouterHash(e);
  };
  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <div className="flex flex-row-reverse md:flex md:justify-end sm:flex sm:justify-end pr-20 mr-20">
        <ul className="font-medium space-x-5 md:space-x-1 md:pl-5 sm:space-x-1 sm:pl-5 pl-10 flex flex-row whitespace-nowrap">
          {routes.map((route) => {
            const isActive = route.to === routerHash;
            return (
              <li key={route.to}>
                <a
                  href={route.to}
                  className={`text-lg pr-4 focus:text-pink-1 md:text-base sm:text-base px-2 ${
                    isActive ? "text-pink-1" : ""
                  }`}
                  onClick={() => handleRouter(route.to)}
                >
                  {route.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
