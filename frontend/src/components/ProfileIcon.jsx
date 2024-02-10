import React from "react";
import { useAuth } from "../context/AuthContext";
import { VscAccount } from "react-icons/vsc";
const ProfileIcon = () => {
  let { authUser } = useAuth();

  const ProfileIcon = {
    borderRadius: "50%",
    height: "50px",
  };

  return (
    <>
      {authUser != null ? (
        <img src={authUser.picture} alt="profile" style={ProfileIcon} />
      ) : (
        <VscAccount size={40} />
      )}
    </>
  );
};

export default ProfileIcon;
