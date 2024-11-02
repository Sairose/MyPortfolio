import React,{useRef, useState} from 'react'
import About from './About'
import Background from './Background'
import ReachMe from './ReachMe'
import Links from './Links'
import MyProject from './MyProject'


export default function Hero() {
  const head1 = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  function handleH1(e){
    // console.log(e.clientX, e.clientY)
    setXVal((e.clientX - head1.current.getBoundingClientRect().x - head1.current.getBoundingClientRect().width/2)/40);
    setYVal(-(e.clientY - head1.current.getBoundingClientRect().y - head1.current.getBoundingClientRect().height/2)/10)
    head1.current.style.transform = `rotateX(${xVal}deg) rotateY(${yVal}deg)`
  }
  return (
    <>
      <div onMouseMove={handleH1} id="hero" className='w-full h-screen flex flex-col items-center justify-center gap-4 '>
        <h1 ref={head1} className='font-extrabold text-center duration-200 ease-linear '>
          <span className='text-4xl sm:text-7xl lg:text-9xl'>Welcome to My</span> 
          <br/> 
          <span className='text-3xl sm:text-6xl lg:text-7xl'>Design Portfolio</span> 
        </h1>
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
