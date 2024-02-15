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
const Courses = () => {
  const navigate = useNavigate();

  //instructoId
  let instructorId = localStorage.getItem("userObject").id;
  let token = localStorage.getItem("token");

  // State for managing the list of courses
  const [myCourses, setMyCourses] = useState([]);

  // handle launching a new course
  const launchNewCourse = (newCourse) => {
    const token = localStorage.getItem("token");
    //add instructor id in newCourse
    newCourse.instructorId = instructorId;
    try {
      const resp = createNewCourse(newCourse, token);
      console.table(resp);
      setMyCourses([...myCourses, newCourse]);
    } catch (err) {
      console.log(err);
    }
  };

  //delete course
  const handleDeleteCourse = (courseId) => {
    deleteCourseById(courseId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const coursesPromise = getAllCoursesByInstructorId(instructorId);
          toast.promise(coursesPromise, {
            pending: "Loading your courses...",
            success: "Your courses loaded",
            error: "Error loading your courses",
          });
          const courses = await coursesPromise;
          setMyCourses(courses);
          console.log(courses);
        } else {
          toast.warning("You need to be logged in to view your courses.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [token, instructorId]);

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
