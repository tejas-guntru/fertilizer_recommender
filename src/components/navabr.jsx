import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isFertilizerHover, setIsFertilizerHover] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex space-x-4">
          <NavLink to="/" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md">
            Home
          </NavLink>
          <NavLink to="/services" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md">
            Services
          </NavLink>

          {/* Fertilizer menu with hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsFertilizerHover(true)}
            onMouseLeave={() => setIsFertilizerHover(false)}
          >
            <button className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md">
              Fertilizer
            </button>

            {isFertilizerHover && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 shadow-lg rounded-md">
                <NavLink
                  to="/fertilizer"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  English
                </NavLink>
                <NavLink
                  to="/fertilizer-hindi"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  हिंदी
                </NavLink>
                <NavLink
                  to="/fertilizer-telugu"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  తెలుగు
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/about" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
