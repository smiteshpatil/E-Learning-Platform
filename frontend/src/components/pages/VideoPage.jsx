import React, { useState } from "react";
import PlayListDropdown from "./PlayListDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoChange = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8" style={{ margin: "0px", padding: "0px" }}>
          <video controls style={{ width: "100%" }} key={selectedVideo}>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="col-md-4 bg-light"
          style={{
            height: "100vh",
            overflowY: "auto",
            margin: "0px",
            padding: "0px",
          }}
        >
          <PlayListDropdown changeVideoUrl={handleVideoChange} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
