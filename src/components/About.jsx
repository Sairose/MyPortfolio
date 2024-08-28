import React from 'react'

export default function About() {
  return (
    <>
    <div id="hero" className='w-full flex flex-col items-center justify-center gap-2 sm:flex-row
    sm:pl-10 '>
            <div id="hero-left" className='basis-1/2   flex flex-col justify-center gap-4'>
                <h1 className='text-5xl md:text-6xl'>Who is Sairose?</h1>
                  <p className=' text-2xl sm:h-[500px] sm:overflow-auto md:text-3xl mt-2 leading-10 md:leading-[50px]'>Student At Ambition College studing <span className='text-[#30C1BA]'>BCA (Bachelor in Computer Application)</span>. 
                    Has got skill in <span className='text-[#30C1BA]'>React js</span> and JavaScript programmer with a strong foundation in web development technologies including HTML, CSS, and API integration and <span className='text-[#30C1BA]'>Tailwind Css</span>. 
                    Have Experience in using <span className='text-[#30C1BA]'>Git</span> for version control and possessing excellent problem-solving and debugging skills.
                  </p>
            </div>
            <div id="hero-right" className='basis-1/2 flex justify-center items-center'>
                <img  src="a.jpg" alt="error" className="h-[300px] w-[300px] object-cover md:h-[400px] md:w-[400px]"/>
            </div>
        </div>
    </>
  )
}
