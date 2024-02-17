import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "./CourseContent";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../api/courseService";
import "./CoursePage.css";

import img from "../../images/card1.jpg";

const CoursePage = () => {
  //current courseId
  const { id } = useParams();
  console.log("In CoursePage", id);
  const { allCourses } = useAuth();

  useEffect(() => {}, []);

  return (
    <div>
      <div className="container">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-8">
              <div>
                <h2>Course Title</h2>
                <h5>Sub heading</h5>
                <div className="review">BestSeller/created by</div>
                <p>
                  Some text about me in culpa qui officia deserunt mollit anim..
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
                {/* <div style={{ margin: "24px 0" }}>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div> */}
                <p>
                  <button className="btn btn-outline-success">
                    Buy This Course
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
