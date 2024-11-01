import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Links() {
  return (
    <div className='flex gap-4'>
        <a href="https://www.facebook.com/sairose.stha.1"  className='w-[40px] h-[40px] border-2 border-[#30C1BA] rounded-full flex justify-center items-center duration-500 hover:bg-[#30C1BA] hover:translate-x-[-4px] hover:translate-y-[-4px]'><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/sairose-shrestha-162bb6299/ " className='w-[40px] h-[40px] border-2 border-[#30C1BA] rounded-full flex justify-center items-center duration-500 hover:bg-[#30C1BA] hover:translate-x-[-4px] hover:translate-y-[-4px]'><FaLinkedin/></a>
        <a href="https://github.com/Sairose " className='w-[40px] h-[40px] border-2 border-[#30C1BA] rounded-full flex justify-center items-center duration-500 hover:bg-[#30C1BA] hover:translate-x-[-4px] hover:translate-y-[-4px]'><FaGithub/></a>
    </div>
  )
}
