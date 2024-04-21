
import React from 'react'
import shineLogo from "../Images/shineLogo.png";
import googleIcon from "../Images/google_icon.png";
import cancel from "../Images/cancel.svg";
import checked from "../Images/checked.svg";
import eyeOpen from "../Images/eye-open.svg";
import eyeClose from "../Images/eye-close.svg";
import slider from "../Images/auth-pagination-slider.png";
import "./getStarted.css"

import { Link } from "react-router-dom/cjs/react-router-dom";

const GetStarted = () => {
  return (
    <div id="getstarted-container">
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
      <section className="getstarted-section">
        <article className="getstarted-article">
          <h1>Start a convo now!</h1>
        </article>
      </section>
    </div>
  );
}

export default GetStarted
