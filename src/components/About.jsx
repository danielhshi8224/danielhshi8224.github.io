import React from 'react'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-green-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Daniel Shi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm a college student studying computer science and data science. With a background in peer-reviewed research, statistical analysis, and computational problem-solving, I am deeply passionate about utilizing these skills in innovative ways. My ambition is to apply the power of machine learning and neural networks to marine science and ocean conservation. By integrating cutting-edge technology with environmental stewardship, I aim to contribute to the sustainable management and protection of our oceans.</p>  
            
          </div>
        </div>
    </div>
  </div>
);
};

export default About