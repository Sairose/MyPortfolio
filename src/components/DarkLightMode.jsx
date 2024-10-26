import { useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { DLContext } from "./DarkLightContext";


export default function DarkLightMode() {
  const {toggle,handleToggle} = useContext(DLContext);
  return (
    <div className="flex items-center gap-1">
      <div id='outer-button' className={`w-[60px] h-6 sm:w-[80px] sm:h-8 border-2 ${toggle? 'border-black': 'border-[#30C1BA]' } rounded-full cursor-pointer`} 
      onClick={handleToggle}>
        <div id="inner-circle" className={`w-[30px] sm:w-[40px] h-full rounded-full duration-300  ${toggle? 'translate-x-[90%] bg-zinc-950' : 
          'translate-x-0 bg-white'
        }`}></div>
      </div>
      <div id="icons">
        {toggle? <IoMdMoon  className="w-[60px] h-6 sm:w-[80px] sm:h-8"/>:<IoMdSunny className="w-[80px] h-8"/>}
      </div>
    </div>

  )
}

