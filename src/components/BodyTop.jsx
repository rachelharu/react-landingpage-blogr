import React from 'react';
import { illustrationEditorDesktop, illustrationEditorMobile } from '../assets';

const BodyTop = () => {
  return (
    <div className='w-full'>
      <h2 className='text-center mt-36 text-[30px] text-headingColor font-medium'>Designed for the future</h2>
      
      <div className='flex flex-col-reverse px-6 mx-auto 
      space-y-0 md:flex-row'>
        <div className='mt-32 mb-32 md:w-1/2'>
          <h3 className='mt-20 text-headingColor font-medium text-[25px] text-center md:text-left'>Introducing an extensible editor</h3>
          <p className='text-bodyColor font-light mt-2 items-center text-center sm:text-left'>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>

          <h3 className='mt-10 text-headingColor font-medium text-[25px] text-center md:text-left'>Robust content management</h3>
          <p className='text-bodyColor font-light mt-2 items-center text-center sm:text-left'>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>


        <div className='w-full h-full relative'>
          <picture className='relative '>
            <source media='(min-width:650px)'
             srcset={illustrationEditorDesktop}></source>
             <img className='lg:ml-96' src={illustrationEditorMobile} />
          </picture>
        </div>

      </div>
    </div>
  );
};

export default BodyTop;
