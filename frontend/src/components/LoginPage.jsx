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
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const handleSignIn = (e) => {};
  const handleSignUp = (e) => {};

  const logIn = (currentUser) => {
    setIsLoggedIn(true);
    setAuthUser({
      firstName: currentUser.name,
      lastName: currentUser.family_name,
      picture: currentUser.picture,
      email: currentUser.email,
    });
    navigate("/");
  };

  //login using google
  function handleCallbackResponse(response) {
    let userDetails = jwtDecode(response.credential);
    userDetails.password = "abc123";
    userDetails.role = "ROLE_INSTRUCTOR";
    userDetails.gender = "male";
    const token = userDetails.token;
    console.log(userDetails);
    signUp(userDetails, token);
    logIn(userDetails);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "521201201906-m7n0pfhcsuo67gond8j5rlriimi88dj4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      theme: "",
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
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Sign Up</button>
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
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
