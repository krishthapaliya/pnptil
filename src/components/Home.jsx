import React from "react";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import WhyChooseUs from "./WhychooseUs";
import Ourambitions from "./Ourambitions";
import AboutusHome from "./AboutusHome";

import Carousel from "./Carousel";
import ProductList from "./Productlist";

const Home = () => {
  return (
    <div className="my-8 md:my-16 md:mx-28 mx-10 flex flex-col gap-8 md:gap-12 items-center">
      <div className="flex flex-col gap-6 md:gap-8 max-w-3xl text-center">
        <h1 className="font-bold font-bricolage text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug">
          Crafted by Nature,
          <br />
          <span className="text-[#39ABA9]">Expertly Curated for You.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-inter leading-relaxed md:leading-loose text-[#565656]">
          From the Heart of Nepal, Our Commitment to Bringing{" "}
          <br className="hidden md:inline" />
          Natural Beauty and Balance into Your Home
        </p>
      </div>
      <div>
        <button className="w-40 md:w-48 h-12 md:h-14 rounded-xl bg-[#354AA0] px-5 md:px-8 py-3 md:py-4 text-white font-inter font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300">
          Explore Now
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-[30%] h-auto rounded-lg bg-[#FDF9F4] flex flex-col items-center justify-between p-6 shadow-md">
          <img
            src={img1}
            alt="100+ Products"
            className="w-full h-auto rounded"
          />
          <div className="mt-4 text-center">
            <h2 className="font-inter font-semibold text-xl md:text-2xl">
              100+
            </h2>
            <p className="font-inter text-base md:text-lg text-[#767676]">
              From the Heart of Nepal, Our Commitment to Bringing Natural Beauty
              and Balance into Your Home
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] h-auto rounded-lg p-6 bg-white flex flex-col items-center justify-between shadow-md">
          <h2 className="font-inter text-lg md:text-xl text-center text-[#767676]">
            Harmonious fusion of{" "}
            <span className="text-[#39ABA9]">nature and technology</span>
          </h2>
          <img
            src={img2}
            alt="Nature and Technology"
            className="w-full h-auto rounded mt-4"
          />
        </div>

        <div className="w-full lg:w-[30%] h-auto rounded-lg bg-[#FDF9F4] flex flex-col items-center justify-between p-6 shadow-md">
          <div className="text-center">
            <h2 className="font-inter font-semibold text-xl md:text-2xl">
              100+
            </h2>
            <p className="font-inter text-base md:text-lg text-[#767676]">
              From the Heart of Nepal, Our Commitment to Bringing Natural Beauty
              and Balance into Your Home
            </p>
          </div>
          <img
            src={img3}
            alt="Nepal Commitment"
            className="w-full h-auto rounded mt-4"
          />
        </div>
      </div>

      <div className="  w-full py-8">
        <div className="container mx-auto px-4">
          <ProductList />
          {/* <ProductList />
          <ProductList /> */}
        </div>
      </div>

      <WhyChooseUs />
      <Ourambitions />
      <AboutusHome />
      <Carousel />
      
    </div>
  );
};

export default Home;
