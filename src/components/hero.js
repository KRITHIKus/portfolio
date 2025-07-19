import Heroimg from "../assests/hero.png";
import { AiOutlineReddit, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
  const config = {
    hi: "Hi,",
    im: "I'm ",
    name: "Krithik U S",
    social: {
      reddit: "#",
      github: "https://github.com/KRITHIKus",
      leet: "https://leetcode.com/krithikus/",
      linkedin: "https://www.linkedin.com/in/krithik-u-s-a545a4326/",
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-20 bg-primary justify-center text-center md:text-left">
      
      {/* Left Content with Animation */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="md:w-1/2 flex flex-col"
      >
        <h1 className="text-yellow-100 text-5xl font-hero-font2 leading-snug">
          {config.hi} <br />
          {config.im} <span className="text-black">{config.name}</span>
        </h1>

        {/* Typing Animation */}
        <p className="text-2xl text-yellow-400 mt-4">
          <ReactTyped
            strings={[
              "I'm a Web Developer",
              "I build modern websites",
              "I create full-stack applications",
              "I love coding & learning new tech",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </p>

        {/* Social Links with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.5 }} 
          className="flex justify-center md:justify-start gap-6 py-6"
        >
          <a href={config.social.reddit} className="hover:text-yellow-400 transition-all duration-300">
            <AiOutlineReddit size={40} />
          </a>
          <a href={config.social.github} className="hover:text-yellow-400 transition-all duration-300">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.linkedin} className="hover:text-yellow-400 transition-all duration-300">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href={config.social.leet} className="hover:text-yellow-400 transition-all duration-300">
            <SiLeetcode size={37} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image with Animation */}
      <motion.img 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        className="md:w-1/3 w-2/3 mt-8 md:mt-0 drop-shadow-xl" 
        src={Heroimg} 
        alt="Hero"
      />
    </section>
  );
}
