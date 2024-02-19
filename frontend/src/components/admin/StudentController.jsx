import React, { useState, useEffect } from "react";
import { getStudentCourseDetails, revokeStudentFromCourse } from "../../api/adminService"; 
import "./Controller.css";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

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

  // Function to handle revoking a student from a course
  const handleRevoke = async (courseId, studentId) => {
    try {
      if(!courseId){
        console.error("Invalid CourseId");
      }

      if(!studentId){
        console.error("Invalid StudentId");
      }

      const response = await revokeStudentFromCourse(courseId, studentId, jwt);
      if(response.status == 200 ){
        fetchStudentDetails();
        toast.success("student has been successfully removed from the course.");
      }
    } catch (error) {
      console.error("Failed to revoke the student from course: ", error);
      toast.error("Failed to revoke the student from course");
    }
  }

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
                  <button onClick={()=> handleRevoke(student.courseId, useAuth.id)}>Revoke</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentController;
