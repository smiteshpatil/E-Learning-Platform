import React, { useEffect, useState, useCallback } from "react";
import CreateCourseCard from "./CreateCourseCard";
import AddCourseContent from "./AddCourseContent";
import { toast } from "react-toastify";
import {
  getAllCoursesByInstructorId,
  createNewCourse,
  deleteCourseById,
} from "../../api/courseService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Courses = () => {
  const navigate = useNavigate();
  let { authUser } = useAuth();

  //get instructorId and token from localStorage
  let instructorId = JSON.parse(localStorage.getItem("userObject")).id;
  let token = localStorage.getItem("token");

  // State for managing the list of courses
  const [myCourses, setMyCourses] = useState([]);

  // Function to fetch courses
  const fetchCourses = useCallback(async () => {
    try {
      if (authUser || localStorage.getItem("userObject")) {
        const resp = await getAllCoursesByInstructorId(instructorId, token);
        setMyCourses(resp.data);
      } else {
        toast.warning("You need to be logged in to view your courses.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error, show toast
    }
  }, [authUser, instructorId, navigate, token]);

  // Effect to fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Function to launch a new course
  const launchNewCourse = async (newCourse) => {
    newCourse.instructorId = instructorId;
    console.log("in launch new course:", newCourse.imageUrl);
    try {
      await createNewCourse(newCourse, token);
      // Refresh course list after creating a new course
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to delete a course
  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourseById(courseId, token);
      // Refresh course list after deleting a course
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
      // Handle error, show toast
    }
  };
  return (
    <>
      <CreateCourseCard createCourse={launchNewCourse} />

      {/* My courses */}
      <div className="container my-3">
        <h2>My Courses</h2>
        <div className="row">
          {myCourses && myCourses.length > 0 ? (
            myCourses.map((currCourse, index) => (
              <AddCourseContent
                key={index}
                course={currCourse}
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
