import { default as React } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProfilePage = () => {
  let { authUser } = useAuth();
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <Container className="border-container mt-4 mb-4">
          <Row>
            <Col md={2} sm={8} className="border-right">
              {/* Content for the left column */}
              <div className="text-center mb-4 ">
                <Image
                  src={
                    authUser.picture != null
                      ? authUser.picture
                      : "https://via.placeholder.com/150"
                  }
                  roundedCircle
                  className="mb-2"
                />
                <h4>User Name</h4>
              </div>
              <div className="d-flex justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/user/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/photo">Photo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/security">Account Security</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/closeAccount">Close Account</NavLink>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={10} sm={16}>
              <Outlet />
            </Col>
          </Row>
        </Container>
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
          <div>
            <h2>Profile Content</h2>
            {/* Content for profile editing */}
          </div>
        </Col>
      </Row>


    </div>
  );
};

export default ProfilePage;
