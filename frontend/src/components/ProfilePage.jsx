import { default as React } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  let { authUser } = useAuth();
  return (
    <div className="container form-control ">
      <div className="mt-4 mb-4">
        <Container
          className="border-container mt-2 mb-2 "
          style={{ margintop: "70px" }}
        >
          <Row>
            <Col md={2} sm={8} className="border-right ">
              {/* Content for the left column */}
              <div className="text-center mb-4 ">
                <Image
                  src={
                    authUser && authUser.picture
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
                  <div
                    className="pb-2 text-center mt-2"
                    style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                  >
                    <li>
                      <NavLink to="/user/profile">Profile</NavLink>
                    </li>
                  </div>
                  <div
                    className="pb-2 text-center mt-2"
                    style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                  >
                    <li>
                      <NavLink to="/user/photo">Photo</NavLink>
                    </li>
                  </div>
                  <div
                    className="pb-2 text-center mt-2"
                    style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                  >
                    <li>
                      <NavLink to="/user/security">Account Security</NavLink>
                    </li>
                  </div>
                  <div
                    className="pb-2 text-center mt-2"
                    style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                  >
                    <li>
                      <NavLink to="/user/closeAccount">Close Account</NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </Col>

            <Col md={10} sm={16}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilePage;
