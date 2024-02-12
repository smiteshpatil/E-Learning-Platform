import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const VideoReview = ({ onSubmit, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleMouseOver = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = () => {
    // Here you can submit the review, e.g., send it to the server
    if (onSubmit) {
      onSubmit(rating);
    }
  };

  const handleCancel = () => {
    // Here you can cancel the review
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Course Rating</h2>
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRatingClick(ratingValue)}
              />
              <FaStar
                className="star"
                color={
                  ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
                }
                size={30}
                onMouseOver={() => handleMouseOver(ratingValue)}
                onMouseLeave={handleMouseLeave}
              />
            </label>
          );
        })}
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default VideoReview;
