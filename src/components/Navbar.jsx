import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/Aboutus") {
      setActive("Aboutus");
    } else if (path === "/Contactus") {
      setActive("Contactus");
    } else {
      setActive("Home");
    }
  }, [window.location.pathname]);

  return (
    <div className="px-4 md:px-[120px] py-4 flex justify-between items-center relative">
      <div>
        <Link to="/Home">
          <img
            src={logo}
            alt="logo"
            className="h-[36px] md:h-[44px] hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      <div
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="text-2xl cursor-pointer">☰</span>
      </div>

      <div className="hidden md:flex gap-4 md:gap-8">
        <Link to="/Home">
          <button
            onClick={() => handleClick("Home")}
            className={`${
              active === "Home" ? "font-bold" : ""
            } text-gray-700 hover:scale-105 transition-transform duration-500 hover:font-bold font-inter text-[15px]`}
          >
            Home
          </button>
        </Link>
        <Link to="/Aboutus">
          <button
            onClick={() => handleClick("Aboutus")}
            className={`${
              active === "Aboutus" ? "font-bold" : ""
            } text-gray-700 hover:scale-105 transition-transform duration-500 hover:font-bold font-inter text-[15px]`}
          >
            About us
          </button>
        </Link>
        <Link to="/Contactus">
          <button
            onClick={() => handleClick("Contactus")}
            className={`${
              active === "Contactus" ? "font-bold" : ""
            } text-gray-700 hover:scale-105 transition-transform duration-500 hover:font-bold font-inter text-[15px]`}
          >
            Contact us
          </button>
        </Link>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-[250px] z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <Link to="/Home">
            <button
              onClick={() => handleClick("Home")}
              className={`${
                active === "Home" ? "font-bold" : ""
              } text-gray-700 font-inter text-[15px]`}
            >
              Home
            </button>
          </Link>
          <Link to="/Aboutus">
            <button
              onClick={() => handleClick("Aboutus")}
              className={`${
                active === "Aboutus" ? "font-bold" : ""
              } text-gray-700 font-inter text-[15px]`}
            >
              About us
            </button>
          </Link>
          <Link to="/Contactus">
            <button
              onClick={() => handleClick("Contactus")}
              className={`${
                active === "Contactus" ? "font-bold" : ""
              } text-gray-700 font-inter text-[15px]`}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
