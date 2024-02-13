import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/LoginPage.css";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../api/userService";

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
    /**	this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.gender = gender;
		this.role = role; */
  });

  //set form details
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  // sign in using userService
  const handleSignIn = (e) => {
    e.preventDefault();
    if (formDetails.email !== "" && formDetails.password !== "") {
      signIn(formDetails.email, formDetails.password)
        .then((currentUser) => {
          setUserContext(currentUser);
        })
        .catch((error) => {
          // Handle login error
        });
    }
  };

  //signUp using userService
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      formDetails.firstName !== "" &&
      formDetails.email !== "" &&
      formDetails.password !== ""
    ) {
      setFormDetails({
        ...formDetails,
        role: document.getElementById("role").value,
      });
      signUp(formDetails)
        .then((currentUser) => {
          setUserContext(currentUser);
        })
        .catch((error) => {
          // Handle signup error
        });
    } else {
      document.getElementById("errMsg").innerText =
        "* All fields are compulsory";
    }
  };

  const setUserContext = (currentUser) => {
    setIsLoggedIn(true);
    setAuthUser({
      firstName: currentUser.firstName,
      lastName: currentUser.family_name,
      picture: currentUser.picture,
      email: currentUser.email,
    });
    navigate("/");
  };

  //login using google
  function handleCallbackResponse(response) {
    let userDetails = jwtDecode(response.credential);
    signUp(userDetails);
    setUserContext(userDetails);
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
              <select name="role" id="role">
                <option value="ROLE_STUDENT" selected>
                  Student
                </option>
                <option value="ROLE_INSTRUCTOR">Instructor</option>
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
