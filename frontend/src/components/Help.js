import React from "react";
import "./Help.css"; // Import the CSS file for styling

class Help extends React.Component {
  render() {
    return (
      <div className="help-container form-control pt-4 pb-4">
        <h1>Help</h1>
        <div className="pt-3 pb-3">
          Welcome to our Help page. If you have any questions or need
          assistance, please refer to the information below or contact us
          directly.
        </div>

        <div className="mt-3">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <p>
            <strong>Q: How do I get started with the platform?</strong>
            <br />
            A: To get started, simply sign up for an account and explore the
            available features and courses.
          </p>
          <p>
            <strong>Q: How do I enroll in a course?</strong>
            <br />
            A: To enroll in a course, visit the course page and click on the
            "Enroll" button.
          </p>
          <p>
            <strong>Q: How do I reset my password?</strong>
            <br />
            A: You can reset your password by clicking on the "Forgot Password"
            link on the login page and following the instructions.
          </p>
          <p>
            <strong>Q: How do I contact customer support?</strong>
            <br />
            A: You can contact our customer support team by emailing
            support@example.com or by filling out the contact form on our
            website.
          </p>
        </div>

        <h2>Contact Us</h2>
        <p>
          If you need further assistance or have any questions, please feel free
          to contact us at [support@example.com].
        </p>
      </div>
    );
  }
}

export default Help;
