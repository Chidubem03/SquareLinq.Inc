import React, { useState } from 'react';
import shineLogo from '../Images/shineLogo.png';
import googleIcon from '../Images/google_icon.png';
import cancel from '../Images/cancel.svg';
import checked from '../Images/checked.svg';
import './signup.css'


const Signup = () => {
    
    // code below validates the username
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(null);

    const handleChange = (event) => {
      setUsername(event.target.value);
      setUsernameError(null); // Clear any previous errors on change
    };

    const validateUsername = (username) => {
      const isValid = username.length >= 5 && username.match(/^[a-zA-Z0-9.@_-]*$/);
    
      if (!isValid) {
        setUsernameError('Username must be at least 5 characters and contain only letters, numbers, periods, dashes, or underscores.');
      }
      return isValid;
    };
    const blurUserName = () => {
      validateUsername(username);
    };
    
  // this code below handles the email and the phone number input box
  
      const [inputValue, setInputValue] = useState('');
      const [inputType, setInputType] = useState(null); // Initially unknown
      const [validationError, setValidationError] = useState(null);
    
      const validateEmailPhoneInput = (event) => {
        setInputValue(event.target.value);
        setValidationError(null); // Clear any previous errors on change
      };
    
      const validateInput = (value) => {
        let isValid = false;
        let type = null;
    
        // Email validation
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(value)) {
          isValid = true;
          type = 'email';
        }
    
        // Phone number validation (replace with your logic)
        const phoneRegex = /^\d{10}$/; // Adjust for your phone number format
        if (!isValid && phoneRegex.test(value)) {
          isValid = true;
          type = 'phone';
        }
    
        if (!isValid) {
          setValidationError('Invalid input. Please enter a valid email address or phone number.');
        } else {
          setInputType(type); // Set input type based on validation
        }
        return isValid;
      };
      const handleBlur = () => {
        validateInput(inputValue);
      };
      // The code below is responsible for validating password input

  return (
    <div id="sign-up-container">
      <div className='con interactive-sec'>
        <div>
          <h1>Interactive <img src={shineLogo} alt="shine logo" className='shine-logo' /> </h1>
          <p>
          Join a community of like minded people where you can free air you opinions, discuss new trends and shared interests. Interact with your friends, family, colleagues and teammates as you you strengthen the bond between one another...
          </p>
        </div>
      </div>
      <div className='con sign-up'>
        <form action="">
          <p className='create-account-text' >Create your account</p>
          <p>Stay connected with friends and family. LET'S GET  YOU STARTED</p>
          <div id="input-boxes">
            <label>
            <input type="text" 
            name="userName"
            id="userName" 
            placeholder='Enter username e.g “@delphine”' 
            className='input-boxes'
            value={username}
            onChange={handleChange} 
            onBlur={blurUserName}
            />
            </label>
            {usernameError && <p className="error-message" style={{color: 'red'}} >{usernameError}</p>}
            <label>
            <input type="text" 
            name="contactInfo"  
            id="combined-input"
            value={inputValue}
            placeholder='Enter email address or phone number”'
            onChange={validateEmailPhoneInput} 
            className='input-boxes'
            onBlur={handleBlur} />
            </label>
            {validationError && <p className="error-message" style={{color: 'red'}} >{validationError}</p>}
            <label>
            <input type="password" name="pswd1" id="pswd1" placeholder='Create a password' className='input-boxes' />
            </label>
            <div id="checked-password-validation">
              <p>Must Contain:</p>
              <br></br>
              <p><img src={cancel} className='checkedIcon' alt="" />Password must begin with a capital letter.</p>
              <p><img src={cancel} className='checkedIcon' alt="" />Password must consist of letters numbers and symbol.</p>
              <p><img src={cancel} className='checkedIcon' alt="" />Password must be 8 characters or more.</p>
              <p><img src={cancel} className='checkedIcon' alt="" />Password must not include white space. but in exception replace them with underscores "_."</p>
            </div>
            <label>
            <input type="password" name="pswd2" id="pswd2" placeholder='Confirm Password' className='input-boxes' />
            </label>
          </div>
          <label className='checkbox'>
            <input type="checkbox" name="agreeWithTerms" id="agreeWithTerms" /> I agree to the terms & conditions
          </label>
          <br/>
          <br/>
          <input type="button" value="Sign up" className='sign-up-btn' />
        </form>
        <p className="or">OR</p>
        <button type="button" className='google-btn'>Continue with Google <img src={googleIcon} alt="google icon" className='google_icon' /></button>
      </div>
    </div>
  )
}

export default Signup
