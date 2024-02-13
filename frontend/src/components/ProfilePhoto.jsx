import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const ProfilePhoto = () => {
  let { authUser } = useAuth();

  const placeholderImage = `${
    authUser.picture != null
      ? authUser.picture
      : "https://via.placeholder.com/200"
  }`; // Placeholder image URL
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
      <Container className="mt-2 mb-4">
        <Row>
          <div className="text-center mb-1 mt-2">
            <h3>Profile Photo </h3>
            <p>Add a nice photo of yourself for your profile.</p>
          </div>
        </Row>
        <Row className="border-top">
          <div className="text-center mb-4 mt-4">
            <form action="/userProfile/photo" method="post">
              <div
                className="ud-form-group "
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <div className="text-start">
                  <label
                    htmlFor="image-preview"
                    className="ud-form-label ud-heading-sm"
                    style={{ textAlign: "left" }}
                  >
                    Image preview
                  </label>
                </div>
                <div className="ud-image-upload-preview-wrapper mb-3 mt-2 border-container">
                  <div>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      height="200"
                      width="200"
                      className="img-fluid lazy"
                      style={{ maxHeight: "20rem" }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
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
                className="ud-footer-btns text-start"
                style={{
                  paddingBottom: "1rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <button
                  type="submit"
                  className="ud-btn ud-btn-large ud-btn-primary ud-heading-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePhoto;
