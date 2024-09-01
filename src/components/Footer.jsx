import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../assets/images/Footerimg.png";
import logo from "../assets/images/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full items-center  ">
      <img src={footerimg} alt="footer background" className="w-full object-cover " />
      <div>
      <div className="flex flex-col items-center justify-end bg-[#518B47] text-white py-8">
        
        <div className="flex items-center justify-between w-full px-6 md:px-24 lg:px-32">
          <img src={logo} alt="logo" className="mb-1 md:mb-4 h-[40px]" />
          <div className="flex space-x-8 items-center mb-2 md:mb-4 text-sm">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/Aboutus" className="text-white hover:underline">About us</Link>
            <Link to="/Contactus" className="text-white hover:underline">Contact us</Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-base md:text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-base md:text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-base md:text-xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-base md:text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

       
        <div className="w-full text-center mt-1 md:mt-4 border-t border-white pt-4">
          <p className="text-[24px] md:text-[48px] opacity-55 font-bold tracking-widest">
            CRAFTED BY NATURE
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
