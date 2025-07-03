import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../common';

/**
 * Individual FAQ item with toggle functionality
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
    <div className={`border-b border-gray-200 py-4 ${className}`}>
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <Icon 
          name={isOpen ? "FiMinus" : "FiPlus"} 
          className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {typeof answer === 'string' ? (
            <p>{answer}</p>
          ) : (
            answer
          )}
        </div>
      )}
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
