import React from 'react'
import Hero from './components/Hero'
import DarkLightMode from './components/DarkLightMode';
import { useState } from 'react';
import NavBar from './components/NavBar';


export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <div className={`px-4 ${toggle? 'bg-white text-zinc-950': 'bg-zinc-950 text-white'}`}>
      <div className='w-full flex justify-between p-4'>
        <NavBar/>
        <DarkLightMode toggle = {toggle} handleToggle = {handleToggle} />
      </div>
      <Hero />
    </div>
  )
}
