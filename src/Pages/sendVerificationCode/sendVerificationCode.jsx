import slides from '../Images/slider-img.png';
import leftsideImg from '../Images/leftside-img.png';
import shineLogo from '../Images/shineLogo.png';
import "./SendVerificationCode.css";

function SendVerificationCode() {
    
// This Logic is to redirect the user to the respective page that is linked to each input[type:radio] buttons
    const handleClick = (e) =>{
        e.preventDefault();
        if(document.getElementById('email').checked){
           window.location.pathname = '/verifyemail';
            return true;
           
        }
        else if(document.getElementById('phone').checked){
            window.location.pathname = '/request-phone';
            return true;
        }
        else{
            alert('Check one of the boxes');
            return false;
        }
    }

    return (
        <div className="sendVerification-container">
            <div className="sendVerification-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="sendVerification-leftside_container">
                <img src={shineLogo} alt="shineLogo" className='shine' />
                <h1 className="leftside-header">
                    Explore
                </h1>
                <p className="paragraph-info">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" />
              </div>
            </div>
            <div className="sendVerfication-rightside">
                <h1 className="send-verification-post">
                    Get a verification code
                </h1>
                <p className="rightside-paragraph">
                    Select where you would like your verification code to be sent
                </p>
                <form action="Post">

                    <label htmlFor="email">
                        <input type="radio" name='verify' value='Email' id='email' />
                        Email address
                    </label>

                    <label htmlFor="number">
                        <input type="radio" name='verify' value='Phone No' id='phone'/>
                        Phone Number
                    </label>

                    <button className='btn' onClick={handleClick}>Send code</button>
                </form>
            </div>
        </div>
    );
}
 
export default SendVerificationCode;