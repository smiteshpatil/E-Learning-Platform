import React, { useState, useEffect } from "react";
import { getCourseDetails } from "../../api/adminService";
import "./Controller.css";

const CourseController = () => {
  const [course, setCourse] = useState();

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  let jwt = localStorage.getItem("token");

  const fetchCourseDetails = async () => {
    try {
      const courseResponse = await getCourseDetails(jwt);
      const response = courseResponse.data;
      setCourse(response);
    } catch (error) {
      console.error(
        "Error fetching student details in instructorController: ",
        error
      );
    }
  };

  return (
    <div className="table-container">
      <div className="details-heading">
        <h1>Course Details</h1>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Course Name</th>
            <th> Enrolled Students</th>
            <th>Course Price</th>
            <th>Avg Ratings</th>
          </tr>
        </thead>
        <tbody>
          {course &&
            course.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course.courseName}</td>
                <td>{course.enrolledStudents}</td>
                <td>{course.price}</td>
                <td>{course.rating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseController;