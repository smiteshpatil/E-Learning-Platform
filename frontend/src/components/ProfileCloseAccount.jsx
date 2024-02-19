import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ProfileCloseAccount() {
  return (
    <>
      <Container className="mt-2 mb-4" style={{ margintop: "70px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={8}>
            <div className="text-center mb-1 mt-1">
              <h3>Close Account</h3>
              <p>Close your account permanently.</p>
            </div>
            <div className="border-top text-center mb-4 mt-4">
              <div style={{ paddingBottom: "2rem", paddingTop: "2rem" }}>
                <p className="text-start">
                  <span style={{ color: "red" }}>Warning: </span> If you close
                  your account, you will be unsubscribed from all your courses,
                  and will lose access forever.
                </p>
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                <button type="button" className="btn btn-danger btn-md">
                  Close Account
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
