import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';

/**
 * Reusable Dropdown component that can be used throughout the application
 * Handles its own open/close state and outside click detection
 */
const Dropdown = ({
  trigger,
  children,
  className = '',
  menuClassName = '',
  defaultOpen = false,
  icon = true,
  placement = 'bottom-left',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef(null);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Placement classes for the dropdown menu
  const placementClasses = {
    'bottom-left': 'left-0 top-full',
    'bottom-right': 'right-0 top-full',
    'top-left': 'left-0 bottom-full',
    'top-right': 'right-0 bottom-full',
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown trigger */}
      <div 
        className="flex items-center cursor-pointer" 
        onClick={toggleDropdown}
      >
        {typeof trigger === 'function' ? trigger(isOpen) : trigger}
        {icon && (
          <FiChevronDown 
            className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div 
          className={`absolute z-50 mt-1 bg-white rounded-md shadow-lg py-1 min-w-[10rem] ${placementClasses[placement]} ${menuClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  menuClassName: PropTypes.string,
  defaultOpen: PropTypes.bool,
  icon: PropTypes.bool,
  placement: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
};

export default Dropdown;
