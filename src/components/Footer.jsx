import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';

const Footer = () => {
  return (
    <div className={`flex-col md:flex-row ${styles.flexCenter}`}>
      <img src={logo} alt='blogr' className='w-[75px] h-[30px] mt-20' />

        <ul className='list-none sm:flex ml-10 justify-start items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-ubuntu
            font-medium
            hover:underline
            text-[13px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-9'}
          text-white`}>
            <a
              className='float-left'>
              {nav.title}
            </a>


            <ul className='list-none mt-10'>
                {nav.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-footerTextColor cursor-pointer hover:font-bold ${
                      index !== nav.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
          </li>              
        ))}
      </ul>
    </div>
  );
};

export default Footer;
