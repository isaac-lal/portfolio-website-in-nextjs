import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed w-full h-20 shadow-xl bg-black shadow-[#222222] z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Image
          src='/../public/assets/logo.png'
          alt='/'
          width='150'
          height='100'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                About
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                Projects
              </li>
            </Link>
            <Link href='/'>
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
              <Image
                src='/../public/assets/logo.png'
                width='100'
                height='75'
                alt='/'
              />
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
              <Link href='/'>
                <li className='py-4 text-sm uppercase hover:border-b-2 transition-0.3 border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                  Home
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                  About
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                  Skills
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                  Projects
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm uppercase hover:border-b-2 transition-all border-[#00bfff] hover:text-[#00bfff] ease-in duration-100'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#00bfff]'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
