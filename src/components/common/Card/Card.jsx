import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a consistent container
 * Supports different variants and can include header, footer, and custom styling
 */
const Card = ({
  children,
  className = '',
  variant = 'default',
  header,
  footer,
  onClick,
  hoverable = false,
  shadow = 'md',
  padding = 'default',
}) => {
  // Base classes for all cards
  const baseClasses = 'rounded-lg overflow-hidden bg-white';
  
  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-2',
    default: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  // Variant classes
  const variantClasses = {
    default: 'border border-gray-200',
    outlined: 'border border-gray-300',
    elevated: 'border-none',
    primary: 'border border-primary-orange',
  };
  
  // Hoverable class
  const hoverableClass = hoverable ? 'transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer' : '';
  
  return (
    <div
      className={`
        ${baseClasses}
        ${shadowClasses[shadow]}
        ${variantClasses[variant]}
        ${hoverableClass}
        ${className}
      `}
      onClick={onClick}
    >
      {header && (
        <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
          {header}
        </div>
      )}
      
      <div className={paddingClasses[padding]}>
        {children}
      </div>
      
      {footer && (
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'primary']),
  header: PropTypes.node,
  footer: PropTypes.node,
  onClick: PropTypes.func,
  hoverable: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg', 'xl']),
};

export default Card;
