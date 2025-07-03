import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../common';

/**
 * A reusable feature grid section component for displaying features, benefits, or services
 */
const FeatureGrid = ({
  title,
  subtitle,
  features,
  columns = 3,
  backgroundColor = 'bg-white',
  textColor = 'text-primary-black',
  iconColor = 'text-primary-orange',
  size = 'md'
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  // Column classes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`${backgroundColor} ${textColor} ${sizeClasses[size]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg max-w-3xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        
        {/* Features grid */}
        <div className={`grid ${columnClasses[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Feature icon */}
              {feature.icon && (
                <div className={`${iconColor} mb-4`}>
                  <Icon name={feature.icon} size="lg" />
                </div>
              )}
              
              {/* Feature image */}
              {feature.image && (
                <div className="mb-4 w-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
              
              {/* Feature content */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Optional link */}
              {feature.link && feature.linkText && (
                <a 
                  href={feature.link} 
                  className="mt-4 text-primary-orange font-medium hover:underline inline-flex items-center"
                >
                  {feature.linkText}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FeatureGrid.propTypes = {
  /** Section title */
  title: PropTypes.string,
  /** Section subtitle */
  subtitle: PropTypes.string,
  /** Array of feature objects */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      linkText: PropTypes.string
    })
  ).isRequired,
  /** Number of columns in the grid */
  columns: PropTypes.oneOf([1, 2, 3, 4]),
  /** Background color class */
  backgroundColor: PropTypes.string,
  /** Text color class */
  textColor: PropTypes.string,
  /** Icon color class */
  iconColor: PropTypes.string,
  /** Section size/padding */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

export default FeatureGrid;
