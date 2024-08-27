import React, { useState } from 'react';
import Avatar from '../assets/icons/Avatar.png';

const Carousel = () => {
  const reviews = [
    {
      name: 'Sarah L.',
      title: 'Hospitality Manager',
      content: 'We strive to deliver products that encapsulate the essence of nature. Each item we offer is thoughtfully curated to promote wellness, beauty, and mindful living for our customers in Japan and beyond. Display reviews and testimonials from satisfied customers, focusing on how the products have enhanced their wellness and lifestyle.',
      avatar: Avatar,
      company: '*Logoipsum'
    },
    {
      name: 'John D.',
      title: 'Marketing Director',
      content: 'The products provided by this company have significantly improved our team’s well-being and productivity. The attention to detail and quality is unparalleled.',
      avatar: Avatar,
      company: '*Logoipsum'
    },
    {
      name: 'Emily R.',
      title: 'Product Manager',
      content: 'Our clients have been more than satisfied with the quality of these products. They align perfectly with our brand values of sustainability and health.',
      avatar: Avatar,
      company: '*Logoipsum'
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews.length - 1 : prevReview - 1
    );
  };

  const handleNext = () => {
    setCurrentReview((prevReview) =>
      prevReview === reviews.length - 1 ? 0 : prevReview + 1
    );
  };

  return (
    <div className='flex flex-col font-inter bg-[rgb(253,249,244)]  my-4 rounded-xl'>
      <div className='text-center'>
        <h1 className='text-[48px] font-bold'>Testimonials</h1>
        <p className='text-[24px] text-[#565656]'>Reviews from the customers we served</p>
      </div>
      <div className='flex items-center'>
        <button className='bg-black ml-32 p-4 rounded-full' onClick={handlePrev}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1.86377L1.20588 7.15789L6.5 12.452" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className='mx-16  rounded-xl border-2 flex flex-col gap-4 border-black mb-16 mt-7 p-[32px] h-[240px] items-center'>
          <div className='flex justify-between gap-[420px]'>
            <div className='flex'>
              <img src={reviews[currentReview].avatar} alt='avatar' />
              <div className='ml-4'>
                <h4 className='font-bold'>{reviews[currentReview].name}</h4>
                <p className='text-sm'>{reviews[currentReview].title}</p>
              </div>
            </div>
            <p className='text-2xl font-bold opacity-40'>{reviews[currentReview].company}</p>
          </div>
          <div>
            <p>{reviews[currentReview].content}</p>
          </div>
        </div>

        <button className='bg-black mr-32 p-4 rounded-full' onClick={handleNext}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 1.86377L6.54412 7.15789L1.25 12.452" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
