import React from "react";
import { useAuth } from "../context/AuthContext";
const ProfileIcon = () => {
  let { authUser } = useAuth();

  const ProfileIcon = {
    borderRadius: "50%",
    height: "50px",
  };

  return (
    <>
      {authUser !== null ? (
        <img src={authUser.picture} alt="profile" style={ProfileIcon} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileIcon;
