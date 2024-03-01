import axios from "axios";
import thumbnail from "../images/card1.jpg";
const baseUrl = "http://localhost:8080";
// const baseUrl = "http://3.109.231.43:8080";

//GET: get all available courses
export const getAllCourses = async () => {
  try {
    const response = await axios.get(baseUrl + "/courses/details");
    return response;
  } catch (err) {
    console.log(err);
  }
};

//GET: Course by courseId
export const getCourseByCourseId = async (courseId, bearerToken) => {
  try {
    const response = await axios.get(baseUrl + `/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (err) {
    console.table(err);
  }
};

//GET: allCourses by instructorId
export const getAllCoursesByInstructorId = async (
  instructorId,
  bearerToken
) => {
  try {
    const response = await axios.get(baseUrl + `/courses/${instructorId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (err) {
    console.table(err);
  }
};

//POST:  launch new course
export const createNewCourse = async (newCourse, bearerToken) => {
  console.log("in createNewCourse", newCourse);
  try {
    const response = await axios.post(baseUrl + "/courses/add", newCourse, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

//DELETE: delete course by instructorId
export const deleteCourseById = async (courseId, bearerToken) => {
  try {
    const response = await axios.delete(
      baseUrl + `/courses/delete/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

//POST: review course
export const reviewCourse = async (courseId, bearerToken) => {
  try {
    const response = await axios.get(baseUrl + `/qna/${courseId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
