import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
  
  const [toggle,setToggle]=  useState(false)
    return  <header className="font-bold text-black flex justify-between px-5 py-2 bg-sec">
        <a href="#" className='text-yellow-400 font-hero-font' >KRITHIK</a>
        <nav className="hidden md:block"> <ul className="flex text-white ">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
        </nav>

      { toggle &&  <nav className="absolute top-10 left-0 w-full bg-gray-600 mobile-nav z-50 md:hidden " >
             <ul onClick={()=>setToggle(!toggle)} className="flex-col text-white mobile-nav ">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
        </nav>}
       <button onClick={()=>setToggle(!toggle)}className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
    
}
 


