import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../common';

/**
 * Individual FAQ item component with toggle functionality
 */
const FAQItem = ({ 
  question, 
  answer,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm cursor-pointer ${className}`} onClick={toggleOpen}>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-primary-dark">
          {question}
        </p>
        <Icon 
          name={isOpen ? "FiMinus" : "FiPlus"} 
          className={`text-primary-dark-gray text-xl transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div className={`mt-4 text-primary-dark-gray text-left ${isOpen ? 'block' : 'hidden'}`}>
        <p className="leading-relaxed text-left">
          {answer}
        </p>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default FAQItem;
