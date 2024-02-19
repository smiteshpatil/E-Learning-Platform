import React from "react";
import "./css/VideoQAndA.css";
// import { courses } from "../../api/courseService";
import QandASearchBar from "./QandASearchBar";
import PublishQuestion from "./PublishQuestion";
const VideoQAndA = () => {
  // let currentCourse = courses[0];
  return (
    <>
      <div className="mx-3 mt-3" style={{ color: "black" }}>
        <div className="QandAcontainer">
          <strong>Tips on getting your questions answered faster</strong>
          <ul className="tips-list">
            <li>Search to see if your question has been asked before</li>
            <li>
              Be detailed; provide screenshots, error messages, code, or other
              clues whenever possible
            </li>
            <li>Check grammar and spelling</li>
          </ul>
        </div>
      </div>
      <div className="QandASearch">
        <QandASearchBar />
        <PublishQuestion />
      </div>
    </>
  );
};

export default VideoQAndA;
