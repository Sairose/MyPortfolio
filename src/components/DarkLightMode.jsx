import React, { useState } from 'react'

export default function DarkLightMode({toggle,handleToggle}) {
  
  return (
    <div id='outer-button' className='w-[80px] h-8 border-2 border-red-200 rounded-full cursor-pointer' onClick={handleToggle}>
      <div id="inner-circle" className={`w-[40px] h-full rounded-full bg-red-400 duration-300  ${toggle? 'translate-x-[90%]' : 
        'translate-x-0'
       }`}></div>
    </div>
  )
}
