import React, { useState } from "react";
import { useRef } from "react";
import VideoPlayer from "react-video-js-player";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef(null);

  const video = {
    src: "https://www.dropbox.com/scl/fi/hldrytn68bochhie8zpm4/20220602_152154.mp4?rlkey=e219id7vkdjp4zjq1aqf0s37i&raw=1",
    poster: "http://www.example.com/path/to/video_poster.jpg",
  };

  const onPlayerReady = (player) => {
    console.log("Player is ready: ", player);
    playerRef.current = player;
  };

  const onVideoPlay = (duration) => {
    console.log("Video played at: ", duration);
  };

  const onVideoPause = (duration) => {
    console.log("Video paused at: ", duration);
  };

  const onVideoTimeUpdate = (duration) => {
    console.log("Time updated: ", duration);
  };

  const onVideoSeeking = (duration) => {
    console.log("Video seeking: ", duration);
  };

  const onVideoSeeked = (from, to) => {
    console.log(`Video seeked from ${from} to ${to}`);
  };

  const onVideoEnd = () => {
    console.log("Video ended");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <video controls style={{ width: "100%" }}>
            <source
              src="https://www.dropbox.com/scl/fi/hldrytn68bochhie8zpm4/20220602_152154.mp4?rlkey=e219id7vkdjp4zjq1aqf0s37i&raw=1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="col-md-4 bg-light"
          style={{ height: "100vh", overflowY: "auto" }}
        >
          <ul className="nav flex-column sticky-top pt-5 mt-3">
            {[...Array(20)].map((_, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href="#">
                  Last Item {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
