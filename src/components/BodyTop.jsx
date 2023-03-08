import React, {useEffect } from 'react';
import { illustrationEditorDesktop, illustrationEditorMobile } from '../assets';
import Aos from 'aos';
import 'aos/dist/aos.css';


const BodyTop = () => {
  useEffect(() => {
    Aos.init({duration: 2500}); //time it takes animation to complete
  }, []);

  return (
    <div className='w-full mb-16'>
      <h2 className='text-center mt-20 md:mt-36 text-[30px] text-headingColor font-medium'>
        Designed for the future</h2>
       {/* container for left side items and image */}
      <div className='flex flex-col-reverse px-6 mx-auto
      space-y-0 md:flex-row '>
        {/* left side items */}
        <div data-aos="fade-right" className='mt-10 md:mt-32 mb-32 md:w-1/2'>
          <h3 className='md:mt-20 text-headingColor font-medium text-[25px] text-center md:text-left'>
           Introducing an extensible editor</h3>
          <p className='text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left'>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>

          <h3 className='mt-10 text-headingColor font-medium text-[25px] text-center md:text-left'>
           Robust content management</h3>
          <p className='text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left'>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
        {/* right side picture */}
        <div className='w-full h-full relative top-0 sm:top-2 mb-32 lg:bottom-9 xl:bottom-0'>
          <picture className=''>
            <source media='(min-width:650px)'
             srcset={illustrationEditorDesktop}></source>
             <img className='mt-5 lg:mt-0 xl:mt-0 md:ml-80 lg:ml-[450px]' src={illustrationEditorMobile} />
          </picture>
        </div>

      </div>
    </div>
  );
};

export default BodyTop;
