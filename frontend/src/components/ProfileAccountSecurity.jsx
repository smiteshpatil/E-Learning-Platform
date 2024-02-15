import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProfileAccountSecurity = () => {
  return (
    <>
      <Container className="mt-2 mb-4" style={{ margintop: "70px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={8}>
            <div className="text-center mb-1 mt-1">
              <h3>Account</h3>
              <p>Edit your account settings and change your password here.</p>
            </div>
            <div>
              <div className="pb-3 border-top text-center mb-2 mt-4" style={{ paddingBottom: "2rem", paddingTop: "1rem" }}>
                <p className="text-start">Email</p>
                <input
                  className="form-control form-control-md"
                  type="email"
                  placeholder="abc@example.com"
                  aria-label="Email"
                />
              </div>
              <div className="pb-3">
                <p className="text-start">Password</p>
                <input
                  className="form-control form-control-md"
                  type="password"
                  placeholder="Enter Current Password"
                  aria-label="Current Password"
                />
                <input
                  className="form-control form-control-md mt-3"
                  type="password"
                  placeholder="Enter New Password"
                  aria-label="New Password"
                />
                <input
                  className="form-control form-control-md mt-3"
                  type="password"
                  placeholder="Re-Enter New Password"
                  aria-label="Re-Enter New Password"
                />
                <div className="text-start mt-4">
                    <Button variant="primary" className="me-2">
                      Change Password
                    </Button>
                    
                    <Button variant="outline-secondary">Cancel</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileAccountSecurity;
