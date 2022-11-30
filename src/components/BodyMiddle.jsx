import React from 'react';
import { bgPatternCircles, illustrationPhones } from '../assets';

const BodyMiddle = () => {
  return (
    <div className='relative flex '>
      <div className='overflow-hidden h-[400px] rounded-borders'>
        <img
          className='relative h-[1000px] w-[950px] md:right-[180px] bottom-[570px] mobile-circle-image'
          src={bgPatternCircles}
        />
      </div>

      {/* <img
        className='z-10 absolute overflow-visible h-[500px] w-[500px] right-[600px]
             bottom-[60px]'
        src={illustrationPhones}
      /> */}
    <div className='relative z-10 mt-[100px] w-[50%]'>
      <h3>State of the Art Infrastructure</h3>
      <p>
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
