import axios from "axios";

const baseURL = "http://localhost:8080";

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
    throw err; // Throw error to be caught in handleSignUp function
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

//POST: update password
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
