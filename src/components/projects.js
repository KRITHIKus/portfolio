
import bullseye from '../assests/bullseye.png';
import blog from '../assests/a2d.png';
import farmingAI from '../assests/Farming-ai.png';
import { motion } from 'framer-motion';

export default function Projects() {
  const config = {
    projects: [
      {
        image: bullseye,
        title: 'Bullseye–URL Safety Scanner',
        desc: 'A modern cybersecurity tool that detects malicious URLs using real-time threat analysis and intelligent crawling.',
        link: 'https://bullseye-n9jz.onrender.com/',
      },
      {
        image: blog,
        title: 'Admin-Centric Blogging Platform',
        desc: 'A MERN stack app with Firebase Authentication, enabling an interactive admin dashboard for content management and user engagement.',
        link: 'https://a2d-blog.onrender.com',
      },
      {
        image: farmingAI,
        title: 'Farming AI Assistant',
        desc: 'An AI-powered platform using Python and ML to help farmers with crop recommendations, weather predictions, and market price trends.',
        link: 'https://farmer-ai-x2hw.onrender.com/',
      },
    ],
    maindesc: 'Explore some of my key projects, ranging from AI-powered applications to full-stack web development solutions.',
    maindesc2: 'Each project reflects my expertise in creating innovative and interactive applications with modern technologies.',
  };

  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center"
      >
        <h1 className="text-4xl border-b-4 border-secondary inline-block font-bold mb-5">Projects</h1>
        <p className="font-hero-font2 text-lg">{config.maindesc}</p>
        <p className="font-hero-font2 text-lg">{config.maindesc2}</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="w-full mt-10">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 px-5">
          {config.projects.map((project, index) => (
            <motion.a
              key={project.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full sm:w-[45%] lg:w-[30%] transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                {/* Project Image */}
                <img className="h-[220px] w-full object-cover transform group-hover:scale-110 transition duration-500" src={project.image} alt={project.title} />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                  <h2 className="text-xl font-bold text-yellow-400">{project.title}</h2>
                  <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
                  <a
                    className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-yellow-500 transition duration-300"
                    href={project.link}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
