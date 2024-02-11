import React from "react";
import { Dropdown } from "react-bootstrap";

const VideoPlaylist = ({ setSelectedVideo }) => {
  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Video
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleVideoSelect("video1.mp4")}>
          Video 1
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleVideoSelect("video2.mp4")}>
          Video 2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleVideoSelect("video3.mp4")}>
          Video 3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VideoPlaylist;
