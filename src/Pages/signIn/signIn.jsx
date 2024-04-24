import React from "react"
import shineLogo from "../Images/shineLogo.png";
import slider from "../Images/auth-pagination-slider.png";
import googleLogo from '../Images/google_icon.png'
import "./signIn.css";



const SignIn = ()=>{

return(
    <div id="signIn-container">
            
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
            
            <div className="con sign-in">
                <div className="sign-in-inner">
                    <div id="sign-in-inner1" className="welcomeText-cont">
                        <h1>Welcome back Sharon!</h1>
                    </div>
                    <div id="sign-in-inner2" className="sign-in-input" >
                    <input type="password" placeholder="Enter your password" />
                    </div>
                    <div id="sign-in-inner3" className="sign-in-inner3">
                        <div className="sign-in-inner3_left">
                            <input type="checkbox" id="rememberMe" />
                            <label for="rememberMe">Remember this password</label>
                        </div>
                        <div className="sign-in-inner3_right">
                            <a href="/#">Forgot password?</a>
                        </div>

                    </div>

                    <div id="sign-in-inner4" className="signIn-btn">
                        <button>Sign In</button>
                    </div>
                    
                    <div id="sign-in-inner5" className="sign-in-inner5">
                        <h2>OR</h2>
                    </div>

                    <div className="horizontal-line"></div>

                    <div id="sign-in-inner6" className="sign-in-inner6">
                        <div className="Google-btn"> 
                        <div className="Google-btn_txt"><a href="/#">Continue with Google</a></div>
                        <div className="Google-btn_logo"> 
                        <img src= {googleLogo} alt="Google"/>
                        </div>
                        
                        </div>
                    </div>

                </div>
                
            </div>

    </div>
)
}

export default SignIn;