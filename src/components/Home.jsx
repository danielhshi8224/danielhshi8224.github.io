import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Daniel Shi
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a freshman at W&M.
            </h2>
            <p className='py-4 max-w-[700px] text-[#8892b0]'>I'm currently taking coursework in computer science, mathematics, and data science, while working on personal projects in full-stack web development and machine learning. Outside of school, you'll probably find me at the gym or on a hike with friends.

            </p>
            <div>
                <button className='text-white group border -2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500'>
                <Link 
       
       to="work" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       View Work
     </Link>
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight  className='ml-3'/>
                    </span>
                    
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Home