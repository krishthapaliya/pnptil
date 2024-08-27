import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (section) => {
    setActive(section);
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
    <div className="px-4 md:px-[120px] py-4 flex justify-between items-center">
      <div>
        <Link to="/Home">
          <img
            src={logo}
            alt="logo"
            className="h-[36px] md:h-[44px] hover:scale-105 transition-transform duration-500 "
          />
        </Link>
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
      <button className="bg-black rounded-md text-white px-4 py-2 md:px-6 md:py-2 hover:scale-105 transition-transform duration-500">
        Shop now
      </button>
    </div>
  );
};

export default Navbar;
