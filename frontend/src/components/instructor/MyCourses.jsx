import React from "react";
import AddCourseContent from "./AddCourseContent";

const MyCourses = (props) => {
  return (
    <div className="container-fluid my-3 mx-3">
      <h2>My Courses</h2>
      <div className="row">
        {props.courses ? (
          props.courses.map((course, index) => {
            <AddCourseContent key={index} course={course} />;
          })
        ) : (
          <div>You have not created any course yet !</div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
