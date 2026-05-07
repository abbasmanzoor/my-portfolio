import React from 'react'
// Remove motion import if not using it
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <div  // Changed to regular div
    id='Projects'
    className='py-20 bg-gray-900 text-white'
    >
      <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>My <span className=' text-purple-500'>Projects</span></h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my react work</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
         {
          projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))
         }
      </div>
      <div className='text-center mt-12'>
        <a href="#" className='inline-flex border items-center border-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'>
        <span className=''>View More Projects</span>
        <FaArrowRight className='ml-2' /></a>
      </div>
      </div>
    </div>
  )
}

export default Projects