import React from "react";
import { Container, Row } from "react-bootstrap";

export default function ProfileCloseAccount() {
  return (
    <>
      <Container className="mt-2 mb-4">
        <Row>
          <div className="text-center mb-1 mt-2">
            <h3>Close Account </h3>
            <p>Close your account permanently.</p>
          </div>
        </Row>
        <Row className="border-top">
          <div className="text-center mb-4 mt-4">
            <div
              style={{
                paddingBottom: "1rem",
                paddingLeft: "10rem",
                paddingRight: "10rem",
              }}
            >
              <p className="text-start">
                Warning: If you close your account, you will be unsubscribed
                from all your 7 courses, and will lose access forever.
              </p>
            </div>
            <div
              className="text-start"
              style={{
                paddingBottom: "1rem",
                paddingLeft: "10rem",
                paddingRight: "10rem",
              }}
            >
              <button type="submit" class="btn btn-danger btn-lg">
                Close Account
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
