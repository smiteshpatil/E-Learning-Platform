import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoursePost = (props) => {
  return (
    <div className="course-post" key={props.currentCourse.id}>
      <img className="cover-img" src={props.currentCourse.thumbnail} alt="" />

      <Link to={`courses/${props.currentCourse.id}`}>
        <h2 className="title">{props.currentCourse.title}</h2>
      </Link>

      <p className="description">{props.currentCourse.description}</p>
      <div className="card-details">
        <div className="lh-details">
          <img
            className="author-img"
            src={props.currentCourse.author.profilePicture.url}
            alt=""
          />
          <p className="date">
            {new Date(
              `${props.currentCourse.datePublished}`
            ).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <Link
          to={`courses/${props.currentCourse.id}`}
          rel="noopener noreferrer"
          className="read-more"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CoursePost;
