import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component that can be used throughout the application
 * Supports different variants (primary, secondary, outline) and sizes (sm, md, lg)
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  // Base classes that apply to all buttons
  const baseClasses = "font-medium rounded transition-colors duration-300 focus:outline-none";
  
  // Classes for different variants
  const variantClasses = {
    primary: "bg-primary-orange text-primary-white hover:bg-warning-dark shadow-sm hover:shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "bg-transparent border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-primary-white"
  };
  
  // Classes for different sizes
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6",
    lg: "py-3 px-8 text-lg"
  };
  
  // Full width class
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default Button;
