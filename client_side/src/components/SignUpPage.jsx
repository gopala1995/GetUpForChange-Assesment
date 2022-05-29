import React from "react";
import "./SignUpPage.css";

export const SignUpPage = () => {
  return (
    <div>
      <div className="formDiv">
        <form action="">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Mobile No" />
          <input type="password" placeholder="Enter your password" />
          <input type="submit" placeholder="Log-In" className="submitButton" />
        </form>
      </div>
    </div>
  );
};
