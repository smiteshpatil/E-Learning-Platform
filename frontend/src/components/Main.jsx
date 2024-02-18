import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import "../css/Main.css";
import { courses, getAllCourses } from "../api/courseService";
import CourseCard from "./CourseCard";
const Main = () => {
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [currentCourse, setcurrentCourse] = useState(1);
  const [coursesPerPage] = useState(4);

  useEffect(() => {
    const fetchTrendingCourses = async () => {
      try {
        const response = await getAllCourses();
        const coursesData = response.data;
        // Sort the courses based on their average rating
        coursesData.sort(
          (a, b) => b.courseDTO.averageRating - a.courseDTO.averageRating
        );
        // Update state with the sorted courses
        setTrendingCourses(coursesData);
      } catch (error) {
        console.error("Error fetching trending courses:", error);
      }
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
    <div className="container-fluid mx-5 my-5">
      <div className="title">
        <h1>Trending Courses</h1>
      </div>
      {trendingCourses ? (
        <div className="course-content-section">
          <div className="course-container">
            {currentCourses.map((currentCourse, index) => (
              <CourseCard key={index} currCourse={currentCourse} />
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
