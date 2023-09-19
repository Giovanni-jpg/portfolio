import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-10'>
          At 23 years old, I'm a graduate of IMT Mines Albi in France with a
          master in Complex Computer Science. I live by two passions that are
          programming and sports; I frequent the gym three times a week, have
          swum for a decade, and once organized a large-scale volleyball
          tournament. Recently, I co-founded LaceLink, a platform designed to
          connect sneaker shops with sellers, employing my skills in full-stack
          development using Next and Supabase.
        </p>

        <br />

        <p className='text-xl'>
          Currently based in Barcelona, I've gained hands-on experience at
          AllRead, a machine learning startup, where I strengthened my skills in
          front-end development. I'm fluent in French, English, and have a
          Spanish conversational level, which opens doors for me both
          professionally and culturally. As I look to the future, I wish to
          continue innovating in a full-time Junior Software Engineer role
          starting from October 2023, ideally where I can fuse my technical
          expertise with my need for teamwork and problem-solving.
        </p>
      </div>
    </div>
  );
};

export default About;
