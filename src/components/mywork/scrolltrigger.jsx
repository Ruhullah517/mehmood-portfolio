import React, { useEffect, useState, useRef } from 'react';

const ScrollTrigger = ({ children, onEnter, onExit }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onExit();
        }
      },
      { threshold: 0.5 } // Adjust as needed for sensitivity
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [onEnter, onExit]);

  return <div ref={triggerRef}>{children}</div>;
};

export default ScrollTrigger;
