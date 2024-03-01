import React, { useEffect, useState } from "react";
import MyCourse from "./MyCourse";
import { getAllEnrolledCoursesByStudentId } from "../../api/studentService";
import { useAuth } from "../../context/AuthContext";
const MyLearning = () => {
  let { authUser } = useAuth();
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      const resp = await getAllEnrolledCoursesByStudentId(
        authUser.id,
        localStorage.getItem("token")
      );
      if (resp) {
        setMyCourses(resp.data);
        console.log(resp.data);
      }
    };
    fetchMyCourses();
  }, []);

  return (
    <div
      className="px-auto text-center py-3"
      style={{ backgroundColor: "beige" }}
    >
      <h1>My Courses</h1>

      <div className="row mx-auto">
        {myCourses &&
          myCourses.map((each, index) => (
            <div className="col col-md-3 col-sm-6">
              <MyCourse key={index} course={each} />
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyLearning;
