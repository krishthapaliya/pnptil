import React from 'react';
import Whychoose from '../assets/images/WhychooseUs.png'
const WhyChooseUs = () => {
    return (
        <div className="bg-[#e9f4e7] p-28 font-inter flex flex-col gap-[24px] ">
            <h2 className="text-[#434343] text-[16px] font-bold ">
                Why Choose us?
            </h2>
            <h1 className="text-gray-900 text-[48px] font-bold mt-2">
                At PNPNINTL,  <span className="text-[#767676]"> our commitment</span>
                <br />
                goes beyond offering high-<br/>quality products.
            </h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="bg-blue-50 p-7 py-12 rounded-lg text-left flex flex-col gap-3 ">
                    <img src={Whychoose} alt="Ethically Sourced" className=" w-[88px] h-[88px] mb-4 float-left" />
                    <h3 className="text-lg font-semibold">Ethically Sourced</h3>
                    <p className="text-gray-700 mt-2">
                        At PNPNINTL, we ethically source and sustainably create products, empowering Nepal's communities while caring for people and the planet.
                    </p>
                </div>

                <div className="bg-white p-7 py-12  flex flex-col gap-3 rounded-lg text-left">
                    <img src={Whychoose} alt="Holistic Wellness" className="w-[88px] h-[88px] mb-4" />
                    <h3 className="text-lg font-semibold">Holistic Wellness</h3>
                    <p className="text-gray-700 mt-2">
                        Our products combine traditional Nepali remedies with modern science, offering a harmonious fusion of nature and technology for overall well-being.
                    </p>
                </div>

                <div className="bg-red-50 p-7 rounded-lg text-left flex flex-col items-start py-12 gap-4 ">
                    <img src={Whychoose}  alt="Inspired by Nature" className="w-[88px] h-[88px] mb-4 " />
                    <h3 className="text-lg font-semibold">Inspired by Nature</h3>
                    <p className="text-gray-700 mt-2">
                        Inspired by Nepal's natural remedies, PNPNINTL blends ancient wisdom with modern science to create effective, gentle, and holistic wellness products.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
