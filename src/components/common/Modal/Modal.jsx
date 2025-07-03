import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

/**
 * A reusable modal component for dialogs, alerts, and forms
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnEsc = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  footer
}) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (closeOnEsc && event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, closeOnEsc]);
  
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };
  
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className={`${sizeClasses[size]} w-full bg-white rounded-lg shadow-xl overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 id="modal-title" className="text-lg font-medium text-primary-black">
              {title}
            </h3>
            {showCloseButton && (
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                onClick={onClose}
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        
        {/* Body */}
        <div className="px-6 py-4">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  /** Whether the modal is visible */
  isOpen: PropTypes.bool.isRequired,
  /** Function to call when the modal should close */
  onClose: PropTypes.func.isRequired,
  /** Modal title */
  title: PropTypes.node,
  /** Modal content */
  children: PropTypes.node.isRequired,
  /** Size of the modal */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  /** Whether to close the modal when Escape key is pressed */
  closeOnEsc: PropTypes.bool,
  /** Whether to close the modal when clicking outside */
  closeOnOverlayClick: PropTypes.bool,
  /** Whether to show the close button */
  showCloseButton: PropTypes.bool,
  /** Footer content, typically action buttons */
  footer: PropTypes.node
};

export default Modal;
