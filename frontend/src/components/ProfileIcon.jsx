import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const ProfileIcon = () => {
  let { authUser } = useAuth();

  const profileIconStyle = {
    borderRadius: "50%",
    height: "50px",
  };

  return (
    <>
      {authUser && authUser.imageUrl ? (
        <img src={authUser.imageUrl} alt="Profile" style={profileIconStyle} />
      ) : (
        <FaUserCircle size={25} />
      )}
    </>
  );
};

export default ProfileIcon;
