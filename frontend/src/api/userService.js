import axios from "axios";

const baseURL = "http://localhost:8080";

export const signIn = async (userEmail, userPass) => {
  try {
    console.log("sign in calledd");
    const response = await axios.post(baseURL + "/users/signin", {
      email: userEmail,
      password: userPass,
    });
    console.log("signIn in service try", response);
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
