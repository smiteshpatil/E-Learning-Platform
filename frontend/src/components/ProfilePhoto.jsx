import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const ProfilePhoto = () => {
  const { authUser } = useAuth();

  const placeholderImage =
    authUser && authUser.picture
      ? authUser.picture
      : "https://via.placeholder.com/200"; // Placeholder image URL
  const [imagePreview, setImagePreview] = useState(placeholderImage); // State for image preview

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];    

    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <>
      <Container className="mt-2 mb-4" style={{ margintop: "70px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={8}>
            <div className="text-center mb-1 mt-2">
              <h3>Profile Photo</h3>
              <p>Add a nice photo of yourself for your profile.</p>
            </div>

            <form>
              <div
                className="border-top text-center ud-form-group mb-2 mt-4"
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="text-start "
                  style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                >
                  <label
                    htmlFor="image-preview"
                    className="ud-form-label ud-heading-sm"
                    style={{ textAlign: "left" }}
                  >
                    Image preview
                  </label>
                </div>
                <div className="ud-image-upload-preview-wrapper mt-2 form-control">
                  <div>
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        height="200px"
                        width="200px"
                        className="img-fluid lazy"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          // borderRadius: "50%",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <div>
                  <div className="text-start">
                    <label
                      htmlFor="image-upload"
                      className="image-upload ud-sr-only mb-2"
                    >
                      Add / Change Image
                    </label>
                    <input
                      accept=".gif, .jpg, .jpeg, .png"
                      className="form-control"
                      type="file"
                      id="image-upload"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
              <div
                className="ud-footer-btns text-start mt-4 mb-2"
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <Button variant="primary" className="me-2">
                  Save
                </Button>
                <Button variant="outline-secondary">Cancel</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePhoto;
