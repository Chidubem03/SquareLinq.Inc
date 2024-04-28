import React from 'react'

import shineLogo from "../Images/shineLogo.png";
import slider from "../Images/auth-pagination-slider.png";
import "./resetSuccess.css";
import {IoIosCheckmark } from "react-icons/io";

// import { Link } from "react-router-dom/cjs/react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="getstarted-container">
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
      <section className="reset-success-section">
        <article className="reset-success-article">
          <h1>Password Reset Successfully</h1>
          <p>Note that the development build is not optimized.</p>
          <div className='check-container'><IoIosCheckmark/></div>
          <button>Complete</button>

        </article>
      </section>
    </div>
  );
}

export default ResetSuccess
