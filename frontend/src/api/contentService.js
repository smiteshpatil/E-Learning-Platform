import axios from "axios";
const baseUrl = "http://localhost:8080";

//GET: get all contents of a particular course
export const getAllContentsByCourseId = async (courseId, bearerToken) => {
  try {
    const response = await axios.get(baseUrl + `/contents/${courseId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//POST: add new content by courseId
export const addNewContent = async (newContent, bearerToken) => {
  try {
    const response = await axios.post(baseUrl + "/contents/add", newContent, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

//DELETE delete content by contentId
export const deleteContent = async (contentId, token) => {
  try {
    const response = await axios.delete(
      baseUrl + `/contents/delete/${contentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting content:", error);
    throw error;
  }
};
