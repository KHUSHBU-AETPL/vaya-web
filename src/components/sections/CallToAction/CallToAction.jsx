import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

/**
 * A reusable call to action section component
 */
const CallToAction = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  backgroundColor = 'bg-primary-orange',
  textColor = 'text-white',
  alignment = 'center',
  size = 'md',
  isExternal = false
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  const renderButton = (text, link, isPrimary) => {
    if (!text || !link) return null;

    const buttonProps = {
      variant: isPrimary ? 'primary' : 'outline',
      size: 'lg',
      className: isPrimary ? '' : 'ml-4'
    };

    if (isExternal) {
      return (
        <Button 
          as="a" 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          {...buttonProps}
        >
          {text}
        </Button>
      );
    }

    return (
      <Button as={Link} to={link} {...buttonProps}>
        {text}
      </Button>
    );
  };

  return (
    <section 
      className={`${backgroundColor} ${textColor} ${sizeClasses[size]}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${alignmentClasses[alignment]} space-y-6`}>
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          )}
          
          {subtitle && (
            <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>
          )}
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className={`flex flex-wrap gap-4 mt-6 ${alignment === 'center' ? 'justify-center' : ''}`}>
              {renderButton(primaryButtonText, primaryButtonLink, true)}
              {renderButton(secondaryButtonText, secondaryButtonLink, false)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  /** Main heading text */
  title: PropTypes.string,
  /** Supporting text */
  subtitle: PropTypes.string,
  /** Primary button text */
  primaryButtonText: PropTypes.string,
  /** Primary button link destination */
  primaryButtonLink: PropTypes.string,
  /** Secondary button text */
  secondaryButtonText: PropTypes.string,
  /** Secondary button link destination */
  secondaryButtonLink: PropTypes.string,
  /** Optional background image URL */
  backgroundImage: PropTypes.string,
  /** Background color class */
  backgroundColor: PropTypes.string,
  /** Text color class */
  textColor: PropTypes.string,
  /** Content alignment */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  /** Section size/padding */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Whether links are external */
  isExternal: PropTypes.bool
};

export default CallToAction;
