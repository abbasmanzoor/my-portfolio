import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUserGraduate } from 'react-icons/fa'

const About = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Started Learning",
      description: "Discovered passion for web development and started with HTML, CSS, and JavaScript.",
      icon: FaUserGraduate,
      color: "purple"
    },
    {
      year: "June-2026",
      title: "Mastered React",
      description: "Dived deep into React.js, built multiple projects, and strengthened frontend skills.",
      icon: FaCode,
      color: "pink"
    },
    {
      year: "2026",
      title: "Professional Growth",
      description: "Building real-world projects, freelancing, and exploring modern frameworks like Next.js.",
      icon: FaRocket,
      color: "blue"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-gray-900 text-white relative overflow-hidden'
    >
      {/* Removed the overlay to keep background solid gray-900 */}
      
      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple-500'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Left Side - Timeline */}
          <div>
            <h3 className='text-2xl font-bold mb-8 flex items-center gap-2'>
              <span className='text-purple-500'>My</span> Journey
            </h3>

            <div className='relative pl-8 border-l-2 border-purple-500/30'>
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='mb-8 relative'
                >
                  <div className='absolute -left-10 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-900'></div>
                  <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition duration-300'>
                    <span className='text-purple-400 text-sm font-bold'>{item.year}</span>
                    <h4 className='text-xl font-semibold mt-1'>{item.title}</h4>
                    <p className='text-gray-400 text-sm mt-2'>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Skills Card */}
          <div>
            <div className='bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20'>
              <h3 className='text-2xl font-bold mb-6'>
                <span className='text-purple-500'>What</span> I Do
              </h3>

              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl'>
                  <div className='w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0'>
                    <FaCode className='text-purple-400' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Frontend Development</h4>
                    <p className='text-gray-400 text-sm'>React.js, TypeScript, Tailwind CSS</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl'>
                  <div className='w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0'>
                    <FaRocket className='text-pink-400' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>UI/UX Design</h4>
                    <p className='text-gray-400 text-sm'>Responsive, accessible, and beautiful interfaces</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl'>
                  <div className='w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0'>
                    <FaUserGraduate className='text-blue-400' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Continuous Learning</h4>
                    <p className='text-gray-400 text-sm'>Always exploring new technologies and best practices</p>
                  </div>
                </div>
              </div>

              <div className='mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20'>
                <p className='text-gray-300 text-sm text-center'>
                  🚀 Available for freelance projects and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About