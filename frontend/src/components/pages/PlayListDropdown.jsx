import React from "react";
import "./css/PlayListDropdown.css";
import { content } from "../../api/courseService";
const PlaylistDropdown = (props) => {
  const handleItemClick = (videoUrl) => {
    console.log("Clicked video URL:", videoUrl);
    props.changeVideoUrl(videoUrl);
  };

  return (
    <div className="playlist-dropdown-container">
      <h3 className="course-content">Course Contents</h3>

      <ul className="content-list">
        {content.map((lecture) => (
          <li key={lecture.id} className="content-item">
            <button
              onClick={() => handleItemClick(lecture.videoUrl)}
              className="lecture-name"
            >
              {lecture.contentName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDropdown;
