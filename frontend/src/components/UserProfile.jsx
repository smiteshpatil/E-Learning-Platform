import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const ProfilePhoto = () => {
    const [text, setText] = useState("");
    //   const maxLength = 51; // Maximum number of words allowed
    
      // Update the state with the text from textarea
      const handleChange = (event) => {
        setText(event.target.value);
      };
    
      /* Will use this later to show remaining words when text is entered.  */
      // Display the remaining number of words allowed
    //   const remainingWords = maxLength - text.split(/\s+/).length;
    

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
                        placeholder="First Name"
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
                        type="text"
                        placeholder="Last Name"
                        aria-label="Last Name"
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
                        onChange={handleChange}
                        rows={1}
                        placeholder="Heading"
                        aria-label="Heading"
                      />
                      {/* Will use this later to show remaining words when text is entered.  */}
                      {/* <small className="form-text text-muted">
                        {remainingWords} words remaining
                      </small> */}

                      <p className="text-start small fw-light">
                        Add a professional headline like, "Instructor at Udemy"
                        or "Architect."
                      </p>
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
                          Input your LinkedIn resource id (e.g. in/johnsmith).
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
                          Input your github id (e.g. prem-code-dot).
                        </div>
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
