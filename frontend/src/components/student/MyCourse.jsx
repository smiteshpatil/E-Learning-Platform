import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCourse = ({ courseName, progress, imageUrl, videoUrl }) => {
  const redirectToVideoPage = () => {
    // Redirect to the course video page when the play button is clicked
    // window.location.href = videoUrl;
  };

  return (
    <div className="card" style={{ width: "300px" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Course"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <h5 className="card-title">{courseName}</h5>
      <ProgressBar
        variant="success"
        now={progress}
        label={`${progress}%`}
        className="mx-2"
      />
      <button
        className="btn play-btn"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.7",
        }}
        onClick={redirectToVideoPage}
      >
        {/* <i className="bi bi-play-circle"></i> Play */}
        {/* <FaRegPlayCircle size={40} color="white" /> */}
        <FaPlayCircle size={40} color="white" />
      </button>
    </div>
  );
};

export default MyCourse;
