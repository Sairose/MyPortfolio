import React from 'react'
import About from './About'
import Background from './Background'
import ReachMe from './ReachMe'
import Links from './Links'


export default function Hero() {
  return (
    <>
        <div id="hero" className='w-full h-screen flex flex-col items-center justify-center py-9 gap-2 sm:flex-row'>
            <div id="hero-left" className='basis-1/2 text-center  flex flex-col items-center justify-center gap-4 '>
                <h1 className='text-5xl md:text-6xl '>Welcome to My Design Portfolio</h1>
                <p className='text-3xl mt-2 text-[#ff4500]'>Front-end Developer</p>
                <Links/>
            </div>
            <div id="hero-right" className='basis-1/2 flex justify-center items-center'>
                <img  src="a.jpg" alt="error" className="h-[300px] w-[300px] object-cover md:h-[400px] md:w-[400px]"/>
            </div>
        </div>
        <About/>
        <Background/>
        <ReachMe/>
    </>
  )
}
