import { Link } from "react-router-dom/cjs/react-router-dom";
import shineLogo from "../Images/shineLogo.png";
import tick from "../Images/tick.png";
import slides from "../Images/VerifyComplete-slider.png";
import "./VerifyComplete.css";
import leftsideImg from "../Images/left-side-img.png";

const VerifyComplete = () => {
    return ( 
        <div className="VerificationComplete-container">
            <div className="VerificationComplete-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="VerificationComplete-leftside_container">
                <img src={shineLogo} alt="shineLogo" className='shine' />
                <h1 className="leftside-header">
                    Community
                </h1>
                <p className="leftside-paragraph">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" className='slides' />
              </div>
            </div>
            <div className="VerificationComplete-rightside">
                <h1 className="rightside-header">
                    Verification Complete!!
                </h1>
                <p className="rightside-paragraph">
                    Your email has successfully been verified <Link to="/#" style={{textDecoration: "none", color: "blueViolet"}}>Enable 2FA</Link>
                </p>
                <div className="rightside-minicontainer">
                   <img src={tick} alt="GoodTick" className="tick" />
                     <button>Continue</button>
                </div>
            </div>
        </div>
     );
}
 
export default VerifyComplete;