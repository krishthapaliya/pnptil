import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../assets/images/footerimg.png";
import logo from "../assets/images/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] ">
      <img src={footerimg} alt="footer background" className="w-full object-cover h-[150px]" />
      <div>
      <div className="flex flex-col items-center justify-end bg-[#518B47] text-white py-8">
        
        <div className="flex items-center justify-between w-full px-32">
          <img src={logo} alt="logo" className="mb-4 h-[40px]" />
          <div className="flex space-x-8 mb-4 text-sm">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/Aboutus" className="text-white hover:underline">About us</Link>
            <Link to="/Contactus" className="text-white hover:underline">Contact us</Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

       
        <div className="w-full text-center mt-4 border-t border-white pt-4">
          <p className="text-[48px] font-bold tracking-widest">
            CRAFTED BY NATURE
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
