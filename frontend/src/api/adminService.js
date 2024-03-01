import axios from "axios";
// const baseUrl = "http://localhost:8080";
const baseUrl = "http://3.109.231.43:8080";

// Get All Students
export const getAllStudents = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/students", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Get All EnrolledStudents
export const getEnrolledStudents = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/admin/enrolledStudents", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log("Error in getting enrolled students: ", error);
  }
};

//get All Courses
export const getAllCourses = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/courses", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log("Error in getting all Courses: ", error);
  }
};

//get all instructors
export const getInstructors = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/instructors", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching all instructors: ", error);
  }
};

//get studentControllerDetails
export const getStudentCourseDetails = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/admin/studentcourses", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log("studentcourses: ", response.data);
    return response;
  } catch (error) {
    console.error("Error Fetching  Student Course Details : ", error);
  }
};

//delete a student from a particular course
export const revokeStudentFromCourse = async (
  courseId,
  studentId,
  bearerToken
) => {
  try {
    const response = await axios.delete(
      baseUrl + `/admin/${courseId}/${studentId}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    console.log("In adminService of delete method response: ", response);
    return response;
  } catch (error) {
    console.error("Error Deleting  User from the Course: ", error);
  }
};

//get instructorControllerDetails
export const getInstructorsDetails = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/admin/instructorinfo", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error Fetching  Student Course Details : ", error);
  }
};

//get courseControllerDetails
export const getCourseDetails = async (bearerToken) => {
  try {
    const response = await axios.get(baseUrl + "/admin/coursedetails", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error Fetching  Student Course Details : ", error);
  }
};
