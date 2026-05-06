import React from 'react'
import { aboutInfo } from '../assets/assets'
import { motion } from 'framer-motion'
// ✅ Ye import add karo
import profileImage from '../assets/profile.jpg'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-gray-900 text-white'
    >
      <div className='container mx-auto px-6'>
        
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple-500'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        <div className='flex flex-col md:flex-row items-center gap-12'>
          
          <div className='md:w-1/2'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full rounded-2xl object-cover'
              // ✅ Yeh change karo
              src={profileImage}
              alt='profile'
            />
          </div>

          {/* Baki code same rahega */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-2 md:p-4'>
              
              <h3 className='text-2xl font-bold mb-4'>My Journey</h3>

              <p className='text-gray-400 mb-4 text-sm leading-relaxed'>
                I am a passionate web developer with a love for creating beautiful and functional websites. My journey in web development started a few years ago when I discovered my interest in coding and design. Since then, I have been dedicated to honing my skills and staying up-to-date with the latest technologies in the field.
              </p>

              <p className='text-gray-400 mb-8 text-sm leading-relaxed'>
              I am focused on growing as a developer building real-world projects and gaining practical experience. I am always open to learning, collaborating, and exploring new opportunities.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {aboutInfo.map((item, index) => (
                  <div
                    key={index}
                    className='bg-gray-800 rounded-xl p-4 hover:translate-y-1 transition'
                  >
                    <div className='text-purple-500 text-2xl mb-2'>
                      {item.icon && <item.icon />}
                    </div>

                    <h3 className='text-md font-semibold mb-1'>
                      {item.title}
                    </h3>

                    <p className='text-gray-400 text-xs'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About