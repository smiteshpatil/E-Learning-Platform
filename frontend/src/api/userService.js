import axios from "axios";
// const baseURL = "http://localhost:8080";
const baseURL = "http://e-learning-platform.online:8080";

//POST: signIn using email and pass
export const signIn = async (userEmail, userPass) => {
  try {
    console.log("sign in calledd");
    const response = await axios.post(baseURL + "/users/signin", {
      email: userEmail,
      password: userPass,
    });
    return response.data;
  } catch (err) {
    console.log("signIn in service err", err, "end");
  }
};

//GET:
export const syncCart = async (userEmail, bearerToken) => {
  try {
    const response = await axios.get(
      baseURL + `/students/cartItems/${userEmail}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const syncCartToDB = async (userEmail, bearerToken, cart) => {
  try {
    const uniqueArray = [...new Set(cart)];
    //console.log("In useService: "+uniqueArray);
    const response = await axios.post(
      baseURL + `/students/cartItems/${userEmail}`,
      uniqueArray,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

//POST: regeister new account
export const signUp = async (user) => {
  try {
    console.log("signUP called");
    const response = await axios.post(baseURL + "/users/signup", {
      email: user.email,
      firstName: user.firstName,
      password: user.password,
      role: user.role,
    });
    console.log("signUp in service", response);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// POST: send OTP to user
export const sendOTP = async (email, userType) => {
  try {
    const response = await axios.post(baseURL + "/password/sendOtp", null, {
      params: {
        email: email,
        userType: userType,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//POST: update password via OTP
export const updatePassword = async (userDetails) => {
  try {
    console.log("In updatePassword: ", userDetails);
    const response = await axios.post(
      baseURL + "/password/updatePassword",
      null,
      {
        params: {
          email: userDetails.email,
          userType: userDetails.userType,
          newPassword: userDetails.newPassword,
          otp: userDetails.otp,
        },
      }
    );
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};

// PUT: update student details
export const updateStudentService = async (newDetails, token) => {
  try {
    let studentId = newDetails.id;
    console.log(studentId);
    console.log(newDetails);
    const resp = await axios.put(
      baseURL + `/students/update/${studentId}`,
      newDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(resp.data);
    return resp;
  } catch (error) {
    throw error;
  }
};

//POST: upload photo
export const uploadImage = async (file, type, id) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    formData.append("id", id);

    const response = await axios.post(baseURL + "/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Add any additional headers if needed
      },
    });

    console.log(response.data);
    // Handle success response here
  } catch (error) {
    console.error(
      "Error uploading image:",
      error.response ? error.response.data : error.message
    );
    // Handle error response here
  }
};

export const downloadImage = async (type, id) => {
  try {
    const response = await axios.get(baseURL + "/images/download", {
      params: {
        type: type,
        id: id,
      },
      responseType: "arraybuffer",
    });

    const imageBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const imageUrl = URL.createObjectURL(imageBlob);

    // Set the src attribute of the img tag to the generated URL
    return imageUrl;
  } catch (error) {
    console.error(
      "Error downloading image:",
      error.response ? error.response.data : error.message
    );
    // Handle error response here
  }
};
