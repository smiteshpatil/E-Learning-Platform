import axios from "axios";

const baseURL = "http://localhost:8080";

export const signIn = async (userEmail, userPass) => {
  try {
    console.log("sign in calledd");
    const response = await axios.post(baseURL + "/users/signin", {
      email: userEmail,
      password: userPass,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
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
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
