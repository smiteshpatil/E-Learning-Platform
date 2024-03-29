import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PlayListDropdown from "./PlayListDropdown";
import { content } from "../../api/courseService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/VideoPage.css";

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [playtimeInSeconds, setPlaytimeInSeconds] = useState(0);
  const [watchedTime, setWatchedTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [activeLink, setActiveLink] = useState(""); // State to store the active link
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // State to store the index of the currently playing video

  // change style on click
  const toggleStyle = (link) => {
    setActiveLink(link); // Update the active link state
  };

  // set video link
  const handleVideoChange = (videoUrl, index) => {
    setSelectedVideo(videoUrl);
    setCurrentVideoIndex(index);
  };

  // Function to handle video end event
  const handleVideoEnd = () => {
    // Play the next video in the playlist if available
    if (currentVideoIndex < content.length - 1) {
      const nextVideoIndex = currentVideoIndex + 1;
      const nextVideoUrl = content[nextVideoIndex].videoUrl;
      handleVideoChange(nextVideoUrl, nextVideoIndex);
    }
  };

  // Function to update watched time
  const updateWatchedTime = () => {
    if (isPlaying && startTime !== null) {
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // Convert milliseconds to seconds
      setWatchedTime((prevWatchedTime) => prevWatchedTime + duration);
      setStartTime(endTime);
    }
  };

  useEffect(() => {
    const videoElement = document.querySelector("video");

    const loadedMetadataHandler = () => {
      setPlaytimeInSeconds(videoElement.duration);
    };

    videoElement.addEventListener("loadedmetadata", loadedMetadataHandler);

    const timeUpdateHandler = () => {
      if (isPlaying && startTime === null) {
        setStartTime(Date.now());
      }
      updateWatchedTime();
    };

    videoElement.addEventListener("timeupdate", timeUpdateHandler);

    return () => {
      videoElement.removeEventListener("loadedmetadata", loadedMetadataHandler);
      videoElement.removeEventListener("timeupdate", timeUpdateHandler);
    };
  }, [selectedVideo, isPlaying, startTime]);

  //automatically play first video
  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.play(); // Programmatically play the video
    }
  }, []);

  // Function to handle video play/pause
  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    if (!isPlaying) {
      setStartTime(Date.now());
    } else {
      updateWatchedTime();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8" style={{ margin: "0px", padding: "0px" }}>
          <video
            controls
            autoPlay
            muted // Add muted attribute to mute the video by default
            style={{ width: "100%" }}
            key={selectedVideo}
            onPause={handlePlayPause}
            onPlay={handlePlayPause}
            onEnded={handleVideoEnd}
          >
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <p>Playtime: {playtimeInSeconds} seconds</p>
          <p>Watched Time: {watchedTime.toFixed(2)} seconds</p> */}
          {/* Lecture wise material section*/}
          <ul className="resource-section">
            <li className="nav-item">
              <NavLink
                to="overview"
                className={
                  "nav-link" + (activeLink === "overview" ? " active-link" : "")
                }
                onClick={() => toggleStyle("overview")}
              >
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="qanda"
                className={
                  "nav-link" + (activeLink === "qanda" ? " active-link" : "")
                }
                onClick={() => toggleStyle("qanda")}
              >
                Q&A
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="notes"
                className={
                  "nav-link" + (activeLink === "notes" ? " active-link" : "")
                }
                onClick={() => toggleStyle("notes")}
              >
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="review"
                className={
                  "nav-link" + (activeLink === "review" ? " active-link" : "")
                }
                onClick={() => toggleStyle("review")}
              >
                Review
              </NavLink>
            </li>
          </ul>
          <hr style={{ border: "1px solid black", margin: "0" }} />
          {/* Outlet  */}
          <Outlet />
        </div>
        <div
          className="col-md-4 bg-light"
          style={{
            height: "150vh",
            overflowY: "auto",
            margin: "0px",
            padding: "0px",
          }}
        >
          <PlayListDropdown
            content={content}
            changeVideoUrl={handleVideoChange}
            currentVideoIndex={currentVideoIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
