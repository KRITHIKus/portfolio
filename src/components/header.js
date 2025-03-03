// import { Bars3Icon} from '@heroicons/react/24/solid'
// import { useState } from 'react'

// export default function Header(){
  
//   const [toggle,setToggle]=  useState(false)
//   return (
//     <div className={toggle ? 'relative' : ''}>
//       {/* Overlay when toggle is active */}
//       {toggle && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setToggle(false)}></div>}
  
//       <header className="font-bold text-black flex justify-between px-5 py-2 bg-sec relative z-50">
//         <a href="#" className="text-yellow-400 font-hero-font2">KRITHIK</a>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:block"> 
//           <ul className="flex text-white">
//             <li className="hover:text-yellow-400"><a href="/">Home</a></li>
//             <li className="hover:text-yellow-400"><a href="#about">About</a></li>
//             <li className="hover:text-yellow-400"><a href="#projects">Projects</a></li>
//             <li className="hover:text-yellow-400"><a href="#resume">Resume</a></li>
//             <li className="hover:text-yellow-400"><a href="#contacts">Contacts</a></li>
//           </ul>
//         </nav>
  
//         {/* Mobile Navigation */}
//         {toggle && (
//           <nav className="absolute top-10 left-0 w-full bg-gray-600 bg-opacity-80 mobile-nav z-50 md:hidden">
//             <ul onClick={() => setToggle(false)} className="flex flex-col text-white text-center">
//               <li className="py-2 hover:text-yellow-400"><a href="/">Home</a></li>
//               <li className="py-2 hover:text-yellow-400"><a href="#about">About</a></li>
//               <li className="py-2 hover:text-yellow-400"><a href="#projects">Projects</a></li>
//               <li className="py-2 hover:text-yellow-400"><a href="#contacts">Contacts</a></li>
//             </ul>
//           </nav>
//         )}
  
//         {/* Toggle Button */}
//         <button onClick={() => setToggle(!toggle)} className="block md:hidden z-50">
//           <Bars3Icon className="text-white h-5" />
//         </button>
//       </header>
//     </div>
//   );
  
    
// }
 



import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="font-bold text-black flex justify-between items-center px-6 py-4 bg-sec shadow-md relative z-50">
      {/* Logo */}
      <a href="#" className="text-yellow-400 text-2xl font-hero-font2 tracking-wide">
        KRITHIK
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Projects", "Resume", "Contacts"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-yellow-400 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className="block md:hidden text-white"
      >
        <Bars3Icon className="h-7 w-7" />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setToggle(false)}
          className="absolute top-5 right-6 text-white text-3xl"
        >
          ✖
        </button>

        <nav className="flex flex-col text-white space-y-6 text-2xl">
          {["Home", "About", "Projects", "Resume", "Contacts"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setToggle(false)}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
