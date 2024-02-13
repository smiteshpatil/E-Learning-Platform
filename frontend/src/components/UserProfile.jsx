import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const UserProfile = () => {
  const [text, setText] = useState("");
  let { authUser } = useAuth();

  // Update the state with the text from textarea
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Container className="mt-2 mb-4" style={{ margintop: "70px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={8}>
            <div className="text-center mb-1 mt-1">
              <h3>Public profile</h3>
              <p>Add information about yourself</p>
            </div>

            <div>
              <div
                className="pb-3 border-top text-center mt-4"
                style={{ paddingBottom: "2rem", paddingTop: "1rem" }}
              >
                <p className="text-start">Basics</p>
                <input
                  className="form-control form-control-md"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={authUser ? authUser.firstName : ""}
                />
              </div>
              <div className="pb-3">
                <input
                  className="form-control form-control-md"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={authUser ? authUser.lastName : ""}
                />
              </div>

              <div className="pb-3">
                <span className="text-start small fw-light">
                  Add a professional headline.
                </span>
                <textarea
                  className="form-control form-control-md"
                  type="textarea"
                  value={text}
                  name="heading"
                  onChange={handleChange}
                  rows={1}
                  placeholder="Heading"
                  aria-label="Heading"
                />

                <div className="pb-2 mt-2">
                  <span className="text-start small fw-light">Mobile</span>
                  <input
                    className="form-control form-control-md"
                    type="number"
                    name="phoneNo"
                    placeholder="+91"
                    aria-label="Last Name"
                    value={authUser ? authUser.phoneNo : ""}
                  />
                  
                  <div className="mt-3">
                    <div className="text-start mb-2" style={{ fontSize: "1.15rem", margin: "0" }}>
                      Gender
                    </div>
                    <div className="d-flex flex-column flex-md-row align-items-md-center">
                      <div className="me-md-4 mb-2 mb-md-0">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                        />
                        <label
                          htmlFor="male"
                          className="ms-2"
                          style={{ fontSize: "1.13rem" }}
                        >
                          Male
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                        />
                        <label
                          htmlFor="female"
                          className="ms-2"
                          style={{ fontSize: "1.13rem" }}
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-3 mb-2 ">
                <p className="text-start">Links</p>

                <div className="pb-3 ">
                <span className="form-text text-start" id="basic-addon4">
                    Your LinkedIn id
                  </span>
                  <div className="input-group ">
                    <span className="input-group-text " id="basic-addon3">
                      http://www.linkedin.com/
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                  
                </div>

                <div>
                <span className="form-text text-start" id="basic-addon4">
                    Your github id
                  </span>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      https://github.com/
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>

                  <div className="mt-4 mb-2">
                    <Button variant="primary" className="me-2">
                      Save
                    </Button>
                    <Button variant="outline-secondary">Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
