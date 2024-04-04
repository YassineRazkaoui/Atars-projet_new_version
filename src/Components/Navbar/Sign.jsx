import React, { useState } from "react";
import "../../Style/Sign.css";
import Sign_img from "../../assets/Sign/sign.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement email validation logic here
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Handle form submission (e.g., send email to server)
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="conatiner-all">
      <form onSubmit={handleSubmit}>
        <div className="img-sign">
          <img src={Sign_img} alt="Sign_img" />
        </div>
        <div className="newsletter-form">
          <h2>
            Get Exclusive Deals and <br /> Travel Tips
          </h2>
          <p className="break-word">
            Subscribe to our newsletter for exclusive deals and travel tips.
          </p>
          <div className="input-container">
            <input
              className="input-sign"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className="button-sign">
              Sign in
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="break-word1">
            By clicking Sign Up, you agree to our Terms and Conditions.
          </p>
        </div>
      </form>
    </div>
  );
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default Newsletter;
