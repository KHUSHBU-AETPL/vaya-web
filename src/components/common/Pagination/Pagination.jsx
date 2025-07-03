import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable pagination component for navigating through paginated content
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  size = 'md',
  variant = 'default'
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
    const totalBlocks = totalNumbers + 2; // +2 for the ellipsis

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      return [
        ...Array.from({ length: leftItemCount }, (_, i) => i + 1),
        'ellipsis',
        totalPages
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      return [
        1,
        'ellipsis',
        ...Array.from(
          { length: rightItemCount },
          (_, i) => totalPages - rightItemCount + i + 1
        )
      ];
    }

    return [
      1,
      'ellipsis',
      ...Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      ),
      'ellipsis',
      totalPages
    ];
  };

  // Size classes
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg'
  };

  // Variant classes
  const variantClasses = {
    default: {
      container: 'flex items-center justify-center space-x-2',
      button: (isActive) =>
        `flex items-center justify-center rounded-md ${sizeClasses[size]} ${
          isActive
            ? 'bg-primary-orange text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`,
      arrow: `flex items-center justify-center rounded-md ${sizeClasses[size]} bg-white text-gray-700 hover:bg-gray-100`,
      disabled: `flex items-center justify-center rounded-md ${sizeClasses[size]} bg-gray-100 text-gray-400 cursor-not-allowed`
    },
    outline: {
      container: 'flex items-center justify-center space-x-2',
      button: (isActive) =>
        `flex items-center justify-center rounded-md ${sizeClasses[size]} ${
          isActive
            ? 'border-2 border-primary-orange bg-primary-orange text-white'
            : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`,
      arrow: `flex items-center justify-center rounded-md ${sizeClasses[size]} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`,
      disabled: `flex items-center justify-center rounded-md ${sizeClasses[size]} border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed`
    }
  };

  const styles = variantClasses[variant];
  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="Pagination">
      <ul className={styles.container}>
        {/* Previous button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={currentPage === 1 ? styles.disabled : styles.arrow}
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {/* First page button */}
        {showFirstLast && currentPage > siblingCount + 2 && (
          <>
            <li>
              <button
                onClick={() => onPageChange(1)}
                className={styles.button(1 === currentPage)}
                aria-label="Page 1"
                aria-current={1 === currentPage ? 'page' : undefined}
              >
                1
              </button>
            </li>
            {currentPage > siblingCount + 3 && (
              <li className="flex items-center justify-center">
                <span className="text-gray-500">...</span>
              </li>
            )}
          </>
        )}

        {/* Page numbers */}
        {pageNumbers.map((pageNumber, i) => {
          if (pageNumber === 'ellipsis') {
            return (
              <li key={`ellipsis-${i}`} className="flex items-center justify-center">
                <span className="text-gray-500">...</span>
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                className={styles.button(pageNumber === currentPage)}
                aria-label={`Page ${pageNumber}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Last page button */}
        {showFirstLast && currentPage < totalPages - siblingCount - 1 && (
          <>
            {currentPage < totalPages - siblingCount - 2 && (
              <li className="flex items-center justify-center">
                <span className="text-gray-500">...</span>
              </li>
            )}
            <li>
              <button
                onClick={() => onPageChange(totalPages)}
                className={styles.button(totalPages === currentPage)}
                aria-label={`Page ${totalPages}`}
                aria-current={totalPages === currentPage ? 'page' : undefined}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Next button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? styles.disabled : styles.arrow}
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /** Current active page */
  currentPage: PropTypes.number.isRequired,
  /** Total number of pages */
  totalPages: PropTypes.number.isRequired,
  /** Function to call when page changes */
  onPageChange: PropTypes.func.isRequired,
  /** Number of siblings on each side of the current page */
  siblingCount: PropTypes.number,
  /** Whether to show first and last page buttons */
  showFirstLast: PropTypes.bool,
  /** Size of the pagination buttons */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'outline'])
};

export default Pagination;
