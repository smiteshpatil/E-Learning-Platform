import React from "react";
import { FaStar } from "react-icons/fa";

const Feedback = (props) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
    >
      <img
        src={props.user.userProfile}
        alt="Profile"
        style={{ width: "50px", borderRadius: "50%", marginRight: "10px" }}
      />
      <div>
        <h4>{props.user.userName}</h4>
        {/* students rating */}
        <span>
          {[...Array(props.user.rating)].map(() => {
            return <FaStar color="gold"></FaStar>;
          })}
        </span>
        <p>{props.user.comment}</p>
      </div>
    </div>
  );
};

export default Feedback;
