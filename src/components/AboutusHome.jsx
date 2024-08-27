import React from "react";
import img from "../assets/images/Frame 59 (1).png";
import phone from "../assets/icons/Vector.png";

const AboutusHome = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-8 gap-6 md:flex-row md:gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 p-4">
        <h4 className="text-gray-600 text-center md:text-left">About Us</h4>
        <h2 className="text-gray-900 text-[28px] md:text-[36px] lg:text-[48px] font-bold mt-2 text-center md:text-left">
          A Deep Connection to Nepal’s Natural Riches
        </h2>
        <p className="text-gray-700 mt-4 text-center md:text-left">
          At PNPNINTL, we are committed to bringing you a taste of this purity
          and tradition. Every product we offer is a result of close
          collaboration with local farmers, artisans, and suppliers who share
          our values of sustainability, ethical sourcing, and respect for the
          environment.
        </p>
        <div className="mt-8 md:mt-16 lg:mt-32 flex justify-center md:justify-start">
          <button className="bg-black text-white px-4 py-3 rounded-xl flex flex-row gap-2 items-center">
            <img src={phone} alt="phone" />
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
        <img
          src={img}
          alt="Two people collaborating"
          className="w-full h-auto max-w-[573px] max-h-[680px] rounded-md"
        />
      </div>
    </div>
  );
};

export default AboutusHome;
