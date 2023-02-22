import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactImg from '../public/assets/contact.jpg';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_il1yuww',
        'template_ogc57ri',
        form.current,
        'o65rE5oGK3ae8zJ6P'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Contact
        </p>
        <h2 className='py-4 text-gray-500'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-100 rounded-xl p-4 hover:shadow-[#00bfff] ease-in duration-100'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className='rounded-xl ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Isaac Lal</h2>
                <h3>Front-End Developer</h3>
                <p className='py-4'>
                  I am available for communication through email. Just fill out
                  the form to send me an email and we'll talk!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-[#00bfff]'>Let's Connect</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/isaac-lal/'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>

                  <Link href='https://github.com/isaac-lal' target='_blank'>
                    <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href='mailto:isaaclal124@gmail.com' target='_blank'>
                    <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='' target='_blank'>
                    <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-100 rounded-xl lg:p-4 hover:shadow-[#00bfff] ease-in duration-100'>
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                      type='text'
                      name='user_name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                      type='tel'
                      name='user_number'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                    type='email'
                    name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='cursor-pointer hover:scale-105 w-full p-4 text-gray-100 mt-4 '>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-100 p-4 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='hover:text-[#00bfff]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
