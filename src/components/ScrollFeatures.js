import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrollFeatures.css';

export default function ScrollFeatures() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 320);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${showScrollTop ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <FaArrowUp />
    </button>
  );
}
