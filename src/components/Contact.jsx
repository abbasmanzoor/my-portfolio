import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub,
    FaTwitter,
    FaDribbble

} from 'react-icons/fa'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple alert (you can replace with EmailJS or backend)
    alert("Message Sent Successfully ✅")

    // reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-16 md:py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Get in <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
            >
              Send Message
            </button>

          </form>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-purple-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">Vehari, Pakistan</p>
              </div>
            </div>


             <div className="flex gap-4">
              <FaEnvelope className="text-purple-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">abbasmanzoor277@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaPhone className="text-purple-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400 text-sm">+92 320 8193101</p>
              </div>
            </div>

        <div className='pt-4'>
  <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>

  <div className='flex space-x-4'>
    
    <a href='https://github.com/abbasmanzoor' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
     text-purple-400 hover:bg-purple-700 hover:text-white transition duration-300'>
      <FaGithub />
    </a>

    <a href='https://www.linkedin.com/in/abbas-manzoor-5b3770345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
     text-orange-400 hover:bg-orange-500 hover:text-white transition duration-300'>
      <FaLinkedin />
    </a>

    <a href='https://twitter.com/abbasmanzoor' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
     text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'>
      <FaTwitter />
    </a>

    <a href='https://dribbble.com/abbasmanzoor' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition duration-300'>
      <FaDribbble />
    </a>

  </div>
</div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact