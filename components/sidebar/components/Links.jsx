/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === "/main") {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className={`relative mb-3 flex w-full hover:cursor-pointer hover:text-gray-800 text-gray-600`}>
              <li
                className={`my-[3px] flex w-full cursor-pointer items-center px-8`}
                key={index}
              >
                <div
                  className={`flex w-full rounded-lg px-3 py-3 ${
                    activeRoute(route.path) === true ? "bg-[#FFBCAB]" : ""
                  }`}
                >
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? "font-bold text-[#45007C] dark:text-white"
                        : "font-medium"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? "font-bold text-[#45007C] dark:text-white"
                        : "font-medium"
                    }`}
                  >
                    {route.name}
                  </p>
                </div>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-[3.4rem] w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
