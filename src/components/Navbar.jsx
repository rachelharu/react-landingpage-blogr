import { useState } from 'react';
import {
  iconHamburger,
  iconClose,
  iconArrowDark,
  iconArrowLight,
  logo,
} from '../assets';
import { navlinks } from '../constants';

const Navbar = () => (
  <nav className="w-full flex py-6 justify-between items-center navbar">
   <img src={logo} alt="blogr" className="w-[75px] h-[25px]" />

   <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>

   </ul>
  </nav>


);

export default Navbar;
