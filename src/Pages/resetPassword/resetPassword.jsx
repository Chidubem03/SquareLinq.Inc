import leftsideImg from "../Images/selfie.png";
import shineLogo from "../Images/shineLogo.png";
import slides from "../Images/auth-pagination-slider.png";
import './resetPassword.css';


const ResetPassword = () => {
    const  handleSend = (e) =>{
        e.preventDefault();
    }
    return ( 
        <div className="resetPassword-container">
            <div className="resetPassword-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="resetPassword-leftside_container">
                <h1>
                    Interactive <img src={shineLogo} alt="shineLogo" />{" "}
                </h1>
                <p className="paragraph-info">
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
                <h1 id="reset-pswd-1">
                    Reset Password
                </h1>
                <p className="rightside-paragraph">
                    Enter the email you'd like the reset password link to be sent
                </p>
              </div>
                <form id="resetPassword-form">
                    <label htmlFor="email">
                        <input 
                        type="email" 
                        placeholder="Enter your mail" 
                        /> 
                    </label>
        <button onClick={handleSend} className="btn">
        Send 
        </button>
                </form>
                

            </div>
        </div>
     );
}
 
export default ResetPassword;