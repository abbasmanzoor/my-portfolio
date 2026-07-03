import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import '../index.css';
import profileImage from '../assets/profile.jpg';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gray-900"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi! I'm <span className="text-purple-500"> Abbas Manzoor
</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
          Frontend Developer 
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and innovative design solutions.
          </p>
         <div className="flex flex-wrap gap-3">
  <ScrollLink
    to="projects"
    smooth={true}
    duration={500}
    offset={-70}
    className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 cursor-pointer inline-block"
  >
    View work
  </ScrollLink>

<a
  href={assets.resume}
  download="Abbas_Manzoor_Resume.pdf"
  className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition duration-300 inline-block"
>
  📄 Download CV
</a>

  <a
    href="#contact"
    className="border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300 inline-block"
  >
    Contact me
  </a>
</div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 from-purple-500 to-pink-500 rounded-full opacity-70"></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
              src={profileImage}
              alt="Profile"
              className="relative w-64 h-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;