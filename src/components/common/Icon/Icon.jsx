import React from 'react';
import PropTypes from 'prop-types';
import * as FiIcons from 'react-icons/fi';

/**
 * Icon component for consistent icon usage throughout the application
 * Uses react-icons/fi (Feather icons) by default
 */
const Icon = ({
  name,
  size = 'md',
  color = 'currentColor',
  className = '',
  onClick,
}) => {
  // Size classes based on tailwind sizes
  const sizeMap = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    '2xl': 32,
    '3xl': 40,
  };

  // Get the icon component from react-icons/fi
  const IconComponent = FiIcons[name];

  // If the icon doesn't exist, return null or a placeholder
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Feather icons`);
    return null;
  }

  return (
    <IconComponent
      size={typeof size === 'string' ? sizeMap[size] || sizeMap.md : size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    PropTypes.number,
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
