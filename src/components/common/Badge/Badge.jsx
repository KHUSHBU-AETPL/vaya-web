import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable badge component for displaying status, labels, or counts
 */
const Badge = ({ 
  text, 
  variant = 'primary', 
  size = 'md',
  rounded = 'full'
}) => {
  // Variant styles
  const variantClasses = {
    primary: 'bg-primary-orange text-primary-white',
    secondary: 'bg-primary-black text-primary-white',
    outline: 'bg-transparent border border-primary-orange text-primary-orange',
    light: 'bg-primary-beige text-primary-black',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white'
  };

  // Size styles
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  };

  // Rounded styles
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <span 
      className={`inline-block font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]}`}
    >
      {text}
    </span>
  );
};

Badge.propTypes = {
  /** Text to display in the badge */
  text: PropTypes.string.isRequired,
  /** Visual style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'light', 'success', 'warning', 'danger']),
  /** Size of the badge */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Border radius style */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
};

export default Badge;
