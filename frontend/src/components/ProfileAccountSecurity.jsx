import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { updateStudentService } from "../api/userService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProfileAccountSecurity = () => {
  // current user
  let { authUser } = useAuth();

  const [formData, setFormData] = useState({
    oldPass: "",
    newPass: "",
    confirmNewPass: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // update password
  const handleUpdatePassword = () => {
    if (formData.newPass !== formData.confirmNewPass) {
      toast.warning("Password and confirm password should match !");
    } else {
      let newUserDetails = {
        ...authUser,
        password: formData.confirmNewPass,
      };
      toast.promise(
        updateStudentService(newUserDetails, localStorage.getItem("token")),
        {
          success: "Password updated successfully!",
          error: "error updating password",
        }
      );
    }
  };

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
              <div
                className="pb-3 border-top text-center mb-2 mt-4"
                style={{ paddingBottom: "2rem", paddingTop: "1rem" }}
              >
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
                  name="oldPass"
                  value={formData.oldPass}
                  onChange={handleChange}
                  placeholder="Enter Current Password"
                  aria-label="Current Password"
                />
                <input
                  className="form-control form-control-md mt-3"
                  type="password"
                  name="newPass"
                  value={formData.newPass}
                  onChange={handleChange}
                  placeholder="Enter New Password"
                  aria-label="New Password"
                />
                <input
                  className="form-control form-control-md mt-3"
                  type="password"
                  name="confirmNewPass"
                  value={formData.confirmNewPass}
                  onChange={handleChange}
                  placeholder="Re-Enter New Password"
                  aria-label="Re-Enter New Password"
                />
                <div className="text-start mt-4">
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={handleUpdatePassword}
                  >
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
