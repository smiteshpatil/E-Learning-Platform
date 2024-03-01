import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Feedback from "./Feedback";
import { reviewCourse } from "../../api/courseService";
import { useParams } from "react-router-dom";

const VideoReview = () => {
  let { courseId } = useParams();

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [visibleComments, setVisibleComments] = useState(3);

  const dummyUsers = [
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "John Doe",
      comment: "This course is amazing! I learned so much.",
      rating: 5,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
    {
      userProfile: "https://via.placeholder.com/200",
      userName: "Jane Smith",
      comment: "I really enjoyed the content. It was very informative.",
      rating: 4,
    },
  ];

  // Ref to the comments container
  const commentsRef = useRef(null);
  // Function to toggle the number of visible comments
  const toggleVisibleComments = () => {
    setVisibleComments(visibleComments === 3 ? dummyUsers.length : 3);
    //scroll back up
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleRatingClick = (ratingValue) => {
    console.log(ratingValue);
    setRating(ratingValue);
  };

  const handleMouseOver = (ratingValue) => {
    console.log(ratingValue);
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = async () => {
    const resp = await reviewCourse(
      parseInt(courseId),
      localStorage.getItem("token")
    );
  };

  // const handleCancel = () => {
  //   // Here you can cancel the review

  //   }
  // };

  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ marginTop: "20px" }}
    >
      <div>
        <h2> Student Feedback</h2>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <FaStar
              key={index}
              className="star"
              color={
                ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
              }
              size={40}
              onClick={() => handleRatingClick(ratingValue)}
              onMouseOver={() => handleMouseOver(ratingValue)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
      <textarea
        rows={4}
        cols={50}
        placeholder="Write your views..."
        style={{ resize: "none", marginBottom: "10px" }}
      ></textarea>
      <div>
        <button className="btn btn-warning" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-outline-secondary">Cancel</button>
      </div>
      <div className="container my-3" style={{ border: "1px solid" }}>
        {/* Scrollable comments section */}
        <div
          className="px-3 mt-3 d-flex flex-column align-items-center"
          style={{ width: "100%" }}
          ref={commentsRef}
        >
          {dummyUsers.slice(0, visibleComments).map((currUser, index) => (
            <React.Fragment key={index}>
              <Feedback user={currUser} />
              {index !== visibleComments - 1 && (
                <hr style={{ width: "50%", color: "ActiveBorder" }} />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Toggle button */}
        <button
          onClick={toggleVisibleComments}
          style={{ border: "none", width: "100%", backgroundColor: "beige" }}
        >
          {visibleComments === 3 ? "See More Reviews" : "See less reviews"}
        </button>
      </div>
    </div>
  );
};

export default VideoReview;
