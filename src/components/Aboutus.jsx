import React from 'react';
import img from '../assets/images/Frame 59 (1).png'
import phone from '../assets/icons/Vector.png'
const Aboutus = () => {
    return (
        <div className=" md:px-28 flex flex-col justify-between md:flex-row items-center mt-8 md:gap-6">
            
            <div className=" md:w-1/2 flex flex-col gap-[24px]">
                <h4 className="text-gray-600  ">About Us</h4>
                <h2 className="text-gray-900 text-[48px] font-bold mt-2">
                    A Deep Connection to Nepal’s Natural Riches
                </h2>
                <p className="text-gray-700 mt-4">
                    At PNPNINTL, we are committed to bringing you a taste of this purity and tradition.
                    Every product we offer is a result of close collaboration with local farmers, artisans,
                    and suppliers who share our values of sustainability, ethical sourcing, and respect for the environment.
                </p>
                <div className='mt-32'>
                <button className="bg-black text-white px-4 py-3  rounded-xl flex flex-row gap-2 items-center"> <img src={phone} alt='phone'/>
                    Contact Us
                </button>
                </div>
            </div>

            
            <div className="w-[573px] mt-8 h-[680px] md:mt-0">
                <img 
                    src={img}
                    alt="Two people collaborating" 
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
};

export default Aboutus;
