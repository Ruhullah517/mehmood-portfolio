import React, { useState, useRef } from 'react';
import './imagecompare.css'; // Add the CSS styles below

const ImageCompareSlider = ({ leftImage, rightImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%
  const containerRef = useRef(null);

  const handleSliderMove = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newPosition = (offsetX / containerWidth) * 100;
    setSliderPosition(Math.max(0, Math.min(newPosition, 100))); // Clamp between 0 and 100
  };

  return (
    <div
      className="image-compare-container"
      ref={containerRef}
      onMouseMove={handleSliderMove}
      onTouchMove={(e) => handleSliderMove(e.touches[0])} // Touch support
    >
      <img src={rightImage} alt="Right" className="right-image" />
      <div
        className="left-image-wrapper"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={leftImage} alt="Left" className="left-image" />
      </div>
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => e.preventDefault()} // Prevents text selection while dragging
      />
    </div>
  );
};

export default ImageCompareSlider;
