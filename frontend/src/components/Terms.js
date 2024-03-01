import React from 'react';
import './Terms.css'; 

class Terms extends React.Component {
  render() {
    return (
      <div className="terms-container form-control pb-4 pt-4">
        <h1>Terms of Service</h1>
        <div className='pb-3 pt-3'>
          Welcome to our Terms of Service page. Please read these terms carefully before using our service.
        </div>

        <h5>1. Acceptance of Terms</h5>
        <p>
          By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h5>2. Use of Service</h5>
        <p>
          You agree to use our service only for lawful purposes and in accordance with these terms. You are solely responsible for all content and activities that occur under your account.
        </p>

        <h5>3. Privacy Policy</h5>
        <p>
          Your use of our service is also subject to our Privacy Policy. Please review our Privacy Policy, which governs the collection, use, and disclosure of your information.
        </p>

        <h5>4. Changes to Terms</h5>
        <p>
          We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review these terms periodically for changes.
        </p>

        <h5>5. Contact Us</h5>
        <p>
          If you have any questions or concerns about these terms, please contact us at [support@example.com].
        </p>
      </div>
    );
  }
}

export default Terms;
