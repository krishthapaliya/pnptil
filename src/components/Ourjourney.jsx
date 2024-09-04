import React from 'react';
import ourjourney from '../assets/images/ourjourney.png';
import image2 from '../assets/images/ourjourney2.png';
import image3 from '../assets/images/ourjourney3.png';
import avatar from '../assets/icons/Avatar.png'

const Ourjourney = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[24px] md:gap-[48px] px-[16px] md:px-[0px] py-[24px]'>
      {/* Left Section with Images */}
      <div className='flex flex-col md:flex-row md:w-1/2 justify-between items-center'>
        <div className='mb-[16px] md:mb-0'>
          <img src={ourjourney} alt='our journey' className='w-full md:w-[293.67px] h-auto object-cover'/>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <img src={image2} alt='image2' className='w-full md:w-[260.76px] h-auto object-cover'/>
          <img src={image3} alt='img3' className='w-full md:w-[260.76px] h-auto object-cover'/>
        </div>
      </div>

      {/* Right Section with Text */}
      <div className='md:w-1/2'>
        <div className='mb-[24px] border-b-slate-950 border-b-2 pb-10'>
          <h1 className='text-[16px] uppercase font-semibold'>Our Journey</h1>
          <h2 className='text-[24px] md:text-[48px] font-bold leading-tight'>A Journey Rooted in Nature and Tradition</h2>
          <p className='text-[16px] md:text-[18px] text-[#767676] mt-[16px]'>
            Honoring Nepal’s rich heritage, we bring ethically sourced products to Japan, supporting sustainable livelihoods and delivering quality you can trust.
          </p>
        </div>
        <div className='bg-[#d0e0ee]  p-[16px] rounded-xl mt-9'>
          <p className='italic text-[#767676] text-[20px]'>“ P&P International bridges Nepal’s rich heritage with modern wellness, honoring ethical sourcing, sustainability, and tradition in every product—an inspiring testament to mindful living."</p>
          <div className='flex  items-center mt-[16px]'>
            <img src={avatar} alt="Avatar" className='w-[40px] h-[40px] rounded-full mr-[8px]'/>
            <div>
              <p className='font-bold'>Sarah L.</p>
              <p className='text-sm text-[#767676]'>CEO, PNPTL</p>
            </div>
          </div>
          <p className='text-xl font-bold text-[#767676] mt-4'>*Logoispum</p>
        </div>
      </div>
    </div>
  );
}

export default Ourjourney;
