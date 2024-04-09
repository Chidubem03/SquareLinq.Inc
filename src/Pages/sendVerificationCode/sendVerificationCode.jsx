import slides from '../Images/slider-img.png';
import leftsideImg from '../Images/leftside-img.png';
import shineLogo from '../Images/shineLogo.png';
import "./SendVerificationCode.css";

function SendVerificationCode() {

    return (
        <div className="sendVerification-container">
            <div className="sendVerification-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="sendVerification-leftside_container">
                <img src={shineLogo} alt="shineLogo" className='shine' />
                <h1 className="leftside-header">
                    Explore
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
            <div className="sendVerfication-rightside">
                <h1 className="rightside-header">
                    Get a verification code
                </h1>
                <p className="rightside-paragraph">
                    Select where you would like your verification code to be sent
                </p>
                <form action="Post">

                    <label htmlFor="email">
                        <input type="radio" name='verify' value='Email' />
                        Email address
                    </label>

                    <label htmlFor="number">
                        <input type="radio" name='verify' value='Phone No'/>
                        Phone Number
                    </label>

                    <button>Send code</button>
                </form>
            </div>
        </div>
    );
}
 
export default SendVerificationCode;