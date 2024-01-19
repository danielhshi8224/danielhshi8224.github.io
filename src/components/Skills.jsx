import React from 'react'
import Python from '../assets/python.svg';
import GitHub from '../assets/github.png';
import RLogo from '../assets/R.png';
import JavaScript from '../assets/javascript.png';
import firebase from '../assets/firebase.png';
import overleaf from '../assets/overleaf.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192a] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-green-500'>Experience</p>
            <p className='py-4'>These are the technologies I've worked with.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-y-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt='Github icon' />
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={RLogo} alt='R icon' />
                <p className='my-4'>R</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='JS icon' />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={firebase} alt='firebase icon' />
                <p className='my-4'>FireBase</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={overleaf} alt='overleaf icon' />
                <p className='my-4'>Overleaf</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Skills