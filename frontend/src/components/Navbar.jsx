import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";

import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import DropdownBtn from "./DropdownBtn";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  //log out
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
    navigate("/");
  };

  return (
    <nav className="topnav">
      <ul>
        <li className="left">
          <NavLink to="/" id="logo">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
        </li>
        <li className="center">
          <SearchBar />
        </li>
        {isLoggedIn ? (
          <TbLogout2 size={40} onClick={logOut} className="logout" />
        ) : (
          // <li className="right login-link">
          //   <NavLink to="/login">LogIn/Register</NavLink>
          // </li>
          <DropdownBtn />
        )}

        <li className="right">
          <NavLink to="/profile">
            <ProfileIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
