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
        {/* Image section – shown first */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-70 animate-pulse"></div>
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              src={profileImage}
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Text section */}
        <div className="md:w-1/2">
          {/* Responsive font sizes to keep the whole name on one line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 whitespace-nowrap">
            Hi! I'm <span className="text-purple-500">Abbas Manzoor</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            React.js Frontend Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Specializing in building responsive high-performance web applications with React.js, TypeScript and Tailwind CSS. Let's bring your ideas to life.
          </p>
          <div className="flex flex-wrap gap-3">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 cursor-pointer inline-block"
            >
              View My Projects →
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
              Let's Talk ✉️
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;