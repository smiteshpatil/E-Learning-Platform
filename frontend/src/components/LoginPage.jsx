import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/LoginPage.css";

// state for styling depending on the page
const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  // Login using Github
  const CILENT_ID = "67a8d9820b5c96e50203";

  const loginWithGithub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CILENT_ID
    );
  };

  return (
    <div className="main">
      <div className={`login-container ${isActive ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a onClick={{}} className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>

              <a onClick={loginWithGithub} className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>

              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
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
              <button className="hidden" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details and start your journey.</p>
              <button className="hidden" onClick={handleRegisterClick}>
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
