import React from 'react';

const CTA = () => {
  return (
    <div className="flex-col justify-center text-center">
      <h1 className="mobile-font-change flex justify-center font-normal text-white text-[50px]">A modern publishing platform</h1>
      <h3 className="flex mt-2 justify-center font-light text-white">Grow your audience and build your online brand</h3>

      <div className="font-ubuntu text-[16px] ">
        <button className="bg-white text-ctaPrimary hover:bg-ctaHover hover:text-white
          font-medium py-2 px-4 mr-10 mt-10 rounded-full">
        Start for Free
        </button>
        <button className="bg-transparent text-white hover:bg-white hover:text-ctaPrimary border border-white-100
          font-medium py-2 px-4 mr-10 mt-10 rounded-full">
        Learn More
        </button>
      </div>

    </div>
  );
};

export default CTA;
