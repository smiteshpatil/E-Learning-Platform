import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../images/card1.jpg";
import { useAuth } from "../context/AuthContext";
const CourseCard = (props) => {
  let currentCourse = props.currCourse.courseDTO;
  let author = props.currCourse.instructorDTO;

  let { allCourses } = useAuth();
  console.log(allCourses);

  return (
    // <h1>{currentCourse.courseDTO.averageRating}</h1>
    <div className="course-post" key={currentCourse.id}>
      <img
        className="cover-img"
        src={currentCourse.imageUrl ? currentCourse.imageUrl : thumbnail}
        alt=""
      />

      <Link to={`/courses/${currentCourse.id}`}>
        <h2 className="title">{currentCourse.courseName}</h2>
      </Link>

      <p className="description">
        {currentCourse.description.split(" ").slice(0, 30).join(" ")}...
      </p>
      <div className="card-details">
        <div className="lh-details">
          <img
            className="author-img"
            src={author.imageUrl ? author.imageUrl : ""}
            alt=""
          />
          <p className="date">
            {new Date(`${currentCourse.publishedDate}`).toLocaleDateString(
              "en-us",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )}
          </p>
        </div>
        <Link
          to={`courses/${currentCourse.id}`}
          rel="noopener noreferrer"
          className="read-more"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
