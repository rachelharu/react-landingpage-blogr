import React from 'react';
import { bgPatternCircles, illustrationPhones } from '../assets';

const BodyMiddle = () => {
  return (
    <div className='flex'>
      <div className='overflow-hidden h-[350px] md:h-[350px]'>
        <img
          className='relative h-[800px] w-full bottom-[450px]'
          src={bgPatternCircles}
        />
      </div>

      <img
        className='z-10 relative overflow-visible h-[500px] w-[500px] right-[600px]
             bottom-[60px]'
        src={illustrationPhones}
      />
      <h3>State of the Art Infrastructure</h3>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>
  );
};

export default BodyMiddle;
