import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { getAllCourses, getAllStudents, getEnrolledStudents, getInstructors } from "../../api/adminService";

const AdminHome = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalEnrolledStudents, setTotalEnrolledStudents] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);

  useEffect(() => {
    fetchTotalStudents();
    fetchEnrolledStudents();
    fetchAllCourses();
    fetchAllInstructors();
  }, []);

  let jwt = localStorage.getItem("token");

  const fetchTotalStudents = async () => {
    try {
      const studentResponse = await getAllStudents(jwt);
      const students = studentResponse.data;
      setTotalStudents(students.length);
    } catch (error) {
      console.error("Error Fetching All Students: ", error);
    }
  };

  const fetchEnrolledStudents = async () => {
    try {
      const enrolledStudnetsResponse = await getEnrolledStudents(jwt);
      if (enrolledStudnetsResponse && enrolledStudnetsResponse.data) {
        setTotalEnrolledStudents(enrolledStudnetsResponse.data);
      }
    } catch (error) {
      console.error("Error Fetching Enrolled Students: ", error);
    }
  }

  const fetchAllCourses = async () =>{
    try {
      const courseResponse = await getAllCourses(jwt);
      const course = courseResponse.data;
      setTotalCourses(course.length);
    } catch (error) {
      console.error("Error Fetching All Courses :", error);
    }
  }

  const fetchAllInstructors = async () =>{
    try {
      const instructorResponse = await getInstructors(jwt);
      const Instructors = instructorResponse.data;
      setTotalInstructors(Instructors.length);
    } catch (error) {
      console.error("Error fetching all Instructors :", error);
    }
  }

  return (
    <main className="main-container">
      <div className="main-title"></div>

      <div className="main-cards">
        <div className="card-outer">
          <div className="card-inner">
            <h3>Total Students</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{totalStudents}</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Enrolled Students</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{totalEnrolledStudents}</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Total Courses</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{totalCourses}</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Total Instructors</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{totalInstructors}</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Fees Collection</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>15,000</h1>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
