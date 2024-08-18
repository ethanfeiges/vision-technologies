import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./ProductInfo.css";
import HomeIcon from "./HomeIcon.js";

const LeftNav = (onClick, disabled) => (
  <button
    type="button"
    className="image-gallery-left-nav"
    disabled={disabled}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    &#10094; {/* Left arrow symbol */}
  </button>
);

const RightNav = (onClick, disabled) => (
  <button
    type="button"
    className="image-gallery-right-nav"
    disabled={disabled}
    onClick={onClick}
    aria-label="Next Slide"
  >
    &#10095; {/* Right arrow symbol */}
  </button>
);

const ProductInfo = ({ product }) => {
  const { link, images, title, description, features } = product;

  // Convert images object to an array
  const imageArray = Object.values(images).map((image) => ({ original: image }));

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="product-details">
      <h2 className="product-title">{title}</h2>
      
      <div className="product-slide">
        <ImageGallery 
          items={imageArray}
          renderLeftNav={LeftNav}
          renderRightNav={RightNav}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={false}
          showNav={true}
          slideInterval={5000}
          autoPlay={true} // Enable auto play if desired
        />
      </div>
      <p className="product-header">{description}</p>
      
      <ul className="product-features">
        {Object.values(features).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="links">
        <HomeIcon />
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="product-button">More Info</button>
          </a>
        )}
        <a href="../contact" target="_blank" rel="noopener noreferrer">
            <button className="product-button">Request a Quote</button>
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
