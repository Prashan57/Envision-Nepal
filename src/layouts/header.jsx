import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserContext } from "../contexts/usercontext";

const Header = () => {
  const {isLoggedIn,onLogOut}= useUserContext();
  return (
    <div
      className=" from-gray-800 to-blue-900 via-teal-950  bg-gradient-to-r ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-lg flex justify-between">
            <div><img src="../../logoo.png" alt="" className="w-10 " /></div>
            <Link to="/" className="mt-1">Envision Nepal</Link>
          </div>

          <div className="ml-10 flex items-center space-x-4">
            {routes
              .filter(
                (route) =>
                  !!route.name &&
                  route.name !== "Envision Nepal" &&
                  !(isLoggedIn && (route.name === "Login" || route.name === "SignUp"))
              )
              .map((each) => (
                <Link
                  key={each.path}
                  to={each.path}
                  className={`text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium ${
                    each.name === "TrainingList" ? "text-blue-300" : ""
                  }`}
                >
                  {each.name}
                </Link>
              ))}
            {isLoggedIn && (
              <button
                onClick={onLogOut}
                className="text-secondary hover:text-teal-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
