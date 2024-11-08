import React from 'react'
import { ReachOut } from '../assets/asstes'

export default function ReachMe() {
  return (
    <div className='w-full pt-10 flex flex-col gap-2 sm:pl-10'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl mb-10'>Reach Out To Me</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                ReachOut.map((curValue, indx) =>{
                    return(
                        <div key={indx} className='border-2 border-[#30C1BA] rounded-lg m-4 py-3 px-5 text-center cursor-pointer 
                        transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-lg hover:shadow-emerald-300'>
                            <h3>{curValue.heading}</h3>
                            <p>{curValue.data}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
