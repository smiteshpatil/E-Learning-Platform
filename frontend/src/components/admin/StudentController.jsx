import React, { useState, useEffect } from "react";
import { getStudentCourseDetails } from "../../api/adminService";
import "./Controller.css";

const StudentController = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  let jwt = localStorage.getItem("token");

  const fetchStudentDetails = async () => {
    try {
      const studentResponse = await getStudentCourseDetails(jwt);
      const response = studentResponse.data;
      setStudents(response);
    } catch (error) {
      console.error(
        "Error fetching student details in studentController: ",
        error
      );
    }
  };

  return (
    <div className="table-container">
      <div className="details-heading">
        <h1>Student Details</h1>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Username</th>
            <th>Enrolled Course</th>
            <th>Enrolled Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.email}</td>
                <td>{student.courseName}</td>
                <td>{student.enrolledDate}</td>
                <td>
                  <button>Revoke</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentController;