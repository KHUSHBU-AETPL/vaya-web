import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable tabs component for switching between different content sections
 */
const Tabs = ({ 
  tabs, 
  defaultActiveTab = 0,
  variant = 'default',
  onChange
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };
  
  // Tab style variants
  const tabStyles = {
    default: {
      container: 'border-b border-gray-200',
      tabList: 'flex -mb-px',
      tab: (isActive) => 
        `py-2 px-4 text-center border-b-2 ${
          isActive 
            ? 'border-primary-orange text-primary-orange font-medium' 
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`,
      content: 'py-4'
    },
    pills: {
      container: 'mb-4',
      tabList: 'flex space-x-2',
      tab: (isActive) => 
        `py-2 px-4 rounded-md ${
          isActive 
            ? 'bg-primary-orange text-primary-white font-medium' 
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
        }`,
      content: 'py-4'
    },
    minimal: {
      container: '',
      tabList: 'flex space-x-6',
      tab: (isActive) => 
        `py-2 ${
          isActive 
            ? 'text-primary-orange font-medium' 
            : 'text-gray-500 hover:text-gray-700'
        }`,
      content: 'py-4'
    }
  };
  
  const styles = tabStyles[variant];

  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.tabList}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={styles.tab(index === activeTab)}
              onClick={() => handleTabClick(index)}
              aria-selected={index === activeTab}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className={styles.content}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /** Array of tab objects with label and content */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  /** Index of the default active tab */
  defaultActiveTab: PropTypes.number,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'pills', 'minimal']),
  /** Callback function when tab changes */
  onChange: PropTypes.func
};

export default Tabs;
