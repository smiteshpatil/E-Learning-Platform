import axios from "axios";
const baseUrl = "http://localhost:8080";

//GET: get all Enrolled courses of student
export const getAllEnrolledCoursesByStudentId = async (studentId, token) => {
  try {
    const resp = axios.get(baseUrl + `/courses/student/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp.data);
    return resp;
  } catch (error) {
    throw error;
  }
};
