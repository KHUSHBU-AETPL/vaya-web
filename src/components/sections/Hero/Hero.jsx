import React from 'react';
import PropTypes from 'prop-types';
import { Container, ScrollToTopButton } from '../../common';

/**
 * Reusable Hero section component that can be customized for different pages
 * Supports different layouts, background colors, and content alignment
 */
const Hero = ({
  title,
  titleHighlight,
  subtitle,
  children,
  backgroundClass = 'bg-primary-beige',
  textColor = 'text-primary-black',
  titleColor = 'text-primary-orange',
  alignment = 'left',
  spacing = 'py-16 lg:py-24',
  image,
  imageAlt = 'Hero Image',
  imagePosition = 'right',
  imageClassName = '',
  className = '',
  ctaButtons = [],
  showScrollToTop = false,
  scrollThreshold = 300,
}) => {
  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Content layout based on image position
  const contentLayout = image ? 'flex flex-col lg:flex-row items-center justify-between gap-12' : '';
  
  // Image position classes
  const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

  return (
    <>
      {/* Scroll to top button */}
      {showScrollToTop && <ScrollToTopButton threshold={scrollThreshold} />}
      
      <section className={`${backgroundClass} ${spacing} ${className}`}>
        <Container>
          <div className={contentLayout}>
            {/* Content area */}
            <div className={`${image ? 'lg:w-1/2' : 'w-full'} ${alignmentClasses[alignment]}`}>
              {(title || titleHighlight) && (
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  {title && <span className={titleColor}>{title}</span>}
                  {title && titleHighlight && ' '}
                  {titleHighlight && <span className="text-primary-black">{titleHighlight}</span>}
                </h1>
              )}
              
              {subtitle && (
                <p className={`${textColor} text-lg mb-8 max-w-xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
                  {subtitle}
                </p>
              )}
              
              {ctaButtons.length > 0 && (
                <div className={`flex ${alignment === 'center' ? 'justify-center' : alignment === 'right' ? 'justify-end' : 'justify-start'} gap-4`}>
                  {ctaButtons.map((button, index) => (
                    <a 
                      key={index} 
                      href={button.url} 
                      target={button.external ? "_blank" : "_self"} 
                      rel={button.external ? "noopener noreferrer" : ""}
                    >
                      {typeof button.content === 'string' ? (
                        <img src={button.content} alt={button.alt || ""} className={button.className || "h-12"} />
                      ) : (
                        button.content
                      )}
                    </a>
                  ))}
                </div>
              )}
              
              {children}
            </div>
            
            {/* Image area */}
            {image && (
              <div className={`lg:w-1/2 flex justify-center ${imageOrder} ${imageClassName}`}>
                {typeof image === 'string' ? (
                  <img src={image} alt={imageAlt} className="max-w-full" />
                ) : (
                  image
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.node,
  titleHighlight: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
  backgroundClass: PropTypes.string,
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  spacing: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  imageClassName: PropTypes.string,
  className: PropTypes.string,
  ctaButtons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
      external: PropTypes.bool,
    })
  ),
  showScrollToTop: PropTypes.bool,
  scrollThreshold: PropTypes.number,
};

export default Hero;
