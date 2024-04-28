import leftsideImg from "../Images/selfie.png";
import shineLogo from "../Images/shineLogo.png";
import slides from "../Images/auth-pagination-slider.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './resetPassword.css';


const ResetPassword = () => {
    return ( 
        <div className="resetPassword-container">
            <div className="resetPassword-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="resetPassword-leftside_container">
                <h1 className="leftside-header">
                    Interactive <img src={shineLogo} alt="shineLogo" className='shine' />{" "}
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
            <div className="resetPassword-rightside">
              <div className="resetPassword-rightside_content">
                <h1 className="rightside-header">
                    Reset Password
                </h1>
                <p className="rightside-paragraph">
                    Enter the email you'd like the reset password link to be sent
                </p>
              </div>
                <form action="/#">
                    <label htmlFor="email">
                        <input 
                        type="email" 
                        placeholder="Enter your mail" 
                        /> 
                         <Link to ="#/"> 
                         Send 
                         </Link>
                    </label>
                </form>
                

            </div>
        </div>
     );
}
 
export default ResetPassword;