import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Input component for form fields with consistent styling
 * Supports different variants, sizes, and validation states
 */
const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  success,
  helperText,
  className = '',
  inputClassName = '',
  size = 'md',
  fullWidth = false,
  startIcon,
  endIcon,
  ...props
}, ref) => {
  // Base classes for all inputs
  const baseClasses = 'rounded border focus:outline-none focus:ring-2 transition-colors';
  
  // Size classes
  const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-3',
    lg: 'py-3 px-4 text-lg',
  };
  
  // Status classes (error, success, default)
  const statusClasses = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
    : success 
      ? 'border-green-500 focus:border-green-500 focus:ring-green-200' 
      : 'border-gray-300 focus:border-primary-orange focus:ring-primary-orange/20';
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Disabled class
  const disabledClass = disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : '';
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          name={name}
          id={id || name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          className={`
            ${baseClasses}
            ${sizeClasses[size]}
            ${statusClasses}
            ${widthClass}
            ${disabledClass}
            ${startIcon ? 'pl-10' : ''}
            ${endIcon ? 'pr-10' : ''}
            ${inputClassName}
          `}
          {...props}
        />
        
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
      
      {(error || success || helperText) && (
        <p 
          className={`mt-1 text-sm ${
            error ? 'text-red-600' : 
            success ? 'text-green-600' : 
            'text-gray-500'
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default Input;
