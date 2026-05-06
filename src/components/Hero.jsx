import React from 'react'
import { motion } from 'framer-motion'
import { RxOpacity } from 'react-icons/rx'
import '../index.css'
// ✅ Ye import add karo
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gray-900 from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    > 
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        {/* Left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi! I'm <span className='text-purple-500'>Abbas Manzoor</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Full Stack Developer
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            I create stunning web experiences with modern technologies and innovative design solutions.
          </p>
          <div>
            <a href='#projects' className='bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 mr-4'>
              View work
            </a>
            <a href='#contact' className='border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300'>
              Contact me
            </a>
          </div>
        </div>
        
        {/* Right side image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 from-purple-500 to-pink-500 rounded-full opacity-70'></div>
            <motion.img 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
              // ✅ Yeh change karo
              src={profileImage} 
              alt='Profile' 
              className='relative w-64 h-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-purple-500 shadow-lg' 
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero