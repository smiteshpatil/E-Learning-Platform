import React, { useState } from "react";
import CreateCourseCard from "./CreateCourseCard";

const Courses = () => {
  // State for managing the list of courses
  const [courses, setCourses] = useState([]);

  // State for managing the form input for launching a new course
  const [newCourseName, setNewCourseName] = useState("");

  // Function to handle launching a new course
  const launchNewCourse = () => {
    if (newCourseName.trim() !== "") {
      // Here, you would typically send a request to your backend API to create the new course
      // After successfully creating the course, you would update the courses state
      // For demonstration purposes, we'll just add the new course to the state directly
      const newCourse = {
        id: courses.length + 1,
        name: newCourseName,
      };
      setCourses([...courses, newCourse]);
      setNewCourseName(""); // Clear input field after launching a new course
    }
  };

  return (
    <>
      <CreateCourseCard />
    </>
  );
};

export default Courses;
