import { useState } from 'react';
import {
  iconHamburger,
  iconClose,
  iconArrowDark,
  iconArrowLight,
  logo,
} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [openId, setOpenId] = useState(undefined);

  return (
    <nav className='w-full flex py-6 ml-10 justify-between items-center navbar'>
      <img src={logo} alt='blogr' className='w-[75px] h-[30px]' />

      <ul className='list-none sm:flex hidden ml-10 justify-start items-center flex-1'>

        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-overpass
            font-normal
            hover:underline
            text-[12px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
          text-white`}>
            <a
              className='float-left'
              onClick={() => setOpenId((prev) => (prev === nav.id ? undefined : nav.id))}
              href={`#${nav.id}`}>
              {nav.title}
              <img
                className='ml-2 mt-1 cursor-pointer float-right w-[9px] h-[6px]'
                src={iconArrowLight}
                onClick= {() => setSelected(iconArrowDark)}
              />
            </a>

            <div className={`${openId !== nav.id ? "hidden" : "relative"} mr-10`}>
              <ul className='list-none mt-10 absolute dropdown-background'>
                {nav.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-ubuntu font-normal text-black cursor-pointer hover:font-bold ${
                      index !== nav.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>              
          

        ))}
      </ul>

      
    </nav>
  );
};

export default Navbar;
