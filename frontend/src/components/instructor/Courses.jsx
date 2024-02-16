import React, { useEffect, useState } from "react";
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
  // let instructorId = authUser.id;
  let instructorId = JSON.parse(localStorage.getItem("userObject")).id;
  let token = localStorage.getItem("token");

  // State for managing the list of courses
  const [myCourses, setMyCourses] = useState(false);

  // handle launching a new course
  const launchNewCourse = (newCourse) => {
    //add instructor id in newCourse
    newCourse.instructorId = instructorId;
    try {
      const resp = createNewCourse(newCourse, token);
      console.table(resp);
    } catch (err) {
      console.log(err);
    }
  };

  //delete course
  const handleDeleteCourse = (courseId) => {
    const resp = deleteCourseById(courseId, token);
  };

  useEffect(() => {
    const fetchData = async () => {
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
        // Handle error, show toast, etc.
      }
    };

    fetchData();
  }, []);

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
