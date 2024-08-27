import React, { useState } from 'react'

export default function Background() {
    const [hide, setHide] = useState(false);

    const handleShowHide = (data) => {
        if (data == 'skill') {
            setHide(false);
        }
        else if (data == 'education') {
            setHide(true);
        }
    }
    return (
        <div className='w-full min-h-[500px] pt-10 flex flex-col  gap-2 sm:pl-10'>
            <h1 className='text-5xl md:text-6xl mb-10'>My Background</h1>
            <div id="info" className='flex gap-10 mb-5'>
                <div id="info-one">
                    <h2 onClick={() => handleShowHide('skill')} className={`text-3xl relative 
                    before:absolute  before:h-1 before:bg-red-400 before:bottom-[-2px] 
                    before:duration-300 ${hide ? 'before:w-0' :'before:w-full'} cursor-pointer`}>Skill</h2>
                </div>
                <div id="info-two">
                    <h2 onClick={() => handleShowHide('education')} className={`text-3xl relative 
                    before:absolute before:h-1 before:bg-red-400 before:bottom-[-2px] 
                    before:duration-300 ${hide ? 'before:w-full': 'before:w-0'} cursor-pointer`}>Education</h2>
                </div>
            </div>
            <div id="list" className='text-2xl'>
                <ul className={`${hide ? 'hidden' : 'block'}`}>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>JS</li>
                </ul>
                <ul className={`${hide ? 'block' : 'hidden'}`}>
                    <li>SEE: ST Paul's</li>
                    <li>+2 : COHED</li>
                    <li>Bachelor : BCA</li>
                </ul>
            </div>
        </div>
    )
}
