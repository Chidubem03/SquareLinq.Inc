import React from "react";
import squareLinq from '../Images/squarelink-logo.png';
import slider from "../Images/auth-pagination-slider.png";
import googleIcon from "../Images/google_icon.png";
import "./signIn.css";



const SignIn = ()=>{

return(
    <div id="signIn-container">
            
            <div className="con interactive-sec">
            <div id="con-2">
          <h1>
            Interactive 
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
            
            <div className="con sign-in">
                <div className="sign-in-inner">
                <div className="logoCon">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
                    <div id="sign-in-inner1" className="welcomeText-cont">
                        <h1 id="sign-in-h1">Welcome back Sharon!</h1>
                    </div>
                    <br />
                    <br />
                    <div id="sign-in-inner2" className="sign-in-input" >
                    <input type="password" placeholder="Enter your password" />
                    </div>
                    <div id="sign-in-inner3" className="sign-in-inner3">
                        <div className="sign-in-inner3_left">
                            <input type="checkbox" id="rememberMe" />
                            <label for="rememberMe">Remember this password</label>
                        </div>
                        <div className="sign-in-inner3_right">
                            <a href="/resetpassword">Forgot password?</a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div id="sign-in-inner4">
                        <button className="btn" >Sign In</button>
                    </div>
                    <br />
                        <p className="or">or</p>
                    <br />
                <button type="button" 
                id="google-signIn-btn"
                className="google-btn">
                  Continue with Google
                  <img src={googleIcon} alt="google icon" className="google_icon" />
                </button>
                </div>
            </div>

    </div>
)
}

export default SignIn;