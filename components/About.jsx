import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>// My Journey</p>
          <p className='py-2 text-gray-600'>
            I was always fascinated with websites ever since I was a kid
            watching videos on youtube.com, searching things up on google.com,
            playing games on multiple websites, and more. I loved how technology
            made the ideas of websites come to life, but I never really
            understood how it was made. I knew I wanted to be a part of the
            process for years, but I really haven't gotten my head engaged in it
            until August 2022.{' '}
          </p>

          <p className='py-2 text-gray-600'>
            With the goal of creating my own professional website, I had decided
            to learn about HTML and CSS to start. These two technologies helped
            me to create a very basic website with limited functionality, but
            still looked decent. After that, I have devoted most of my time in
            mastering JavaScript and learning about Data Structures &
            Algorithms. After JavaScript was done, I am now using my time to
            learn the ins and outs of React and Tailwind CSS, which are the
            technologies being used to make this website.{' '}
          </p>

          <p className='py-2 text-gray-600'>
            In my experience in being a front-end developer, I have loved all
            the technologies that I am using and how it's evolving my creativity
            and making me more efficient overall. I am now mastering my craft in
            front-end development and I am slowly going to dabble in the
            back-end to try to become a full-stack developer. But for now, I am
            loving Web Development and it really helps me to appreciate the
            product that I create in the end.
          </p>

          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out my personal website!
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
