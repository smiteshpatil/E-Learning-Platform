import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import "../css/Main.css";
import { Link } from "react-router-dom";
import { courses } from "../api/courseService";
const Main = () => {
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [currentCourse, setcurrentCourse] = useState(1);
  const [coursesPerPage] = useState(4);

  useEffect(() => {
    const fetchTrendingCourses = async () => {
      setTrendingCourses(courses);
    };

    fetchTrendingCourses();
  }, []);

  const indexOfLastCourse = currentCourse * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = trendingCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = ({ selected }) => {
    setcurrentCourse(selected + 1);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Trending Courses</h1>
      </div>
      {trendingCourses ? (
        <div className="course-content-section">
          <div className="course-container">
            {currentCourses.map((currentCourse) => (
              <div className="course-post" key={currentCourse.id}>
                <img
                  className="cover-img"
                  src={currentCourse.thumbnail}
                  alt=""
                />

                <Link to={`courses/${currentCourse.id}`}>
                  <h2 className="title">{currentCourse.title}</h2>
                </Link>

                <p className="description">{currentCourse.description}</p>
                <div className="card-details">
                  <div className="lh-details">
                    <img
                      className="author-img"
                      src={currentCourse.author.profilePicture.url}
                      alt=""
                    />
                    <p className="date">
                      {new Date(
                        `${currentCourse.datePublished}`
                      ).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <Link
                    to={`courses/${currentCourse.id}`}
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    View Course
                  </Link>
                  {/* <Link to={`cart`}>cart</Link> */}
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(trendingCourses.length / coursesPerPage)}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            pageLinkClassName={"page-number"}
            previousLinkClassName={"page-number"}
            nextLinkClassName={"page-number"}
            activeLinkClassName={"active"}
          />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Main;
