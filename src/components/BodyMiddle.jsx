import React from 'react';
import { bgPatternCircles, illustrationPhones } from '../assets';

const BodyMiddle = () => {
  return (
    <div className='relative flex h-[500px] left-0 md:left-[40px]'>
      <div className='h-[450px] rounded-borders'>
        <img
          className='relative h-[1000px] w-[950px] md:right-[130px] bottom-[570px] mobile-circle-image'
          src={bgPatternCircles}
        />
      </div>

      {/* <img
        className='z-10 absolute overflow-visible h-[500px] w-[500px] right-[600px]
             bottom-[60px]'
        src={illustrationPhones}
      /> */}

    <div className='absolute md:relative flex-col z-10 mt-[100px] w-[100%] 
         justify-center items-center'>
      <h3 className='font-medium text-[34px] text-white text-center md:text-left mt-40 md:mt-0 mb-2 md:mb-0'>
      State of the Art Infrastructure</h3>
      <p className='text-[14px] text-white text-center md:text-left px-10 md:px-0 md:pr-32'>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>

    </div>
  );
};

export default BodyMiddle;
