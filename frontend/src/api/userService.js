import axios from "axios";

const baseURL = "http://localhost:7070";

export const signIn = async (userCredentials) => {
  try {
    const response = await axios.post(baseURL + "/users/signin", {
      email: userCredentials.email,
      password: userCredentials.password,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (user, token) => {
  try {
    const response = await axios.post(
      baseURL + "/users/signup",
      {
        email: user.email,
        firstName: user.name,
        lastName: user.family_name,
        password: user.password,
        role: user.role,
        phoneNo: user.phoneNo,
        gender: user.gender,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
