import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

/**
 * ScrollToTopButton component that appears when user scrolls down
 * and allows them to scroll back to the top of the page
 */
const ScrollToTopButton = ({ 
  showAfterScrollY = 300,
  position = 'bottom-right',
  className = ''
}) => {
  const [visible, setVisible] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfterScrollY]);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Position classes
  const positionClasses = {
    'bottom-right': 'fixed bottom-8 right-8',
    'bottom-left': 'fixed bottom-8 left-8',
    'top-right': 'fixed top-8 right-8',
    'top-left': 'fixed top-8 left-8',
  };

  if (!visible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className={`${positionClasses[position]} z-50 p-3 rounded-full bg-primary-orange text-primary-white shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none ${className}`}
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </button>
  );
};

ScrollToTopButton.propTypes = {
  showAfterScrollY: PropTypes.number,
  position: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left']),
  className: PropTypes.string
};

export default ScrollToTopButton;
