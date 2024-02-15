import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/LoginPage.css";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../api/userService";
import { toast } from "react-toastify";
const LoginPage = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  // state for styling depending on the page
  const [isActive, setIsActive] = useState(false);

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    email: "",
    role: "",
    password: "",
  });

  //handleClearForm
  const handleClearForm = () => {
    setFormDetails({
      firstName: "",
      email: "",
      role: "",
      password: "",
    });
  };

  //set form details
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  //set user context
  // const setUserContext = (jwt, userDetails) => {
  //   setIsLoggedIn(true);
  //   console.log("LoginPage: In setUserContext ", userDetails);
  //   setAuthUser(userDetails);
  //   navigate("/");
  // };

  // sign in using userService

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (formDetails.email !== "" && formDetails.password !== "") {
      try {
        const response = await signIn(formDetails.email, formDetails.password);
        console.table(response);
        // Check if response exists and contains jwt and userDetails
        if (response && response.jwt && response.userDetails) {
          const { jwt, userDetails } = response;
          // save the token in local storage
          localStorage.setItem("token", jwt);
          localStorage.setItem("userObject", userDetails);
          // setUserContext(jwt, userDetails);
          toast.success("Signed in successfully");
          setIsLoggedIn(true);
          navigate("/");
        } else {
          toast.error("Invalid email or password");
        }
      } catch (error) {
        if (error && error.response && error.response.status === 401) {
          toast.error("Error signing in");
        }
      }
    } else {
      toast.error("All fields are compulsory");
    }
  };

  //signUp using userService
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { firstName, email, password } = formDetails;

    if (firstName !== "" && email !== "" && password !== "") {
      setFormDetails({
        ...formDetails,
        role: document.getElementById("role").value,
      });
      try {
        await signUp(formDetails);
        toast.success("Signed up successfully"); // Show success toast on successful sign up
        navigate("/login");
      } catch (error) {
        toast.error("email Already exists Please Login to Continue! "); // Show error toast on sign up error
      }
    } else {
      toast.error("All fields are compulsory");
    }
  };

  //login using google
  function handleCallbackResponse(response) {
    console.log("reached here", response);
    // signUp(userDetails);
    // setUserContext(response.credential);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "521201201906-m7n0pfhcsuo67gond8j5rlriimi88dj4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      theme: "filled",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div className="main">
      <div className={`login-container ${isActive ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Create New Account</h1>
            <span>Use your email for registration</span>
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formDetails.firstName}
              onChange={handleChange}
            />
            <span id="errEmail"></span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <div style={{ textAlign: "left" }}>
              <span id="errMsg" style={{ color: "red" }}></span>
              <h6>Select Your Role:</h6>
              <select name="role" id="role" defaultValue="ROLE_STUDENT">
                <option value="ROLE_STUDENT">Student</option>
                <option value="ROLE_INSTRUCTOR">Instructor</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </div>
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a id="signInBtn" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formDetails.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <a href="#">Forget Your Password?</a>
            <button onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your details to login </p>
              <button
                className="hidden"
                onClick={() => {
                  handleClearForm();
                  setIsActive(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details and start your journey.</p>
              <button
                className="hidden"
                onClick={() => {
                  handleClearForm();
                  setIsActive(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
