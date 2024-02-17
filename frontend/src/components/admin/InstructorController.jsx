import React, { useState, useEffect } from "react";
import { getInstructorsDetails } from "../../api/adminService";
import "./Controller.css";

const InstructorController = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetchInstructorsDetails();
  }, []);

  let jwt = localStorage.getItem("token");

  const fetchInstructorsDetails = async () => {
    try {
      const instructorResponse = await getInstructorsDetails(jwt);
      const response = instructorResponse.data;
      setInstructors(response);
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
        <h1>Instructor Details</h1>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Username</th>
            <th>Course Name</th>
            <th>Published Date</th>
          </tr>
        </thead>
        <tbody>
          {instructors &&
            instructors.map((instructor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{instructor.email}</td>
                <td>{instructor.courseName}</td>
                <td>{instructor.enrolledDate}</td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstructorController;