import React, { useState } from "react";
import CreateCourseCard from "./CreateCourseCard";
import MyCourses from "./MyCourses";
import { createNewCourse } from "../../api/courseService";
import { useAuth } from "../../context/AuthContext";

const Courses = () => {
  let { authUser } = useAuth();
  // State for managing the list of courses
  const [myCourses, setMyCourses] = useState([]);

  // Function to handle launching a new course
  const launchNewCourse = (newCourse) => {
    // Send a request to your backend API to create the new course
    const token = localStorage.getItem("token");

    //add instructor id in newCourse
    newCourse.instructorId = authUser.id;
    try {
      const resp = createNewCourse(newCourse, token);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }

    setMyCourses([...myCourses, newCourse]);
  };

  return (
    <>
      <CreateCourseCard createCourse={launchNewCourse} />
      <MyCourses courses={myCourses} />
    </>
  );
};

export default Courses;
