import React, { useEffect } from "react";
import CourseContent from "./CourseContent";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../api/courseService";
const CoursePage = () => {
  const { allCourses, setAllCourses } = useAuth();

  useEffect(() => {
    setAllCourses(courses);
  }, []);

  return (
    <div>
      <div className="container">
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-8">
              <h2>Course Title</h2>
              <h5>Sub heading</h5>
              <div class="review">BestSeller/created by</div>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
