import React from 'react'

export default function About() {
  return (
    <>
    <div id="hero" className='w-full h-screen flex flex-col items-center justify-center gap-2 sm:flex-row
    sm:pl-10 '>
            <div id="hero-left" className='basis-1/2 text-center  flex flex-col justify-center gap-4 '>
                <h1 className='text-5xl md:text-6xl'>Who is Sairose?</h1>
                <p className='text-3xl mt-2 text-[#ff4500]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur corporis cupiditate delectus explicabo quas, laudantium incidunt eius officia, blanditiis voluptas libero aut quibusdam tenetur aliquam dolorum atque nulla sequi. Facilis.</p>
            </div>
            <div id="hero-right" className='basis-1/2 flex justify-center items-center'>
                <img  src="a.jpg" alt="error" className="h-[300px] w-[300px] object-cover md:h-[400px] md:w-[400px]"/>
            </div>
        </div>
    </>
  )
}
