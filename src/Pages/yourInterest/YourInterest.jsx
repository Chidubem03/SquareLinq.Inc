import { Link } from 'react-router-dom/cjs/react-router-dom';
import leftsideImg from '../Images/leftside-img.png';
import shineLogo from '../Images/shineLogo.png';
import './yourInterest.css';
import { useState } from 'react';
import slides from '../Images/slider-img.png';
import goodSign from '../Images/Good.png';
import addSign from '../Images/Add.png';

const YourInterest = () => {
    const Add = <img src={addSign} className="plus" alt="Add"/>;
    const Good = <img src={goodSign} style={{float : 'right'}} alt="Good"/>;
    const [status, setStatus] = useState({
        tag1: false,
        tag2: false,
        tag3: false,
        tag4: false,
        tag5: false,
        tag6: false,
        tag7: false,
        tag8: false,
        tag9: false,
        tag10: false,
        tag11: false,
        tag12: false,
        tag13: false,
        tag14: false,
        tag15: false,
        tag16: false,
        tag17: false,
        tag18: false,
        tag19: false,
        tag20: false,
    });

    const handleClick = (tag) =>{
        setStatus((prevstate) => 
    ({ ...prevstate, [tag]: !prevstate[tag] }));
    };
    return (
         <div className="yourInterest-container">
          
            <div className="yourInterest-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="yourInterest-leftside_container">
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
            <div className="yourInterest-rightside">
              <div className="yourInterest-rightside_content">
                <h1 className="rightside-header">
                    What are your Interests?
                </h1>
                <p className="rightside-paragraph">
                    Select topics you're interested in and explore forums feeds
                    and videos tailored to meet your exquisite taste
                </p>
              </div>
                <form action="#">
                  <div className="tags">
                    <div className="tags-content">
                    <label id='tag1' className={status.tag1 ? 'check' : 'add'} htmlFor="Fashion">Fashion Tech<span onClick={() => handleClick('tag1')}>{status.tag1 ? Good : Add}</span> </label>
                    <label id='tag2' className={status.tag2 ? 'check' : 'add'} htmlFor="Tech">Tech<span  onClick={() => handleClick('tag2')}>{status.tag2 ? Good : Add}</span>  </label>
                    <label id='tag3'  className={status.tag3 ? 'check' : 'add'} htmlFor="Finance">Finance<span onClick={() => handleClick('tag3')}>{status.tag3 ? Good : Add} </span> </label>
                    <label id='tag4' className={status.tag4 ? 'check' : 'add'}  htmlFor="Health and Lifestyle">Health and Lifestyle<span onClick={() => handleClick('tag4')}>{status.tag4 ? Good : Add} </span></label>
                    <label id='tag5' className={status.tag5 ? 'check' : 'add'} htmlFor="Entertainment">Entertainment<span  onClick={() => handleClick('tag5')}> {status.tag5 ? Good : Add} </span></label>
                    <label id='tag6' className={status.tag6 ? 'check' : 'add'} htmlFor="Food">Food<span onClick={() => handleClick('tag6')}>{status.tag6 ? Good : Add} </span></label>
                    <label id='tag7' className={status.tag7 ? 'check' : 'add'}  htmlFor="Business">Business<span onClick={() => handleClick('tag7')}> {status.tag7 ? Good : Add} </span></label>
                    <label id='tag8' className={status.tag8 ? 'check' : 'add'}  htmlFor="Education">Education<span onClick={() => handleClick('tag8')}>{status.tag8 ? Good : Add} </span> </label>
                    <label id='tag9' className={status.tag9 ? 'check' : 'add'}  htmlFor="Beauty">Beauty<span onClick={() => handleClick('tag9')}>{status.tag9 ? Good : Add} </span> </label>
                    <label id='tag10' className={status.tag10 ? 'check' : 'add'} htmlFor="Socials">Socials<span onClick={() => handleClick('tag10')}>{status.tag10 ? Good : Add} </span> </label>
                    <label id='tag11' className={status.tag11 ? 'check' : 'add'} htmlFor="Arts and Culture">Arts and Culture<span onClick={() => handleClick('tag11')}>{status.tag11 ? Good : Add} </span> </label>
                    <label id='tag12' className={status.tag12 ? 'check' : 'add'} htmlFor="FAANG">FAANG<span onClick={() => handleClick('tag12')}> {status.tag12 ? Good : Add} </span></label>
                    <label id='tag13' className={status.tag13 ? 'check' : 'add'} htmlFor="Startups">Startups<span onClick={() => handleClick('tag13')}> {status.tag13 ? Good : Add} </span></label>
                    <label id='tag14' className={status.tag14 ? 'check' : 'add'} htmlFor="Tailoring">Tailoring<span onClick={() => handleClick('tag14')}>{status.tag14 ? Good : Add} </span> </label>
                    <label id='tag15' className={status.tag15 ? 'check' : 'add'} htmlFor="AFCON">AFCON<span onClick={() => handleClick('tag15')}>{status.tag15 ? Good : Add} </span> </label>
                    <label id='tag16' className={status.tag16 ? 'check' : 'add'} htmlFor="Architecture">Architecture<span onClick={() => handleClick('tag16')}>{status.tag16 ? Good : Add} </span> </label>
                    <label id='tag17' className={status.tag17 ? 'check' : 'add'} htmlFor="Knowledge and power">Knowledge and power<span onClick={() => handleClick('tag17')}>{status.tag17 ? Good : Add} </span> </label>
                    <label id='tag18' className={status.tag18 ? 'check' : 'add'} htmlFor="SitCom">SitCom <span onClick={() => handleClick('tag18')}>{status.tag18 ? Good : Add} </span> </label>
                    <label id='tag19' className={status.tag19 ? 'check' : 'add'} htmlFor="Comedy">Comedy<span onClick={() => handleClick('tag19')}>{status.tag19 ? Good : Add} </span> </label>
                    <label id='tag20' className={status.tag20 ? 'check' : 'add'} htmlFor="Latin Pop">Latin Pop<span onClick={() => handleClick('tag20')}> {status.tag20 ? Good : Add} </span></label>
                  </div>
                  </div>
                  <label className="input">
                    <input type="text"placeholder='Search interests and seperate with a comma "," '/>
                      <Link style={{cursor : 'pointer', textDecoration : 'none'}}>
                        Enter
                      </Link>
                  </label>
                  <button className='btn'>Next</button>
                </form>
            </div>
            </div>
    );
}
 
export default YourInterest; 