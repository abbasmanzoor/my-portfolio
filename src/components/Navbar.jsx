import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animation when component mounts
  useEffect(() => {
    setTimeout(() => {
      setAnimateItems(true);
    }, 100);
  }, []);

  // Navigation items with their individual animation delays (each comes one by one)
  const navItems = [
    { name: 'Home', href: '#Home', delay: '0.1s' },
    { name: 'About', href: '#About', delay: '0.2s' },
    { name: 'Skills', href: '#Skills', delay: '0.3s' },
    { name: 'Projects', href: '#Projects', delay: '0.4s' },
    { name: 'Experience', href: '#Experience', delay: '0.5s' },
    { name: 'Contact', href: '#Contact', delay: '0.6s' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-gray-800/90 backdrop-blur-sm py-4'} px-4 md:px-8 shadow-lg`}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo Section - Name with animated dot next to it */}
        <div className={`flex items-center gap-3 transform transition-all duration-700 ${animateItems ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0s' }}>
          <a href='#Home' className='text-2xl md:text-3xl font-bold text-white flex items-center gap-2 group'>
            <span className='relative'>
              Abbas
              <span className='text-purple-500'>Manzoor</span>
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full'></span>
            </span>
          </a>
          
          {/* Improved Animated Dot - Next to Name */}
          <div className='relative flex items-center justify-center'>
            {/* Main Dot with multiple animations */}
            <div
              className='w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer transition-all duration-300'
              style={{
                background: 'linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0088)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 3s ease infinite, pulse 1.5s ease-in-out infinite, bounce 1s ease-in-out infinite, rotate 4s linear infinite',
                boxShadow: '0 0 15px rgba(255,0,255,0.8), 0 0 30px rgba(0,255,255,0.6), inset 0 0 10px rgba(255,255,255,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.6) rotate(180deg)';
                e.currentTarget.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            ></div>
            
            {/* Glow effect behind dot */}
            <div className='absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse'
              style={{
                background: 'linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0088)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 3s ease infinite',
                filter: 'blur(8px)',
                zIndex: -1,
              }}
            ></div>
            
            {/* Ripple effect dots around */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-purple-500 opacity-0 animate-ripple'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-pink-500 opacity-0 animate-ripple-delayed'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500 opacity-0 animate-ripple-more'></div>
            
            {/* Inner sparkle dot */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-ping opacity-75'></div>
          </div>
        </div>

        {/* Desktop Menu - Each item comes one by one from bottom */}
        <div className='hidden md:flex space-x-6 lg:space-x-10'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-white/80 transition duration-300 hover:text-purple-500 group ${animateItems ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: item.delay }}
            >
              <span>
                {item.name}
              </span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Animates with logo */}
        <div className={`md:hidden ${animateItems ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0s' }}>
          {showMenu ? (
            <FaTimes onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white transition-all duration-300 hover:rotate-90' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white transition-all duration-300 hover:scale-110' />
          )}
        </div>
      </div>

      {/* Mobile Menu - Items appear one by one when menu opens */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          showMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='mt-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 flex flex-col space-y-4 text-center border border-purple-500/20 shadow-2xl'>
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              onClick={() => setShowMenu(false)}
              href={item.href}
              className={`relative text-white/80 transition-all duration-300 hover:text-purple-500 group py-3 rounded-lg hover:bg-white/5 ${showMenu ? 'animate-mobile-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className='text-lg font-medium'>
                {item.name}
              </span>
              <span className='absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-20'></span>
            </a>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mobileSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ripple {
          0% {
            width: 8px;
            height: 8px;
            opacity: 0.8;
          }
          100% {
            width: 80px;
            height: 80px;
            opacity: 0;
          }
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-mobile-slide-up {
          opacity: 0;
          animation: mobileSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-ripple {
          animation: ripple 2s ease-out infinite;
        }
        
        .animate-ripple-delayed {
          animation: ripple 2s ease-out infinite 0.7s;
        }
        
        .animate-ripple-more {
          animation: ripple 2s ease-out infinite 1.4s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;