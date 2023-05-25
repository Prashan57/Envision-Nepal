import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-secondary font-bold text-lg ">
              {routes
                .filter((route) => route.name === "Envision Nepal")
                .map((each) => (
                  <Link key={each.path} to={each.path}>
                    {each.name}
                  </Link>
                ))}
            </div>

            
              <div className="ml-10 flex items-center space-x-4">
            
                {routes
                  .filter(
                    (route) => !!route.name && route.name !== "Envision Nepal"
                  )
                  .map((each) => (
                    <Link key={each.path} to={each.path} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {each.name}
                    </Link>
                  ))}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
