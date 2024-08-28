import React from "react";
import aboutus from "../assets/images/aboutus.png";
import Whychoose from "../assets/images/WhychooseUs.png";

import Carousel from "./Carousel";
import Ourjourney from "./Ourjourney";
const Aboutus = () => {
  return (
    <div className="mx-8 md:mx-16 lg:mx-32 my-4 flex flex-col gap-10 font-inter">
      <div>
        <h1 className="text-[28px] md:text-[48px] lg:text-[68px] font-bricolage">
          {" "}
          <span className="text-blue-500">Nepal’s </span>Pure Beauty & <br />
          Wellness to Your Home.
        </h1>
      </div>
      <div>
        <img
          src={aboutus}
          alt="aboutus"
          className="w-[1240px] h-[662px] rounded-xl"
        />
      </div>
      <div className="flex  justify-between leading-[50px] items-center ">
        <h2 className="text-[40px] ">
          <span className="text-[#565656]">
            Inspired by Nature, <br />
          </span>
          Trusted by Thousands
        </h2>
        <div className="flex gap-[130px]">
          <div className="flex flex-col">
            <h2 className="text-[64px] leading-10">80+</h2>
            <span className="text-[36px] text-[#565656]">Products</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[64px] leading-10">100+</h2>
            <span className="text-[36px] text-[#565656]">Customers</span>
          </div>
        </div>
      </div>
      <div className="bg-[#e9f4e7] font-inter flex flex-col gap-[24px] ">
        <h2 className="text-[#434343] text-[16px] font-bold text-center ">
          Why Choose us?
        </h2>
        <h1 className="text-gray-900 text-[32px] font-bold mt-2 text-center">
          At PNPNINTL, <span className="text-[#767676]"> our commitment</span>
          <br />
          goes beyond offering high-
          <br />
          quality products.
        </h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-blue-50 p-7 py-12 rounded-lg text-left flex flex-col gap-3 ">
            <img
              src={Whychoose}
              alt="Ethically Sourced"
              className=" w-[88px] h-[88px] mb-4 float-left"
            />
            <h3 className="text-lg font-semibold">Ethically Sourced</h3>
            <p className="text-gray-700 mt-2">
              At PNPNINTL, we ethically source and sustainably create products,
              empowering Nepal's communities while caring for people and the
              planet.
            </p>
          </div>

          <div className="bg-white p-7 py-12  flex flex-col gap-3 rounded-lg text-left">
            <img
              src={Whychoose}
              alt="Holistic Wellness"
              className="w-[88px] h-[88px] mb-4"
            />
            <h3 className="text-lg font-semibold">Holistic Wellness</h3>
            <p className="text-gray-700 mt-2">
              Our products combine traditional Nepali remedies with modern
              science, offering a harmonious fusion of nature and technology for
              overall well-being.
            </p>
          </div>

          <div className="bg-red-50 p-7 rounded-lg text-left flex flex-col items-start py-12 gap-4 ">
            <img
              src={Whychoose}
              alt="Inspired by Nature"
              className="w-[88px] h-[88px] mb-4 "
            />
            <h3 className="text-lg font-semibold">Inspired by Nature</h3>
            <p className="text-gray-700 mt-2">
              Inspired by Nepal's natural remedies, PNPNINTL blends ancient
              wisdom with modern science to create effective, gentle, and
              holistic wellness products.
            </p>
          </div>
        </div>
      </div>
      <Ourjourney />
      <Carousel />
    </div>
  );
};

export default Aboutus;
