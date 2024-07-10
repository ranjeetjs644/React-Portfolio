import React, { useState } from "react";
import Logo from "./Logo";
import { RxCross2 } from "react-icons/rx";
import { FaBarsProgress } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="px-2 md:w-[72%] h-auto  mx-auto sticky top-2 z-50 md:fixed md:top-2 md:left-0 md:right-0 ">
        <nav className="py-3 pr-2 pl-1 md:py-0 md:px-4 flex items-center justify-between my-2 mx-auto">
          {/* Logo and Title */}
          <NavLink to="/" className=" md:pl-0 flex items-center w-full">
            <Logo />
            <h2 className="px-2 text-2xl font-openSans font-bold text-gray-900">
              Ranjeet
            </h2>
          </NavLink>

          {/* Menu Items */}
          <ul
            className={`p-6 px-8 py-6 bg-gray-900 tex  font-semibold text-gray-100 font-inter text-sm absolute -top-2 -left-0 w-full flex flex-col items-start gap-y-6 transition-transform transform duration-500 ${
              isMenuOpen ? "translate-y-20" : "-translate-y-full"
            } md:top-0 md:relative md:flex-row md:gap-x-2 md:transform-none md:bg-transparent md:text-gray-800 md:py-3`}
          >
            <li className="md:py-2 md:px-4 cursor-pointer relative group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-700 font-bold flex items-center justify-center gap-1"
                    : "flex items-center justify-center gap-1"
                }
              >
                <p>Home</p>
              </NavLink>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-2/3"></div>
            </li>
            <li className="md:py-2 md:px-4 cursor-pointer relative group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-700 font-bold flex items-center justify-center gap-1"
                    : "flex items-center justify-center gap-1"
                }
              >
                <p>About</p>
              </NavLink>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-2/3"></div>
            </li>

            <li className="md:py-2 md:px-4 cursor-pointer relative group">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-700 font-bold flex items-center justify-center gap-1"
                    : "flex items-center justify-center gap-1"
                }
              >
                <p>Skills</p>
              </NavLink>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-2/3"></div>
            </li>
            <li className="md:py-2 md:px-4 cursor-pointer relative group">
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-700 font-bold flex items-center justify-center gap-1"
                    : "flex items-center justify-center gap-1"
                }
              >
                <p>Projects</p>
              </NavLink>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-2/3"></div>
            </li>
          </ul>

          {/* Menu Toggle Button */}
          <div
            className="relative md:hidden transition-all duration-500 mr-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <FaBarsProgress className="text-2xl" />
            )}
          </div>

          {/* Contact Button */}
          <div>
            <NavLink to="/contact">
              <button className="hidden md:block bg-gray-600 text-white text-[12px] px-3 py-1 rounded-md font-semibold font-Inter hover:bg-gray-700 transition-all duration-200 hover:translate-x-1">
                Contact
              </button>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
