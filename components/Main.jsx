import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-xl tracking-widest text-gray-500'>
            Welcome, my name is
          </p>
          <h1 className='py-4 text-gray-400'>
            <span className='text-[#00bfff]'>Isaac Lal</span>
          </h1>
          <h2 className='py-2 text-gray-400'>A Web Developer</h2>
          <p className='py-4 pb-20 text-gray-300 max-w-[70%] m-auto'>
            I&apos;m learning about the technology used to build beautiful,
            stunning, and responsive websites to show to others. I currently
            specialize in front-end visual aspects of the website, while
            learning about the back-end aspect of what goes on behind the
            scenes.
          </p>
          <p className='uppercase tracking-widest text-[#00bfff]'>
            Let&apos;s Connect
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/isaac-lal/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/isaac-lal'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.instagram.com/lalify8/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                <AiOutlineInstagram />
              </div>
            </a>
            <a
              href='mailto:isaaclal124@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
