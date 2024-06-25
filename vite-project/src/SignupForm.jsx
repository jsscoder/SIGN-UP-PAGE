import React from 'react';
import './SignupForm.css'
const SignupForm = () => {
  const verifyPan = () => {
    // Implement pan verification logic here
  };

  const verifyGst = () => {
    // Implement GST verification logic here
  };

  return (
    <div className="signup-form-container">
      <h1 className="form-title">SIGN-UP FORM</h1>
      <form id="signup-form" method="POST" action="/registeruser">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">D.O.B</label>
          <input type="date" id="dob" name="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="form-group">
          <label htmlFor="pan">Pan card</label>
          <input type="text" id="pan" name="pan" required />
          <button type="button" onClick={verifyPan} className="verify-btn">Verify</button>
          <span className="verification-result" id="pan-verification-result"></span>
        </div>

        <div className="form-group">
          <label htmlFor="gst">GST</label>
          <input type="text" id="gst" name="gst" required />
          <button type="button" onClick={verifyGst} className="verify-btn">Verify</button>
          <span className="verification-result" id="gst-verification-result"></span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
