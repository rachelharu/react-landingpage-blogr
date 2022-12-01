import React from 'react';
import { illustrationLaptopDesktop, illustrationLaptopMobile } from '../assets';

const BodyBottom = () => {
  return (
    <div className='relative w-full mb-5 bottom-[50px]'>

      {/* container for left side image and right side items */}
      <div className='flex flex-col px-6 mx-auto 
          space-y-0 md:flex-row mt-0 md:mt-32'>
        {/* left side image */}
        <div className='w-full h-full relative sm:right-[0px] md:right-[250px] lg:right-[300px] 
          xl:right-[450px] mb-5'>
          <picture className=''>
            <source
              media='(min-width:650px)'
              srcset={illustrationLaptopDesktop}></source>
            <img
              className='mt-5 lg:mt-0 xl:mt-0'
              src={illustrationLaptopMobile}
            />
          </picture>
        </div>

        {/* right side items */}
        <div className='!mt-5 lg:!mt-24 md:w-1/2'>
          <h3 className='md:mt-20 mb-5 text-headingColor font-medium text-[25px] text-center md:text-left'>
            Free, open, simple
          </h3>
          <p className='text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left'>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h3 className='mt-10 mb-5 text-headingColor font-medium text-[25px] text-center md:text-left'>
            Powerful tooling
          </h3>
          <p className='text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left'>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyBottom;
