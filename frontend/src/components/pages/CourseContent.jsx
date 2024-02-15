// CourseContent.js
import React from "react";

const CourseContent = ({ handleVideoChange }) => {
  const playlist = [
    {
      title: "Introduction to React",
      videoUrl: "https://www.example.com/video1.mp4",
    },
    {
      title: "State and Props",
      videoUrl: "https://www.example.com/video2.mp4",
    },
    {
      title: "Components Lifecycle",
      videoUrl: "https://www.example.com/video3.mp4",
    },
    // Add more video lectures as needed
  ];

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        Select Lecture <span className="arrow">&#9662;</span>
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {playlist.map((lecture, index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleVideoChange(lecture.videoUrl)}
          >
            {lecture.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
