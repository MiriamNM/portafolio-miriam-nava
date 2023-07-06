import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav class="bg-pink-555 border-gray-200 dark:bg-gray-900 flex">
      <div>
        <img src={logo} alt="logo" class="w-60" />
      </div>
      <div>
        <ul class="font-medium grid grid-flow-col justify-stretch md:space-x-10 md:mt-8 pl-10">
          {routes.map((route) => {
            return (
              <li>
                <Button
                  type="primary"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <NavLink
                    to={route.to}
                    style={({ isActive }) => ({
                      color: isActive ? "yellow" : "white",
                    })}
                  >
                    {route.text}
                  </NavLink>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const routes = [];
routes.push({
  to: "/",
  text: "About me",
});
routes.push({
  to: "/skills",
  text: "Skills",
});
routes.push({
  to: "/experience",
  text: "Experience",
});
routes.push({
  to: "/projects",
  text: "Projects",
});

export default Header;
