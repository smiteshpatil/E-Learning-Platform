import React from "react";
import { courses } from "../../api/courseService";
const VideoOverview = () => {
  let currentCourse = courses[0];

  return (
    <div className="container mt-3" style={{ color: "black" }}>
      <h3 className="title">{currentCourse.title}</h3>
      <p
        style={{
          fontSize: "large",
        }}
      >
        {currentCourse.description}
      </p>
    </div>
  );
};

export default VideoOverview;
