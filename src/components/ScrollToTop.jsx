import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the window to the top when the route changes
 * This component doesn't render anything visible - it just performs the scroll effect
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Use smooth scrolling for better UX
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
