import React, { useState } from "react";
import CreateCourseCard from "./CreateCourseCard";
import AddCourseContent from "./AddCourseContent";
import { createNewCourse, createDummyCourse } from "../../api/courseService";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../api/courseService";
const Courses = () => {
  let { authUser } = useAuth();
  // State for managing the list of courses
  const [myCourses, setMyCourses] = useState(courses);

  // Function to handle launching a new course
  const launchNewCourse = (newCourse) => {
    // const token = localStorage.getItem("token");
    //add instructor id in newCourse
    newCourse.instructorId = authUser.id;
    try {
      // const resp = createNewCourse(newCourse, token);
      const resp = createDummyCourse(newCourse);
      console.table(resp);
      console.log(newCourse);
      // console.log(resp);
      setMyCourses([...myCourses, newCourse]);
    } catch (err) {
      console.log(err);
    }
  };

  //delete course
  const handleDeleteCourse = (id) => {
    setMyCourses(myCourses.filter((course) => course.id !== id));
  };

  return (
    <>
      <CreateCourseCard createCourse={launchNewCourse} />

      {/* My courses */}
      <div className="container my-3">
        <h2>My Courses</h2>
        <div className="row">
          {myCourses && myCourses.length > 0 ? (
            myCourses.map((course, index) => (
              <AddCourseContent
                key={index}
                course={course}
                deleteCourse={handleDeleteCourse}
              />
            ))
          ) : (
            <div>You have not created any course yet !</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
