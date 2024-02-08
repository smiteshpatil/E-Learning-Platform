import React, { useState, useEffect } from "react";
import "../css/Carousel.css";
import slide1 from "../images/carousel_img1.jpg";
import slide2 from "../images/carousel_img2.jpg";
const Carousel = () => {
  const images = [slide1, slide2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
