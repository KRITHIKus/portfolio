// import Aboutimg from '../assests/about.png'
// export default function About(){

//     const config={
//         line1:' Hi, I’m Krihtik. I’m a fresher looking for internship opportunities in web development.',
//         line2:'    I enjoy learning new technologies and working on projects that challenge me. I’m particularly interested in both front-end and back-end development.',
//         line3:'Bachelor of Computer Applications',
//         line4:'BCA',
//         college:'East point college of higher education',
//         year:'3rd year',
//         on:'Ongoing'
//     }
//     return <section className='flex flex-col md:flex-row bg-sec px-5 ' id='about'>
//         <div className='md:col w-1/2 py-5'>
//             <img src={Aboutimg}/>
//         </div>

//         <div className='md:col w-1/2 flex justify-center'> 
//         <div className='flex flex-col justify-center text-white'>  
//             <h1 className='text-4xl border-b-4 border-primary mb-3 w-[170px] font-hero-font2'>About Me</h1>
//             <p className='pb-5 font-hero-font2 font-hero-font2'> {config.line1}</p>
//             <p className='pb-5'>{config.line2} </p>
            
//             <h1 className='text-4xl border-b-4 border-primary mb-3 w-[170px] font-bold'>Education</h1>

//             <p className='pb-5'>
//   <strong>{config.line3} ({config.line4})</strong> <br/> {config.college}
//   <br/> 
//   <em className='font-hero-font2'>{config.year} {config.on}</em>
// </p>

//             </div>
           


//         </div>
//     </section>
// }

import Aboutimg from "../assests/about.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const config = {
    line1: "Hi, I'm Krithik, a passionate full-stack developer with experience in AI-based applications.",
    line2: "I recently completed an internship where I developed a Farming AI application using Python and Machine Learning. This project focused on helping farmers with crop recommendations and market analysis.",
    line3: "I have built multiple projects, including an Admin-Centric Blogging Website with an interactive admin dashboard for content management.",
    line4: "I also have a strong streak on LeetCode, where I continuously enhance my problem-solving skills and explore advanced algorithms.",
    educationTitle: "Education",
    degree: "Bachelor of Computer Applications (BCA)",
    college: "East Point College of Higher Education",
    year: "3rd Year (Ongoing)",
  };

  return (
    <section ref={ref} className="flex flex-col md:flex-row bg-sec px-6 py-20 items-center justify-center" id="about">
      
      {/* Left Image - Animates when in view */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 py-5"
      >
        <img className="w-full md:w-[80%] drop-shadow-xl" src={Aboutimg} alt="About Me" />
      </motion.div>

      {/* Right Text Content - Animates when in view */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:w-1/2 flex flex-col text-white text-center md:text-left"
      >
        <h1 className="text-4xl font-bold border-b-4 border-primary mb-5 w-[170px] mx-auto md:mx-0">
          About Me
        </h1>
        <p className="pb-5 text-gray-200 font-hero-font2">{config.line1}</p>
        <p className="pb-5 text-yellow-300 font-hero-font2">{config.line2}</p>
        <p className="pb-5 text-yellow-300 font-hero-font2">{config.line3}</p>
        <p className="pb-5 text-yellow-300 font-hero-font2">{config.line4}</p>

        <h1 className="text-4xl font-bold border-b-4 border-primary mb-5 w-[170px] mx-auto md:mx-0">
          {config.educationTitle}
        </h1>
        <p className="pb-5 text-gray-300 font-hero-font2">
          <strong>{config.degree}</strong> <br />
          {config.college} <br />
          <em className="text-gray-400 font-hero-font2">{config.year}</em>
        </p>
      </motion.div>

    </section>
  );
}
