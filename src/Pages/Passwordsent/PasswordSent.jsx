import React from 'react';
import shineLogo from '../Images/shineLogo.png';
import slider from '../Images/auth-pagination-slider4.png';
import tickImg from '../Images/tick.png';
import squareLinq from '../Images/squarelink-logo.png';
import './reset.css';

function PasswordSent() {
  return (
    <div id='reset-password-con'>
               <div className="logoCon-password-sent">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
       <div className="con interactive-sec">
        <div className="text-con">
          <h1>
            Interactive <img src={shineLogo} alt="shine logo" id="shine-logo" />{" "}
          </h1>
          <br />
          <p id='reset-page-paragraph'>
            Join a community of like minded people where you can free air you
            opinions, discuss new trends and shared interests. Interact with
            your friends, family, colleagues and teammates as you you strengthen
            the bond between one another...
          </p>
          <img src={slider} className="sign-up-slider" alt="slider" />
        </div>
      </div>
      <div className='reset-password-sent-con'>
         <div className='reset-container'>
         <p className='welcome-text'>Reset Password Link sent!</p>
         <p>Check your mail inbox for your password reset link</p>
          <img src={tickImg} alt="tick" />
          <button className='btn'>continue</button>
         
         </div>
      </div>
    </div>
  )
}

export default PasswordSent;
