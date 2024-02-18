import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./CoursePage.css";
import img from "../../images/card1.jpg";

import CourseContent from "./CourseContent";

const CoursePage = () => {
  const { allCourses, isLoading } = useAuth();
  const { id } = useParams();
  console.log(allCourses);
  const [currCourse, setCurrCourse] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const fetchCurrentCourse = () => {
        const specificCourse = allCourses.find(
          (curr) => curr.courseDTO.id === id
        );
        if (specificCourse) {
          setCurrCourse(specificCourse);
        } else {
          console.log("No course found with ID:", id);
        }
      };
      fetchCurrentCourse();
    }
  }, [allCourses, isLoading, id]);

  return (
    <div>
      <div className="container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-8">
                <div>
                  <h2>{currCourse && currCourse.courseDTO.courseName}</h2>
                  <h5>{currCourse && currCourse.courseDTO.heading}</h5>
                  <div className="review">BestSeller/created by</div>
                  <p>
                    Some text about me in culpa qui officia deserunt mollit
                    anim..
                  </p>
                </div>
                <h3 className="mt-4">What you will learn</h3>
                <div className="row">
                  <div className="col-sm-6">First</div>
                  <div className="col-sm-6">Second</div>
                </div>

                <h3 className="mt-4">This course includes</h3>
                <div className="row">
                  <div className="col-sm-6">First</div>
                  <div className="col-sm-6">Second</div>
                </div>

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
              <div className="col-sm-4">
                <div className="card course-card">
                  <img src={img} alt="John" style={{ width: "100%" }} />
                  <h1>John Doe</h1>
                  <p className="title course-title">CEO & Founder, Example</p>
                  <p>Harvard University</p>

                  <p>
                    <button className="btn btn-outline-success">
                      Buy This Course
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
