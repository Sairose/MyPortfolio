import React, { useContext } from 'react'
import DarkLightMode from './DarkLightMode'
import { DLContext } from "./DarkLightContext";

export default function NavBar() {
  const {toggle} = useContext(DLContext);
  return (
    <>
      <div className='w-full flex justify-between p-4'>
        <div id="logo" className={`text-4xl  ${toggle? 'border-black': 'border-[#30C1BA]'}`}>
            SAIROSE
        </div>
        <DarkLightMode/>
      </div>
    </>
  )
}
