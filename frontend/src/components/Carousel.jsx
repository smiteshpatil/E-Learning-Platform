import React, { useState, useEffect } from "react";
import "../css/Carousel.css";

import slide3 from "../images/carousel_img3.jpg";
import slide4 from "../images/carousel_img4.jpg";
import slide5 from "../images/carousel_img5.jpg";
import slide6 from "../images/carousel_img6.jpg";

const Carousel = () => {
  const images = [slide3, slide4, slide5, slide6];
  const captions = [
    "Unlock Your Potential: Learn Anytime, Anywhere",
    "Empower Yourself with Knowledge",
    "Interactive Learning for Modern Minds",
    "Join Our Community of Lifelong Learners",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container" style={{ height: "50vh" }}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === currentImageIndex ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentImageIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{captions[index]}</h5>
                <p>
                  Some representative placeholder content for the{" "}
                  {index === 0
                    ? "first"
                    : index === 1
                    ? "second"
                    : index === 2
                    ? "third"
                    : "fourth"}{" "}
                  slide.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
