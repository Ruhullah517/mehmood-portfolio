import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './crousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {[-1, 0, 1].map((offset) => (
          <div
            key={offset}
            className={`carousel-slide ${
              offset === 0 ? 'active' : 'inactive'
            }`}
            style={{
              backgroundImage: `url(${images[getSlideIndex(offset)]})`,
            }}
          ></div>
        ))}
      </div>

      <button className="carousel-button left-button" onClick={prevSlide}>
        <FaChevronLeft size={24} />
      </button>
      <button className="carousel-button right-button" onClick={nextSlide}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}

export default Carousel;
