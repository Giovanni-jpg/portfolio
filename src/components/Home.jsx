import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FaChevronRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full pt-20 md:pt-0 bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi there, I'm a Full Stack Engineer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
          My name is Giovanni. I have a passion for languages, whether they are programming languages or spoken dialects. As a Full Stack Engineer with experience in Next.js, React, Vue, and TailwindCSS, I enjoy diving deep into technology. I hold a degree from IMT Mines Albi and am currently seeking a Full Stack Engineering position in Barcelona.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-stone-900 to-yellow-700 cursor-pointer'>
              View my work
              <span className='ml-1 group-hover:rotate-90 duration-300'>
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
