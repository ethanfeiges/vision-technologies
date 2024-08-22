import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSlideClick = (link) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(link);
    }, 500); // Match this duration with the CSS transition
  };

  // Reset transition state after navigation
  React.useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this duration with the CSS transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className={`slider-container ${isTransitioning ? 'transition-out' : ''}`}>
      <div className={`slide-wrapper ${isTransitioning ? 'transition-out' : 'transition-in'}`} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={() => handleSlideClick(slide.link)}
          >
            <div className="text-overlay">{slide.text}</div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
