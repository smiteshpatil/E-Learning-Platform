import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Route, Routes, NavLink } from "react-router-dom";


const ProfilePage = () => {
  return (
    <div className="container mt-4">
      <div style={{ textAlign: "center" }}>
        <h1>Profile Page</h1>
        &nbsp;
      </div>
      <Row>
        {/* Left Partition */}
        <Col md={4}>
          <div className="text-center mb-4">
            <Image
              src="https://via.placeholder.com/150"
              roundedCircle
              className="mb-2"
            />
            <h3>User Name</h3>
          </div>
          <div className="text-left mb-2">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/profile/photo">Profile Photo</NavLink>
              </li>
              <li>
                <NavLink to="/profile/security">Account Security</NavLink>
              </li>
              <li>
              <NavLink to="/profile/closeAccount">Close Account</NavLink>
              </li>
            </ul>
          </div>
        </Col>
        {/* Right Partition */}
        <Col md={8}>
          <div >
            <h2>Profile Content</h2>
            {/* Content for profile editing */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
