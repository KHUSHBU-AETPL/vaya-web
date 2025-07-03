import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../common';

/**
 * Reusable PlayFootball section component that can be customized with different options
 */
const PlayFootballSection = ({
  title = 'Play Football',
  titleHighlight = 'With Vaya',
  description = "Football has never been this easy and fun! Whether you're looking to join a quick pick-up game or dive into a league, Vaya makes it simple to get on the pitch and enjoy the game your way.",
  options = [],
  image,
  imageAlt = 'Football Players',
  backgroundColor = 'bg-primary-beige',
  learnMoreLink = '#',
  learnMoreText = 'Learn more',
  className = '',
}) => {
  return (
    <section className={`${backgroundColor} py-16 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-primary-orange">{title}</span>{" "}
            <span className="text-primary-black">{titleHighlight}</span>
          </h2>
          <p className="text-lg text-primary-black max-w-xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-16">
          {/* Left Content - Options List */}
          {options.length > 0 && (
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-left">Explore Our Options:</h3>
              <div>
                {options.map((option, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-orange mr-4">
                        <img src={option.icon} alt={option.title} className="w-6 h-6 text-primary-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary-black text-left">{option.title}</h4>
                        <p className="text-base text-primary-black text-left leading-relaxed">{option.description}</p>
                      </div>
                    </div>
                    {index < options.length - 1 && (
                      <div className="border-b border-gray-200 my-4 mx-16"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Right Image Section */}
          {image && (
            <div className="lg:w-1/2">
              <img src={image} alt={imageAlt} className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
          )}
        </div>

        {learnMoreLink && (
          <div className="text-center mt-12">
            <a href={learnMoreLink} className="text-primary-orange font-semibold flex items-center justify-center gap-2">
              {learnMoreText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

PlayFootballSection.propTypes = {
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  backgroundColor: PropTypes.string,
  learnMoreLink: PropTypes.string,
  learnMoreText: PropTypes.string,
  className: PropTypes.string,
};

export default PlayFootballSection;
