import React from 'react'

const ProjectCard = ({title, description, image,tech}) => {
  return (
    <div className='bg-gray-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title}  className='w-full h-60 object-cover'/>
       <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-400 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>

        {tech?.map((item,index) => (
          <span key={index} className='bg-gray-400 text-sm  px-3 py-1 rounded-full'>
            {item}
          </span>
        ))}
        </div>
        <div className='flex gap-2'>
            <a href="#" className='flex-1 text-center bg-purple-500  px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition duration-300'>View Demo</a>
            <a href="#" className='flex-1 text-center border border-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition duration-300'>View Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
