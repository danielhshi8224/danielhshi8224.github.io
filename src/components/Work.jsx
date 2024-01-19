import React from 'react'
import gdsc from '../assets/gdsc.png'
import wm from '../assets/wm.png'
import igem from '../assets/igem.png'
const Overlay = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-2xl font-bold">Coming Soon...</span>
      </div>
    );
  };
const Work = () => {
  return (
    <div name='work'className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-500'>Work</p>
                <p className='py-6'>Check out some of my work!</p>
            </div>

            <div 
            
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${wm})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        Node Status Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>{/*replace / with link to demo of website*/}
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code {/*replace / with link to github repo*/}
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${igem})`}} className=' relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <Overlay />
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        2024 iGEM Wiki
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>{/*replace / with link to demo of website*/}
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code{/*replace / with link to github repo*/}
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${gdsc})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <Overlay />
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        Global Americas Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'> {/*replace / with link to demo of website*/}
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code{/*replace / with link to github repo*/}
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work