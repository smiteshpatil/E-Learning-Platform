import React, { useEffect } from "react";
import CourseContent from "./CourseContent";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../api/courseService";
import "./CoursePage.css";

import img from "../../images/card1.jpg";

const CoursePage = () => {
  const { allCourses, setAllCourses } = useAuth();

  useEffect(() => {
    setAllCourses(courses);
  });

  return (
    <div>
      <div className="container">
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-8">
              <div>
                <h2>Course Title</h2>
                <h5>Sub heading</h5>
                <div class="review">BestSeller/created by</div>
                <p>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
              <h3 class="mt-4">What you will learn</h3>
              <div class="row">
                <div class="col-sm-6">First</div>
                <div class="col-sm-6">Second</div>
              </div>

              <h3 class="mt-4">This course includes</h3>
              <div class="row">
                <div class="col-sm-6">First</div>
                <div class="col-sm-6">Second</div>
              </div>

              <h3 class="mt-4">
                Top companies offer this course to their employees
              </h3>
              <h5>Sub heading</h5>
              <div class="row">
                <div class="col-sm-6">First</div>
                <div class="col-sm-6">Second</div>
              </div>

              <CourseContent />
            </div>
            <div class="col-sm-4">
              <div class="card course-card">
                <img src={img} alt="John" style={{ width: "100%" }} />
                <h1>John Doe</h1>
                <p class="title course-title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                {/* <div style={{ margin: "24px 0" }}>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
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
