import React, { useEffect, useState, useRef } from "react";
import shineLogo from "../Images/shineLogo.png";
import googleIcon from "../Images/google_icon.png";
import cancel from "../Images/cancel.svg";
import checked from "../Images/checked.svg";
import eyeOpen from "../Images/eye-open.svg";
import eyeClose from "../Images/eye-close.svg";
import slider from "../Images/auth-pagination-slider.png";
import "./signup.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Signup = () => {
  // code below validates the username
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
    setUsernameError(null); // Clear any previous errors on change
  };

  const validateUsername = (username) => {
    const isValid =
      username.length >= 5 && username.match(/^[a-zA-Z0-9.@_-]*$/);

    if (!isValid) {
      setUsernameError(
        "Username must be at least 5 characters and contain only letters, numbers, periods, dashes, or underscores."
      );
    }
    return isValid;
  };
  const blurUserName = () => {
    validateUsername(username);
  };

  // this code below handles the email and the phone number input box

  const [emailAndPhoneValue, setEmailAndPhoneValue] = useState("");
  const [inputType, setInputType] = useState(null); // Initially unknown
  const [validationError, setValidationError] = useState(null);
  const [emailAndPhoneValid, setEmailAndPhoneValid] = useState(false);

  const validateEmailPhoneInput = (event) => {
    const result =
      event.type === "paste"
        ? event.clipboardData.getData("text")
        : event.target.value;
    setEmailAndPhoneValue(result);
    setValidationError(null); // Clear any previous errors on change
    validateInput(result); // Validate the input
  };

  const validateInput = (value) => {
    // Generic validation for email and phone
    const emailOrPhoneRegex = /^([\w-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,})|(\d{10})$/;

    if (emailOrPhoneRegex.test(value)) {
      setEmailAndPhoneValid(true);
      setInputType(emailOrPhoneRegex.test(value) ? "email" : "phone");
    } else {
      setEmailAndPhoneValid(false);
      setInputType(null);
    }
    console.log(inputType);
  };

  // The code below is responsible for validating password input
  const [password, setPassword] = useState("");
  let [passWordIsValid, setPassWordIsValid] = useState(false);
  const [isPassWordValid, setIsPasswordValid] = useState(false);

  const handlePassWord = (event) => {
    const result =
      event.type === "paste"
        ? event.clipboardData.getData("text")
        : event.target.value;
    setPassword(result);
    setIsPasswordValid(true);
    validatePasswordInput(result);
  };

  const [check1, setCheck1] = useState(cancel);
  const [check2, setCheck2] = useState(cancel);
  const [check3, setCheck3] = useState(cancel);
  const [check4, setCheck4] = useState(cancel);

  const pswdLength = 8;
  const checkPswdLength = () => {
    if (password.length >= pswdLength) {
      setCheck3(checked);
    } else {
      setCheck3(cancel);
    }
  };
  useEffect(() => {
    checkPswdLength();
  });

  const validatePasswordInput = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@_$!%*?&]{8,}$/; // Regular expression for validation
    passWordIsValid = regex.test(password);
    setPassWordIsValid(passWordIsValid);

    if (!passWordIsValid) {
      if (!password.match(/[A-Z]/)) {
        setCheck1(cancel);
      } else if (password.match(/[A-Z]/)) {
        setCheck1(checked);
      }
      if (
        !password.match(/\d/) &&
        !password.match(/[@$!%*?&]/) &&
        !password.match(/[a-z]/)
      ) {
        setCheck2(cancel);
      } else {
        // Password contains at least one number, special character or lowercase letter
        setCheck2(checked); // Assuming 'checked' represents a valid state
      }
      // statement below checks for possible whitespaces
      if (password.includes(" ")) {
        setCheck4(cancel);
      } else if (!password.includes(" ")) {
        setCheck4(checked);
      }
      
    }
    return isPassWordValid;
  };

  // code below will check if created password is same as comfirm password
  const confirmPassword = useRef(null);
  const [password2, setPassword2] = useState("");

  function handleConfirmPassword() {
    let pswd = confirmPassword.current.value;
    setPassword2(pswd);
    if (pswd === password) {
    } else {
      return false;
    }
  }

  // terms and condition validation
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = () => {
    setIsChecked((prevBoo) => {
      return (prevBoo = !prevBoo);
    });
  };

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();
    // web storage of the emailInput value
    const emailAddressValue = document.getElementById("combined-input").value;
    console.log(emailAddressValue);
    localStorage.setItem("email-address", emailAddressValue);

    // Validation checks
    let isValid = true; // Assuming you have a function to validate email
    if (username.length < 4 || username === "") {
      setMessage("Username must be at least 4 characters long");
      e.preventDefault();
      isValid = false;
    } else if (!emailAndPhoneValid) {
      // Assuming you have an email validation function
      setMessage("Please enter a valid email address or a valid phone number");
      e.preventDefault();
      return false;
    } else if (!isPassWordValid) {
      // Assuming you have a password validation function
      setMessage("Password is not valid");
      e.preventDefault();
      isValid = false;
    } else if (password2 !== password) {
      setMessage("Passwords do not match");
      e.preventDefault();
      isValid = false;
    } else if (!isChecked) {
      setMessage("Please accept the terms and conditions");
      e.preventDefault();
      isValid = false;
    }

    // Submit form only if all conditions are met
    if (isValid) {
      setMessage(null); // Clear any previous error messages
      window.location.pathname = "/verification"; // Redirect to verification page
    }
  };

  // the reveal and close password function

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const changePassWordType = () => {
    setIsPasswordVisible((isPasswordVisible) => {
      return (isPasswordVisible = !isPasswordVisible);
    });
  };

  return (
    <div id="sign-up-container">
      <div className="con interactive-sec">
        <div id="con-1">
          <h1 className="signup-h1">
            Interactive <img src={shineLogo} alt="shine logo" id="shine-logo" />{" "}
          </h1>
          <br />
          <p className="paragraph-info">
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
            className="btn"
            id="signUp"
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
};

export default Signup;
