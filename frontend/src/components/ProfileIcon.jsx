import React from "react";
import { useAuth } from "../context/AuthContext";
const ProfileIcon = () => {
  let { authUser } = useAuth();

  const profileIconStyle = {
    borderRadius: "50%",
    height: "50px",
  };

  return (
    <>
      {authUser && authUser.picture ? (
        <img src={authUser.picture} alt="Profile" style={profileIconStyle} />
      ) : null}
    </>
  );
};

export default ProfileIcon;
