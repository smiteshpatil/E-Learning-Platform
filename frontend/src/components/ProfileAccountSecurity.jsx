// ProfileAccountSecurity.jsx
import React from "react";
import { Container, Row } from "react-bootstrap";

const ProfileAccountSecurity = () => {
  return (
    <>
      <Container className="mt-2 mb-4">

        <Row>
          <div className="text-center mb-1 mt-2">
            <h3>Account </h3>
            <p>Edit your account settings and change your password here.</p>
          </div>
        </Row>

        <Row className="border-top">
          <div className="text-center mb-2 mt-4">
            <form action="/userProfile/photo" method="put">
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <p className="text-start">Email</p>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="abc@example.com"
                  aria-label="First Name"
                />
                
              </div>
            </form>
          </div>
        </Row>

        <Row className="border-top">
          <div className="text-center mb-4 ">
            <form action="/userProfile/photo" method="put">
              
            <div className="text-center  mt-4">
            <form action="/userProfile/photo" method="put">
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <p className="text-start">Password</p>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Enter Current Password"
                  aria-label="First Name"
                />
              </div>
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Enter new Password"
                  aria-label="First Name"
                />
              </div>
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Re-Enter new Password"
                  aria-label="First Name"
                />
              </div>
              <div className="text-start mt-2"
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <button type="submit" class="btn btn-primary btn-lg">Change Password</button>
              </div>
            </form>
          </div>

            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProfileAccountSecurity;
