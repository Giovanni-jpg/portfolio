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
          At 24 years old, I'm a graduate of IMT Mines Albi in France with a
          master in Computer Science. I live by two passions that are
          programming and sports; I frequent the gym twice a week, recently
          started judo, 3 times a week on the mat. Also had the pleasure to
          organize a large-scale volleyball tournament back in engineering
          school. On the programming side, I Recently co-founded LaceLink, a
          platform designed to connect sneaker shops with sellers, employing my
          skills in full-stack development using Next and Supabase.
        </p>

        <br />

        <p className='text-xl'>
          Currently based in Barcelona, I've gained hands-on experience at
          AllRead, a machine learning startup, where I strengthened my skills in
          front-end development. I've then had the pleasure to start working for
          Oracle as a production engineer which is what I've been busy doing for
          over a year now. I'm fluent in French, English, and have a Spanish
          professional level, which opens doors for me both professionally and
          culturally. As I look to the future, I wish to continue innovating in
          a full-time Software Engineer role, ideally where I can fuse my
          technical expertise with my need for teamwork, problem-solving and
          keep learning along the way.
        </p>
      </div>
    </div>
  );
};

export default About;
