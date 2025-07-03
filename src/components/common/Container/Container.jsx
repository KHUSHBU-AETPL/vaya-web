import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container component for consistent layout spacing
 * Provides responsive padding and max-width constraints
 */
const Container = ({
  children,
  className = '',
  maxWidth = 'lg',
  padding = true,
  centered = true,
  fluid = false,
}) => {
  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  // Padding classes
  const paddingClass = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  
  // Centered class
  const centeredClass = centered ? 'mx-auto' : '';
  
  // Width class
  const widthClass = fluid ? 'w-full' : '';

  return (
    <div
      className={`
        ${maxWidth && !fluid ? maxWidthClasses[maxWidth] : ''}
        ${paddingClass}
        ${centeredClass}
        ${widthClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', 'full']),
  padding: PropTypes.bool,
  centered: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Container;
