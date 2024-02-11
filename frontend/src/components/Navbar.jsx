import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { TbLogout2 } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

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
        <li className="center">
          <SearchBar />
        </li>

        <li className="right">
          <NavLink to="/user/instructor">Instructor</NavLink>
        </li>
        <li className="right">
          <NavLink to="/cart">
            {/* Cart Icon */}
            <FaCartShopping size={30} />
          </NavLink>
        </li>
        {isLoggedIn ? (
          <TbLogout2 size={35} onClick={logOut} className="logout" />
        ) : (
          <li className="right login-link">
            <NavLink to="/login">LogIn/Register</NavLink>
          </li>
        )}

        <li className="right">
          {isLoggedIn ? (
            <NavLink to="/user/profile">
              <ProfileIcon />
            </NavLink>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
