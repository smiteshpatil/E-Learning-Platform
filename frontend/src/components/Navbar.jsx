import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { VscAccount } from "react-icons/vsc";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
    <nav className="topnav">
      <ul>
        <li className="left">
          <NavLink to="/" id="logo">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
        </li>
        <li className="left">
          <NavLink to="/">Categories</NavLink>
        </li>
        <li className="center">
          <SearchBar />
        </li>
        {isLoggedIn ? (
          <TbLogout2 size={40} onClick={logOut} className="logout" />
        ) : (
          <li className="right login-link">
            <NavLink to="/login">LogIn/Register</NavLink>
          </li>
        )}

        <li className="right">
          <NavLink to="/profile">
            <VscAccount size={40} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
