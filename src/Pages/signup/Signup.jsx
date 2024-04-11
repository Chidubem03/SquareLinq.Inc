import React, { useEffect, useState, useRef } from 'react';
import shineLogo from '../Images/shineLogo.png';
import googleIcon from '../Images/google_icon.png';
import cancel from '../Images/cancel.svg';
import checked from '../Images/checked.svg';
import './signup.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';


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
      const [isValid, setIsValid] = useState(false);
      const validateInput = (value) => {
        setIsValid(false);
        let type = null;
    
        // Email validation
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(value)) {
          setIsValid(true);
          type = 'email';
        }
    
        // Phone number validation (replace with your logic)
        const phoneRegex = /^\d{10}$/; // Adjust for your phone number format
        if (!isValid && phoneRegex.test(value)) {
          setIsValid(true);
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
      const [password, setPassword] = useState('');
      let [passWordIsValid, setPassWordIsValid] = useState(false);
      const [isPassWordValid, setIsPasswordValid] = useState(false);

      const handlePassWord = (event) => {
        setPassword(event.target.value);
        setIsPasswordValid(true);
      }

      const [check1, setCheck1] = useState(cancel);
      const [check2, setCheck2] = useState(cancel);
      const [check3, setCheck3] = useState(cancel);
      const [check4, setCheck4] = useState(cancel);

      const pswdLength = 8;
     const checkPswdLength = () => {
       if(password.length >= pswdLength) {
         setCheck3(checked);
       } else {
         setCheck3(cancel);
       }
      }
      useEffect(() => {
        checkPswdLength();
      });
      

  const validatePasswordInput = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@_$!%*?&]{8,}$/; // Regular expression for validation
     passWordIsValid = regex.test(password);
    setPassWordIsValid(passWordIsValid);

    if (!passWordIsValid) {
      if (!password.match(/[A-Z]/)) {
        setCheck1(cancel)
      } 
      else if (password.match(/[A-Z]/)) {
        setCheck1(checked)
      }
      if (!password.match(/\d/) && !password.match(/[@$!%*?&]/) && !password.match(/[a-z]/)) {
        // No need to set check2 here, it's already invalid
      } else {
        // Password contains at least one number, special character or lowercase letter
        setCheck2(checked); // Assuming 'checked' represents a valid state
      }
      // statement below checks for possible whitespaces
      if (password.includes(' ')) {
        setCheck4(cancel)
      } else if (!password.includes(' ')) {
        setCheck4(checked)
      }
    }
    return passWordIsValid;
  };
      ;
// code below will check if created password is same as comfirm password
  const comfirmPassword = useRef(null)
  const [password2, setPassword2] = useState('')

  function handleConfirmPassword() {
    let pswd = comfirmPassword.current.value;
    setPassword2(pswd);
    console.log(pswd)
    if(pswd === password) {
      console.log('where good to go');
    } else {
      console.log('not the same');
      return false;
    }
  }

  // terms and condition validation
   const [isChecked, setIsChecked] = useState(false);
   const handleIsChecked = () => {
    setIsChecked(prevBoo => {
     return (prevBoo = !prevBoo);
    })
   }

   // handle submit 
   const handleSubmit = (e) => {
    if(!isChecked){
      e.preventDefault();
      console.error(isChecked, 'is not ticked')
    } else {
      console.log('its ticked')
    }
    if(username.length < 4 || username === '') {
      e.preventDefault();
      console.log(username, 'username field is empty')
    } 
    if (passWordIsValid) {
      e.preventDefault();
      console.error('password is invalid')
    } else if (!passWordIsValid) {
      console.error('password fixed');
    }
    if(password2 === !password) {
      e.preventDefault()
      console.error('passwords must be the same')
    } else if(password === password2) {
      console.log('correct')
    } 
    if(!isValid) {
      e.preventDefault();
    }
   }
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
        <form onSubmit={handleSubmit}>
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
            <input type="password"
            name="pswd1" id="pswd1"
            placeholder='Create a password' 
            className='input-boxes'
            value={password}
            onChange={handlePassWord}
            onInput={() => validatePasswordInput(password)}
            />
            </label>
            { isPassWordValid &&
              <div id="checked-password-validation">
              <p>Must Contain:</p>
              <div>
              <p><img src={check1} className='checkedIcon' alt="" />Password must begin with a capital letter.</p>
              <p><img src={check2} className='checkedIcon' alt="" />Password must consist of letters numbers and symbol.</p>
              <p><img src={check3} className='checkedIcon' alt="" />Password must be 8 characters or more.</p>
              <p><img src={check4} className='checkedIcon' alt="" />Password must not include white space. but in exception replace them with underscores "_".</p>
              </div>
            </div>}
            <label>
            <input 
            type="password" 
            name="password2" 
            id="password2" 
            placeholder='Confirm Password' 
            className='input-boxes' 
            ref={comfirmPassword}
            value={password2}
            onChange={handleConfirmPassword}
            />
            </label>
          </div>
          <label className='checkbox'>
            <input 
            type="checkbox" 
            name="agreeWithTerms" 
            id="agreeWithTerms"
            value={isChecked}
            onChange={handleIsChecked}
            /> I agree to the <Link to="/" id="highlight">terms & conditions</Link>
          </label>
          <br/>
          <br/>
          <input 
           type="submit"
           value="Sign up" 
           className='sign-up-btn' />
        </form>
        <p className="or">OR</p>
        <button type="button" className='google-btn'>Continue with Google <img src={googleIcon} alt="google icon" className='google_icon' /></button>
      </div>
    </div>
  )
}

export default Signup
