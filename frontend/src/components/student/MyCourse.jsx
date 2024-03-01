import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaPlayCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCourse = (props) => {
  let progress = 50;

  const courseId = props.course.id;

  return (
    <div className="card" style={{ width: "300px" }}>
      <img
        src={props.course && props.course.imageUrl}
        className="card-img-top"
        alt="Course"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <h5 className="card-title">{props.course && props.course.courseName}</h5>
      <ProgressBar
        variant="success"
        now={progress}
        label={`${progress}%`}
        className="mx-2"
      />
      <Link
        className="btn play-btn"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.7",
        }}
        to={`/videos/${courseId}`}
      >
        <FaPlayCircle size={40} color="white" />
      </Link>
    </div>
  );
};

export default MyCourse;
