import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../common';
import FAQItem from './components/FAQItem';

/**
 * Reusable FAQ section component that can be customized with different questions and answers
 */
const FAQ = ({
  title = 'Frequently Asked Questions',
  subtitle,
  items = [],
  className = '',
  backgroundClass = 'bg-white',
  spacing = 'py-16',
  badgeText = 'FAQ',
  badgeClass = 'bg-secondary-orange-25 text-primary-orange',
  titleClass = 'text-4xl lg:text-5xl font-extrabold leading-tight text-primary-dark',
  subtitleClass = 'text-lg text-primary-dark-gray',
  showBadge = true,
  moreLink,
  moreLinkText = 'More FAQ\'s',
}) => {
  return (
    <section className={`${backgroundClass} ${spacing} ${className}`}>
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          {showBadge && (
            <span className={`inline-block ${badgeClass} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
              {badgeText}
            </span>
          )}
          <h2 className={`${titleClass} mb-4`}>{title}</h2>
          {subtitle && <p className={`${subtitleClass} max-w-2xl mx-auto mb-8`}>{subtitle}</p>}
        </div>
        
        {/* FAQ items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0} // Open the first item by default
              className={index === items.length - 1 ? '' : ''}
            />
          ))}
        </div>

        {/* More FAQ's Link */}
        {moreLink && (
          <div className="text-center mt-12">
            <a href={moreLink} className="inline-flex items-center text-primary-orange font-semibold group">
              {moreLinkText}
              <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">&#x2192;</span>
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

FAQ.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.node.isRequired,
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ),
  className: PropTypes.string,
  backgroundClass: PropTypes.string,
  spacing: PropTypes.string,
  badgeText: PropTypes.string,
  badgeClass: PropTypes.string,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
  showBadge: PropTypes.bool,
  moreLink: PropTypes.string,
  moreLinkText: PropTypes.string,
};

export default FAQ;
