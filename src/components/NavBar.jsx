import React from 'react'
import DarkLightMode from './DarkLightMode'

export default function NavBar() {
  return (
    <>
      <div className='w-full flex justify-between p-4'>
        <div id="logo" className='text-4xl text-[#30C1BA] '>
            SAIROSE
        </div>
        <DarkLightMode/>
      </div>
    </>
  )
}
