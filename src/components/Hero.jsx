import React from 'react'
import About from './About'
import Background from './Background'
import ReachMe from './ReachMe'
import Links from './Links'
import MyProject from './MyProject'


export default function Hero() {
  return (
    <>
      <div id="hero" className='w-full h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl text-center'>Welcome to My Design Portfolio</h1>
        <p className='text-3xl mt-2 text-[#ff4500]'>Front-end Developer</p>
        <Links />
      </div>
      <About />
      <Background />
      <MyProject/>
      <ReachMe />
    </>
  )
}
