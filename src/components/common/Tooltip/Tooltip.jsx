import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable tooltip component for displaying additional information on hover
 */
const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 0,
  arrow = true,
  maxWidth = '200px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  // Position classes
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  // Arrow classes
  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary-black',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary-black',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-primary-black',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-primary-black'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {isVisible && (
        <div className="absolute z-50">
          <div 
            className={`${positionClasses[position]} bg-primary-black text-white text-sm rounded py-1 px-2`}
            style={{ maxWidth }}
          >
            {content}
            {arrow && (
              <div className={`absolute ${arrowClasses[position]} h-0 w-0`}></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  /** Element that triggers the tooltip */
  children: PropTypes.node.isRequired,
  /** Content to display in the tooltip */
  content: PropTypes.node.isRequired,
  /** Position of the tooltip relative to the children */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** Delay in milliseconds before showing the tooltip */
  delay: PropTypes.number,
  /** Whether to show an arrow pointing to the children */
  arrow: PropTypes.bool,
  /** Maximum width of the tooltip */
  maxWidth: PropTypes.string
};

export default Tooltip;
