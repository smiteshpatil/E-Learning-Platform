import React, { useEffect } from "react";
import CourseContent from "./CourseContent";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../api/courseService";
import "./CoursePage.css";
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
              <div >
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
<<<<<<< HEAD
            <div class="col-sm-4 offset-md-6" style={{position: 'fixed'}}>
              <div class="card">
                <img src="/w3images/team2.jpg" alt="John" style={{width:'100%'}} />
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{margin: '24px 0'}}>
                  <a href="#"><i class="fa fa-dribbble"></i></a> 
                  <a href="#"><i class="fa fa-twitter"></i></a>  
                  <a href="#"><i class="fa fa-linkedin"></i></a>  
                  <a href="#"><i class="fa fa-facebook"></i></a> 
                </div>
                <p><button>Contact</button></p>
              </div>
            </div>
            {/* <CoursePost currentCourse={allCourses[0]} /> */}
=======
>>>>>>> f5a30e27faf9d96f241ebbfd897cc335b26a57d0
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
