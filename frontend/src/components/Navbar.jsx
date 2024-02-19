import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { TbLogout2 } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import { useAuth } from "../context/AuthContext";
import { syncCartToDB } from "../api/userService";

const Navbar = () => {
  let { authUser, setIsLoggedIn, cart } = useAuth();
  const navigate = useNavigate();

  //log out
  const logOut = async () => {
    if (cart !== undefined) {
      console.log("items len: " + cart.length);
      await syncCartToDB(authUser.email, localStorage.getItem("token"), cart);
    }
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userObject");
    navigate("/login");
  };

  return (
    <>
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

          {authUser && authUser.role === "ROLE_INSTRUCTOR" && (
            <li className="right">
              <NavLink to="/user/instructor">Instructor</NavLink>
            </li>
          )}
          {authUser && authUser.role === "ROLE_STUDENT" && (
            <li className="right">
              <NavLink to="/cart">
                {/* Cart Icon */}
                <FaCartShopping size={25} />

                {cart.length ? (
                  <span
                    style={{
                      padding: "0 5px",
                      color: "white",
                      borderRadius: "50%",
                      backgroundColor: "red",
                    }}
                  >
                    {cart.length}
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
            </li>
          )}
          {authUser && localStorage.getItem("userObject") ? (
            <li className="right">
              <TbLogout2
                color="black"
                size={30}
                onClick={logOut}
                className="logout"
              />
            </li>
          ) : (
            <li className="right login-link">
              <NavLink to="/login">LogIn/Register</NavLink>
            </li>
          )}

          <li className="right">
            {authUser && localStorage.getItem("userObject") && (
              <NavLink to="/user/profile">
                <ProfileIcon />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
