import React, { useContext } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar';
import { DLContext } from './components/DarkLightContext';


export default function App() {
  const  {toggle} = useContext(DLContext);
  return (
    <div className={`px-4 ${toggle? 'bg-white text-zinc-950': 'bg-zinc-950 text-white'}`}>
      <NavBar/>
      <Hero />
    </div>
    
  )
}
