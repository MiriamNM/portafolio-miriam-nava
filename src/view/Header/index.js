import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="flex flex-row-reverse pr-20 mr-20">
      <div>
        <ul class="font-medium grid grid-flow-col justify-stretch md:space-x-5 md:mt-8 pl-10">
          {routes.map((route) => {
            return (
              <li>
                <button type="primary" class="text-lg">
                  <NavLink
                    to={route.to}
                    style={({ isActive }) => ({
                      color: isActive ? "#E845A7" : "#1A1A1A",
                    })}
                  >
                    {route.text}
                  </NavLink>
                </button>
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
