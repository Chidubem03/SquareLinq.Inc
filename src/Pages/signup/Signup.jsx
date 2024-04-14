import React, { useEffect, useState, useRef } from 'react';
import shineLogo from '../Images/shineLogo.png';
import googleIcon from '../Images/google_icon.png';
import cancel from '../Images/cancel.svg';
import checked from '../Images/checked.svg';
import eyeOpen from '../Images/eye-open.svg';
import eyeClose from '../Images/eye-close.svg';
import './signup.css';
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
  
      const [emailAndPhoneValue, setemailAndPhoneValue] = useState('');
      const [inputType, setInputType] = useState(null); // Initially unknown
      const [validationError, setValidationError] = useState(null);
    
      const validateEmailPhoneInput = (event) => {
        setemailAndPhoneValue(event.target.value);
        setValidationError(null); // Clear any previous errors on change
      };
      const [isValid, setIsValid] = useState(false);
      const validateInput = (value) => {
        let type = null;
    
        // Email validation
        const emailRegex = /^[\w-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(value)) {
          setIsValid(true);
          type = 'email';
        }
    
        // Phone number validation 
        const phoneRegex = /^\d{10}$/; 
        if (!isValid && phoneRegex.test(value)) {
          setIsValid(true);
          type = 'phone';
        }
        setInterval(()=> {
          if (!isValid) {
            setValidationError('')
          } else if(isValid) {
            setValidationError('Invalid input. Please enter a valid email address or phone number.');
          }
          else {
            setInputType(type); // Set input type based on validation
          }
          
          console.log(isValid);
          return isValid;
        }, 500)}
      const handleBlur = () => {
        validateInput(emailAndPhoneValue);
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
  
  
// code below will check if created password is same as comfirm password
  const confirmPassword = useRef(null)
  const [password2, setPassword2] = useState('')

  function handleConfirmPassword() {
    let pswd = confirmPassword.current.value;
    setPassword2(pswd);
    if(pswd === password) {
    } else {
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
   const [message, setMessage] = useState(null);
   const handleSubmit = (e) => {
  
    if(username.length < 4 || username === '') {
      e.preventDefault();
      setMessage('user name must be greater or equal to 3 characters')
      return false;
    } 
    if(isValid === false) {
      e.preventDefault();
      setMessage('please enter a valid email address')
      return false;
    }
    if (passWordIsValid) {
      e.preventDefault();
      setMessage('passwords is not valid')
      return false;
    }
    if(password2 !== password) {
      e.preventDefault()
      setMessage('passwords do not match')
      return false;
    }
    if(!isChecked){
      e.preventDefault();
      setMessage('please tick the terms and condition box');
      return false;
    }

   }

   // the reveal and close password function

   const [isPasswordVisible, setIsPasswordVisible] = useState(true);

   const changePassWordType = () => {
     setIsPasswordVisible((isPasswordVisible) => {
      return isPasswordVisible = !isPasswordVisible;
     });
   };
 


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
            autoComplete='on'
            />
            </label>
            {usernameError && <p  style={{color: 'red'}} >{usernameError}</p>}
            <label>
            <input type="text" 
            name="contactInfo"  
            id="combined-input"
            value={emailAndPhoneValue}
            placeholder='Enter email address or phone number”'
            onChange={validateEmailPhoneInput} 
            className='input-boxes'
            onBlur={handleBlur}
            autoComplete='email'
            />
            </label>
          {validationError && <p style={{color: 'red'}}>{validationError}</p>}
            <label className='input-boxes'>
            <input 
            type={isPasswordVisible ? 'password' : 'text'}
            name="pswd1" 
            id="pswd1"
            placeholder='Create a password' 
            className='input-box'
            value={password}
            onChange={handlePassWord}
            onInput={() => validatePasswordInput(password)}
            />
            <img 
             src={isPasswordVisible ? eyeClose : eyeOpen}
            className='password-icon' 
            alt="" 
            onClick={()=>changePassWordType()}
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
            <label className='input-boxes'>
            <input 
            type={isPasswordVisible ? 'password' : 'text'} 
            name="password2" 
            id="password2" 
            placeholder='Confirm Password' 
            className='input-box'
            value={password2}
            ref={confirmPassword}
            onChange={handleConfirmPassword}
            />
            <img 
            src={isPasswordVisible ? eyeClose : eyeOpen}
            className='password-icon' 
            alt=""
            onClick={()=>changePassWordType()}
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
          {message && <p style={{color: 'red'}}>{message}</p>}
          <br/>
           <button type='submit'
           className='sign-up-btn'>
            Sign Up
           </button>
        </form>
        <p className="or">OR</p>
        <button type="button" className='google-btn'>Continue with Google <img src={googleIcon} alt="google icon" className='google_icon' /></button>
      </div>
    </div>
  )
}

export default Signup
