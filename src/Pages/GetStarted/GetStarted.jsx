
import React from 'react'
import shineLogo from "../Images/shineLogo.png";
import googleIcon from "../Images/google_icon.png";
import cancel from "../Images/cancel.svg";
import checked from "../Images/checked.svg";
import eyeOpen from "../Images/eye-open.svg";
import eyeClose from "../Images/eye-close.svg";
import slider from "../Images/auth-pagination-slider.png";
import "./signup.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const GetStarted = () => {
  return (
    <div id="sign-up-container">
      <div className="con interactive-sec">
        <div>
          <h1>
            Interactive <img src={shineLogo} alt="shine logo" id="shine-logo" />{" "}
          </h1>
          <br />
          <p>
            Join a community of like minded people where you can free air you
            opinions, discuss new trends and shared interests. Interact with
            your friends, family, colleagues and teammates as you you strengthen
            the bond between one another...
          </p>
          <img src={slider} className="sign-up-slider" alt="slider" />
        </div>
      </div>
      <div className="con sign-up">
        <form onSubmit={handleSubmit}>
          <p className="create-account-text">Create your account</p>
          <p>Stay connected with friends and family. LET'S GET YOU STARTED</p>
          <div id="input-boxes">
            <label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter username e.g “@delphine”"
                className="input-boxes"
                value={username}
                onChange={handleChange}
                onBlur={blurUserName}
                autoComplete="on"
              />
            </label>
            {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
            <label>
              <input
                type="text"
                name="contactInfo"
                id="combined-input"
                value={emailAndPhoneValue}
                placeholder="Enter email address or phone number”"
                onChange={validateEmailPhoneInput}
                className="input-boxes"
                autoComplete="email"
              />
            </label>
            {validationError && (
              <p style={{ color: "red" }}>{validationError}</p>
            )}
            <label className="input-boxes">
              <input
                type={isPasswordVisible ? "password" : "text"}
                name="pswd1"
                id="pswd1"
                placeholder="Create a password"
                className="input-box"
                value={password}
                onChange={handlePassWord}
              />
              <img
                src={isPasswordVisible ? eyeClose : eyeOpen}
                className="password-icon"
                alt=""
                onClick={() => changePassWordType()}
              />
            </label>
            {isPassWordValid && (
              <div id="checked-password-validation">
                <p>Must Contain:</p>
                <div>
                  <p>
                    <img src={check1} className="checkedIcon" alt="" />
                    Password must begin with a capital letter.
                  </p>
                  <p>
                    <img src={check2} className="checkedIcon" alt="" />
                    Password must consist of letters numbers and symbol.
                  </p>
                  <p>
                    <img src={check3} className="checkedIcon" alt="" />
                    Password must be 8 characters or more.
                  </p>
                  <p>
                    <img src={check4} className="checkedIcon" alt="" />
                    Password must not include white space. but in exception
                    replace them with underscores "_".
                  </p>
                </div>
              </div>
            )}
            <label className="input-boxes">
              <input
                type={isPasswordVisible ? "password" : "text"}
                name="password2"
                id="password2"
                placeholder="Confirm Password"
                className="input-box"
                value={password2}
                ref={confirmPassword}
                onChange={handleConfirmPassword}
              />
              <img
                src={isPasswordVisible ? eyeClose : eyeOpen}
                className="password-icon"
                alt=""
                onClick={() => changePassWordType()}
              />
            </label>
          </div>
          <label className="checkbox">
            <input
              type="checkbox"
              name="agreeWithTerms"
              id="agreeWithTerms"
              value={isChecked}
              onChange={handleIsChecked}
            />{" "}
            I agree to the{" "}
            <Link to="/" id="highlight">
              terms & conditions
            </Link>
          </label>
          <br />
          {message && <p style={{ color: "red" }}>{message}</p>}
          <br />
          <button
            type="submit"
            className="sign-up-btn"
            id="signUp"
            style={{
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <p className="or">OR</p>
        <button type="button" className="google-btn">
          Continue with Google{" "}
          <img src={googleIcon} alt="google icon" className="google_icon" />
        </button>
      </div>
    </div>
  );
}

export default GetStarted
