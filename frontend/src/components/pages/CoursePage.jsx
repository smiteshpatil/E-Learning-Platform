import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import img from "../../images/card1.jpg";
import CourseContent from "./CourseContent";
import "./CoursePage.css";

const CoursePage = () => {
  const { allCourses, isLoading } = useAuth();
  const { id } = useParams();
  const [currCourse, setCurrCourse] = useState({});

  useEffect(() => {
    console.log("in useEffect 14");
    if (!isLoading) {
      const fetchCurrentCourse = () => {
        const specificCourse = allCourses.find(
          (curr) => curr.courseDTO.id == id
        );
        if (specificCourse) {
          console.log("In if 21", specificCourse);
          setCurrCourse(specificCourse);
        } else {
          console.log("No course found with ID:", id);
        }
      };
      fetchCurrentCourse();
      console.log("useEffect Called");
    }
  }, [isLoading, allCourses]);

  return (
    <div className="container-fluid my-3 course-page">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-8">
              <div>
                <h2>
                  {currCourse.courseDTO && currCourse.courseDTO.courseName}
                </h2>
                <h5>{currCourse.courseDTO && currCourse.courseDTO.heading}</h5>
                <div className="review">BestSeller/created by</div>
                <p>
                  {currCourse.contentDTO && currCourse.instructorDTO.firstName}
                </p>
              </div>
              <h3 className="mt-4">What you will learn</h3>
              <div className="row">
                {/* <div className="col-sm-6">First</div>
                <div className="col-sm-6">Second</div> */}
                {currCourse.courseDTO && currCourse.courseDTO.description}
              </div>

              <h3 className="mt-4">This course includes</h3>
              {currCourse.contentDTO &&
                currCourse.contentDTO.map((each, index) => (
                  <div className="row" key={index}>
                    <div className="col-sm-3">{each.contentName}</div>
                    <div className="col-sm-9">{each.contentDescription}</div>
                  </div>
                ))}

              <h3 className="mt-4">
                Top companies offer this course to their employees
              </h3>
              <h5>Sub heading</h5>
              <div className="row">
                <div className="col-sm-6">First</div>
                <div className="col-sm-6">Second</div>
              </div>

              <CourseContent />
            </div>
            <div className="col-sm-4 ">
              <div className="card course-card">
                <img src={img} alt="John" style={{ width: "100%" }} />
                <br />
                <h2>
                  {currCourse.courseDTO && currCourse.courseDTO.courseName}
                </h2>
                {/* <p className="title course-title">CEO & Founder, Example</p>
                <p>Harvard University</p> */}

                <p>
                  <button
                    className="btn"
                    style={{ color: "white", backgroundColor: "#512da8" }}
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
