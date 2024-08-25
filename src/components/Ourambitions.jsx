import React from 'react';
import img1 from '../assets/images/Frame 59.png'
import icon1 from '../assets/icons/Luxurious.png'
import icon2 from '../assets/icons/Herbal.png'
const NatureAmbitions = () => {
    return (
        <div className="bg-[#e9f4e7] p-8 flex flex-col md:flex-row items-center font-inter px-28">
           
            <div className="md:w-1/2 md:h-1/2">
                <img 
                    src={img1} 
                    alt="Waterfall with person" 
                    className="md:w-[573px] w-[400px] md:h-[680px] h-[450px] rounded-md"
                />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col gap-[30px] ">
                <h4 className="text-gray-600 uppercase tracking-wider text-[16px]">Our Ambitions</h4>
                <h2 className="text-gray-900 md:text-[48px] text-[32px] font-bold mt-2">
                    Bringing Nature's Healing Power to You.
                </h2>
                <p className="text-gray-700 mt-4">
                    We strive to deliver products that encapsulate the essence of nature.
                    Each item we offer is thoughtfully curated to promote wellness, beauty, 
                    and mindful living for our customers in Japan and beyond.
                </p>

                <div className="mt-6 space-y-4 flex flex-col gap-3">
                    <div className="flex items-start  p-4 py-8 rounded-md shadow-sm border border-1 ">
                        <div className="flex-shrink-0">
                            <img src={icon1} alt="Icon" className="w-8 h-8" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Luxurious Cosmetics</h3>
                            <p className="text-gray-700">
                                Enhance your natural beauty with our high-quality cosmetics, crafted from the purest ingredients.
                            </p>
                            
                        </div>
                    </div>
                    <div className="flex items-start  p-4 py-8 rounded-md shadow-sm">
                        <div className="flex-shrink-0">
                            <img src={icon2} alt="Icon" className="w-8 h-8 bg-[#44913D]" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Herbal Teas</h3>
                            <p className="text-gray-700">
                                Savor the goodness of nature with our herbal teas, offering comfort and health in every cup.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NatureAmbitions;
