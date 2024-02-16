import axios from "axios";
const baseUrl = "http://localhost:8080/";

//GET: get all contents of a particular course
export const getAllContentsByCourseId = async (courseId, bearerToken) => {
  try {
    const response = await axios.get(baseUrl + `contents/${courseId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

//POST: add new content by courseId
export const addNewContent = async (courseId, newContent) => {
  try {
    const response = await axios.post(
      baseUrl + `/contents/${courseId}`,
      newContent
    );
    console.table(response);
  } catch (err) {
    console.log(err);
  }
};
