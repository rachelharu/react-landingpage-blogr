import { useState } from 'react';
import {
  iconHamburger,
  iconClose,
  iconArrowDark,
  iconArrowLight,
  logo,
} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => (
  <nav className='w-full flex py-6 ml-10 justify-between items-center navbar'>
    <img src={logo} alt='blogr' className='w-[75px] h-[30px]' />

    <ul className='list-none sm:flex hidden ml-10 justify-start items-center flex-1'>
      {navLinks.map((nav, index) => (
        <li
        key={nav.id}
        className={`font-overpass
        font-normal
        text-[12px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
      text-white`}>
          <a className="float-left" href={`#${nav.id}`}>{nav.title}</a>
          <img className='ml-5 mt-1 cursor-pointer float-right'src={iconArrowLight} />
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
