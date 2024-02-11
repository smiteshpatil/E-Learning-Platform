import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

function Navbar2() {
  const { isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();
  const navigate = useNavigate();

  //log out
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/link">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                activeClassName="active"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeClassName="active"
                    to="#"
                  >
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeClassName="active"
                    to="#"
                  >
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeClassName="active"
                    to="#"
                  >
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/user/instructor"
              >
                Instructor Panel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/login"
              >
                LogIn/Register
              </NavLink>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/user/profile"
                >
                  <ProfileIcon />
                </NavLink>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
