import React, { useState } from 'react';
import shineLogo from '../Images/shineLogo.png';
import slider from '../Images/auth-pagination-slider4.png';
import link from '../Images/link-i.png';
import './userinvite.css'

export default function UserInvite() {

    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const result = emailRegex.test(email);
        return result;
      };
    
      const emailHandler = (event) => {
        const value  = event.target.value;
        setEmail(value);
        setEmailIsValid(validateEmail(value));
      };
    const [errMsg, setErrMsg] = useState(null);
     function handleSubmit(e) {
        e.preventDefault();
        if(!emailIsValid) {
            setErrMsg('email address is invalid')
        } else {
            setErrMsg(null)
        }
     }
  return (
    <div className='user-invite-container'>
      <div className='user-invite-info'>
      <h1>Community <img src={shineLogo} alt="shine logo" id='shineLogo' /> </h1>
          <p>
          Join a community of like minded people where you can free air you opinions, discuss new trends and shared interests. Interact with your friends, family, colleagues and teammates as you you strengthen the bond between one another... 
          </p>
          <img src={slider} alt="" />
      </div>
      <div className='user-invite-input'>
        <form id="user-invite-form" onSubmit={handleSubmit}>
         <div>
         <p className='welcome-text'>Welcome to SquareLinq</p>
         <p>Invite your family, colleagues to share in this new found experience right now</p>
         </div>
         <div>
            <div className='invite-container-input'>
            <input type="text" 
            placeholder='www.linqsocial.com\shaniahTwain\sharednewPost' 
            className='invite-inputs'/>
            <img src={link} alt="" />
            </div>
            <p id="or">OR</p> 
            <div className='invite-container-input'>
            <input type="text"
            onChange={emailHandler}
            placeholder='Enter email to send an invite to your friends' 
            className='invite-inputs'
            value={email}
            />
            <span className="tiny-txt">Send</span>
            </div>
            {errMsg && <p style={{color: 'red'}}>{errMsg}</p>}
         </div>
         <button className='invite-btn'>
            <span className='btn-txt'>
            finish
            </span>
         </button>
         <span className='tiny-txt skip'>Skip</span>
        </form>
      </div>
    </div>
  )
}





