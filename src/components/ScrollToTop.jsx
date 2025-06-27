import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the window to the top when the route changes
 * This ensures that when navigating between pages, the user always starts at the top
 * Enhanced to work with all navigation types including nested routes and footer links
 */
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, let the browser handle the scrolling
    if (hash) {
      // But still need to scroll to top first to prevent issues
      window.scrollTo(0, 0);
      
      // Then scroll to the element with the hash after a small delay
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // If no hash, just scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]); // React to changes in pathname, hash, and key

  // Also scroll to top on any link (<a> or <Link>) click, even if the path doesn't change.
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a, [role="link"]');
      if (!anchor) return;

      // Ignore in-page hash links – the browser will handle those
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) return;

      // Scroll smoothly to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Use capture phase so we catch the click before React Router handles it
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}

export default ScrollToTop;
