import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoOverview from "./VideoOverview";
import VideoQAndA from "./VideoQAndA";
import VideoNotes from "./VideoNotes";
import VideoReview from "./VideoReview";
import VideoPlaylist from "./VideoPlaylist";

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Video Player */}
          <div className="col-lg-8">
            {/* Video Player Component */}
            <video controls>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Navigation Bar */}
          <div className="col-lg-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/overview"
                    >
                      Overview
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/qanda"
                    >
                      Q/A
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/notes"
                    >
                      Notes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/review"
                    >
                      Review
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Routes */}
            <Switch>
              <Route path="/overview" component={VideoOverview} />
              <Route path="/qanda" component={VideoQAndA} />
              <Route path="/notes" component={VideoNotes} />
              <Route path="/review" component={VideoReview} />
            </Switch>
          </div>

          {/* Playlist */}
          <div className="col-lg-4">
            <h4 className="mt-3">Video Playlist</h4>
            <VideoPlaylist setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default VideoPage;
