import axios from "axios";

const baseURL = "http://localhost:8080";

export const signIn = async (userCredentials) => {
  try {
    const response = await axios.post(baseURL + "/signin", {
      email: userCredentials.email,
      password: userCredentials.password,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (user) => {
  try {
    const response = await axios.post("/signup", {
      email: user.email,
      name: user.name,
      lastName: user.family_name,
      password: user.password,
      role: user.role,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
