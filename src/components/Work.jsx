import React from 'react'
import { motion } from 'framer-motion'
import { workData } from "../assets/assets";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="experience"
      className="py-20 bg-gray-900 "
    >
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple-500">Experience</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my work experience
        </p>

        <div className="max-w-3xl mx-auto space-y-12">
          {workData.map((data, index) => (
            
            <div
              key={index}
              className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* timeline dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-purple-500"></div>

              {/* content */}
              <div className="bg-gray-800 p-6 rounded-lg ">
                <div className='flex justify-between items-start mb-2'> 
                  <h3 className="text-xl font-semibold">{data.role}</h3>
                  <span className="text-purple-500 text-sm">{data.duration}</span>
                </div>
                <p className="text-gray-400">{data.company}</p>
                <p className="mt-2 text-gray-300">{data.description}</p>
              </div>

            </div>

          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Work;