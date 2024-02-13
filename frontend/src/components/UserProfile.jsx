import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
const ProfilePhoto = () => {
  const [text, setText] = useState("");

  let { authUser } = useAuth();

  // Update the state with the text from textarea
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Container className="mt-2 mb-4">
        <Row>
          <div className="text-center mb-1 mt-2">
            <h3>Public profile </h3>
            <p>Add information about yourself</p>
          </div>
        </Row>

        <Row className="border-top">
          <div className="text-center mb-4 mt-4">
            <form action="/userProfile" method="post">
              <div>
                <div
                  style={{
                    paddingBottom: "1rem",
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                  }}
                >
                  <p className="text-start">Basics</p>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={authUser ? authUser.firstName : ""}
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
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    value={authUser ? authUser.lastName : ""}
                  />
                </div>
                <div
                  style={{
                    paddingBottom: "1rem",
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                  }}
                >
                  <textarea
                    className="form-control form-control-lg"
                    type="textarea"
                    value={text}
                    name="heading"
                    onChange={handleChange}
                    rows={1}
                    placeholder="Heading"
                    aria-label="Heading"
                  />

                  <p className="text-start small fw-light">
                    Add a professional headline.
                  </p>
                </div>
              </div>

              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <p className="text-start">Mobile</p>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  name="phoneNo"
                  placeholder="+91"
                  aria-label="Last Name"
                  value={authUser ? authUser.phoneNo : ""}
                />
                <br />
                <p className="text-start">Gender</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male" style={{ marginLeft: "0.5rem" }}>
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    style={{ marginLeft: "1rem" }}
                  />
                  <label htmlFor="female" style={{ marginLeft: "0.5rem" }}>
                    Female
                  </label>
                </div>
              </div>

              <div>
                <div
                  style={{
                    paddingBottom: "1rem",
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                  }}
                >
                  <p className="text-start">Links</p>

                  <div style={{ paddingBottom: "1rem" }}>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon3">
                        http://www.linkedin.com/
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                    <div className="form-text text-start" id="basic-addon4">
                      your LinkedIn id
                    </div>
                  </div>

                  <div>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon3">
                        https://github.com/
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                    <div className="form-text text-start" id="basic-addon4">
                      your github id
                    </div>
                    <Button variant="primary">Save</Button>
                    <Button variant="online-light">Cancel</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePhoto;
