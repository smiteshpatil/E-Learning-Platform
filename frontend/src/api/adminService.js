import axios from "axios";
const baseUrl = "http://localhost:8080";

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
        const response = await axios.get(baseUrl + "/students", {
            headers:{
                Authorization: `Bearer ${bearerToken}`
            },
        });
        return response;
    } catch (error) {
        console.log("Error in getting enrolled students: ", error);
    }
}

//get All Courses
export const getAllCourses = async (bearerToken) => {
    try {
        const response = await axios.get(baseUrl + "/students" , {
            headers:{
                Authorization: `Bearer ${bearerToken}`,
            }
        });
        return response;
    } catch (error) {
        console.log("Error in getting all Courses: ", error);
    }
}

//get all instructors 
export const getInstructors = async (bearerToken)=>{
    try {
        const response = await axios.get(baseUrl + "/students", {
            headers:{
                Authorization: `Bearer ${bearerToken}`
            }
        })
        return response;
    } catch (error) {
        console.error("Error in fetching all instructors: ", error);
    }
}