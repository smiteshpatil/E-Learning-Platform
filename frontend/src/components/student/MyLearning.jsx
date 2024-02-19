import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "../css/VideoPage.css";
// import "../pages/css/";

const MyLearning = () => {
  const [activeLink, setActiveLink] = useState(""); // State to store the active link

  // change style on click
  const toggleStyle = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
    <div
      className="container mt-3"
      style={{ color: "white", backgroundColor: "#2d2f31" }}
    >
      <h1>My Learning</h1>
      <ul className="resource-section">
        <li className="nav-item">
          <NavLink
            to="overview"
            className={
              "nav-link" + (activeLink === "overview" ? " active-link" : "")
            }
            // onClick={() => toggleStyle("overview")}
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
            // onClick={() => toggleStyle("qanda")}
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
            // onClick={() => toggleStyle("notes")}
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
            // onClick={() => toggleStyle("review")}
          >
            Review
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MyLearning;
