import React from 'react';
import PropTypes from 'prop-types';

/**
 * DropdownItem component for use within the Dropdown component
 * Provides consistent styling for dropdown menu items
 */
const DropdownItem = ({ 
  children, 
  onClick, 
  className = '',
  active = false,
  disabled = false,
}) => {
  return (
    <div
      className={`
        px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors
        ${active ? 'bg-gray-50 text-primary-orange' : 'text-gray-700'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={disabled ? undefined : onClick}
      role="menuitem"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DropdownItem;
