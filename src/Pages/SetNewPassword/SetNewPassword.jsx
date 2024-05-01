import React from 'react'
import shineLogo from "../Images/shineLogo.png";
import slider from "../Images/auth-pagination-slider.png";
import SetNewPasswordImg from "../Images/selfie.png"
 import "./SetNewPassword.css"

const SetNewPassword = ()=>{

    return (

        <div className='container'>
        <div className="containerInner">
            <div className="containerInnerLeft">
            <div
              className="containerInnerLeft_img"
              style={{ backgroundImage: `url(${SetNewPasswordImg})` }}
            >
              <div className="SetNewPassword_containerInnerLeft_imgColor">
                <div className="containerInnerLeft_imgColorInner">
                  <section>
                    <h2>Interactive</h2>
                  </section>
                  <br />
                  <br />
                  <section>
                    <p className="paragraph-info">
                      Join a community of like minded people where you can free
                      air you opinions, discuss new trends and shared interests.
                      Interact with your friends, family, colleagues and
                      teammates as you strengthen the bond between one
                      another...
                    </p>
                  </section>

                  <section className="slider-bar"></section>
                </div>
              </div>
            </div>
            </div>
            <div className="containerInnerRight">

            <div className="containerInnerRightInner">
              <div className="containerInnerRightInnerChild">
                <section className="containerInnerRightInnerChild1">
                  <h2 id="verify-email-h1" >Set New Password</h2>
                </section>

                <section className="containerInnerRightInnerChild2">
                  <p>
                    Enter your new password and keep it in mind
                  </p>
                </section>

                <section className="containerInnerRightInnerChild3">
                  <input type="text" placeholder='Enter new password' class="SetNewPassword_input" />
                </section>

                <section className="SetNewPassword_containerInnerRightInnerChild5">
                  <button className="btn" /*onClick={handleClick}*/>Verify</button>
                </section>
              </div>
            </div>
            </div>

         </div>

        </div>
    )
}

export default SetNewPassword
