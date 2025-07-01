import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable layout component for policy and content pages
 */
const PolicyLayout = ({ 
  title, 
  titleHighlight, 
  children, 
  bgColor = 'bg-primary-beige',
  maxWidth = 'max-w-3xl'
}) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 py-16 ${bgColor}`}>
      <div className={`${maxWidth} mx-auto`}>
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Header Section */}
          {title && (
            <h1 className="text-3xl font-bold mb-6 text-center">
              {titleHighlight ? (
                <>
                  <span className="text-primary-orange">{titleHighlight}</span>
                  {title && <span className="text-primary-black"> {title}</span>}
                </>
              ) : (
                <span className="text-primary-orange">{title}</span>
              )}
            </h1>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
};

PolicyLayout.propTypes = {
  /** The main title text */
  title: PropTypes.string,
  /** Part of the title to highlight in orange */
  titleHighlight: PropTypes.string,
  /** Content to render inside the layout */
  children: PropTypes.node.isRequired,
  /** Background color class */
  bgColor: PropTypes.string,
  /** Max width class for the container */
  maxWidth: PropTypes.string
};

export default PolicyLayout;
