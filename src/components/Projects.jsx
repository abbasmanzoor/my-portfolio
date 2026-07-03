import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../assets/assets';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  // State to track if we show all projects or only first 6
  const [showAll, setShowAll] = useState(false);

  // Decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  // Toggle function
  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my react work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={toggleProjects}
            className="inline-flex border items-center border-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300"
          >
            <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;