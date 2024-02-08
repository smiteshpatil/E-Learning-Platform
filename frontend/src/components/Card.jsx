import React from "react";
import cardImage from "../images/card1.jpg";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
const Card = () => {
  return (
    <div class="card" style={{ padding: "10px" }}>
      <img
        class="card-img-top"
        src={cardImage}
        style={{ width: "18rem" }}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default Card;
