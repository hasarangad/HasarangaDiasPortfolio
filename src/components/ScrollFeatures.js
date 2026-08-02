import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrollFeatures.css';

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          if (totalHeight > 0) {
            const progress = (currentScroll / totalHeight) * 100;
            setScrollProgress(progress);
          }

          setShowScrollTop(currentScroll > 320);
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
    <>
      {/* Top Scroll Reading Progress Bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        className={`scroll-to-top-btn ${showScrollTop ? 'scroll-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
