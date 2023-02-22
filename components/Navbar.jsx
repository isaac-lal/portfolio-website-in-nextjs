import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl bg-black shadow-[#222222] z-[100]'
          : 'fixed w-full h-20 shadow-xl bg-black z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Link
          href='https://github.com/isaac-lal/portfolio-website'
          target='_blank'
        >
          <Image
            src='/../public/assets/logo.png'
            alt='/'
            width='125'
            height='100'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link
                href='https://github.com/isaac-lal/portfolio-website'
                target='_blank'
              >
                <Image
                  src='/../public/assets/logo.png'
                  width='100'
                  height='75'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-[#00bfff] p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b-4 border-gray-500 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-gray-400'>
                Welcome to my website!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm uppercase hover:border-b-2 transition-0.3 border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'
                >
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'
                >
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'
                >
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'
                >
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#00bfff]'>
                Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/isaac-lal/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/isaac-lal'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/lalify8/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                    <AiOutlineInstagram />
                  </div>
                </a>
                <a
                  href='mailto:isaaclal124@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
