import React from 'react';
import { bgPatternCircles, illustrationPhones } from '../assets';

const BodyMiddle = () => {
  return (
    <div className='relative mt-0 sm:mt-40'>
      {/* phone image  */}
      <div className='z-10'>
        <img
          className='z-10 absolute top-[-50%] sm:top-[-40%] left-0 sm:left-[150px] md:left-0'
          src={illustrationPhones}
        />
      </div>

      {/* background image and content  */}
      <div className='relative flex h-[550px] md:h-[350px] bg-body-gradient overflow-hidden'>
        {/* background image  */}
        <div className='h-[450px] rounded-borders'>
          <img
            className='relative h-[1000px] w-[950px] md:right-[130px] bottom-[570px] mobile-circle-image'
            src={bgPatternCircles}
          />
        </div>

        {/* body content  */}
        <div className='absolute md:relative flex-col z-1 mt-[100px] w-[100%] ml-0 md:ml-32
         justify-center items-center bottom-[140px] md:bottom-[0px]'>
          <h3 className='font-medium text-[34px] text-white text-center md:text-left mt-40 md:mt-0 mb-2 md:mb-0'>
            State of the Art Infrastructure
          </h3>
          <p className='text-[15px] text-white text-center md:text-left px-10 md:px-0 md:pr-32'>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyMiddle;
