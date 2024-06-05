import { Link } from 'react-router-dom/cjs/react-router-dom';
import leftsideImg from '../Images/leftside-img.png';
import { useState } from 'react';
import slides from '../Images/slider-img.png';
import goodSign from '../Images/Good.png';
import addSign from '../Images/Add.png';
import squareLinq from '../Images/squarelink-logo.png';
import './yourInterest.css';

const YourInterest = () => {
 
    const handleNext = () => {
       const errMessage = document.querySelector('.error');
      if(document.querySelector('input[type="text"]').value === ''){
        errMessage.style.display = "flex";
        return false;
      }
      else{
      window.location.pathname = '/UserInvite';
      errMessage.style.display = "none";
      }
    }
  const [searchText, setSearchText] = useState('');
  const [clickedIcons, setClickedIcons] = useState([]);

  const handleIconClick = (text) => {
     if (clickedIcons.includes(text)) {
      // If icon is already clicked, remove it from clickedIcons
      setClickedIcons(prevIcons => prevIcons.filter(icon => icon !== text));
      setSearchText(prevText =>{ 
         // If the removed icon was the only text in the search field
      if (prevText.trim() === text) {
        return ''; // Clear the search field
      }  
      // Check if the clicked icon's text is followed by a comma
      const regex = new RegExp(`,? ${text}`);
      if (regex.test(prevText)) {
        // Remove the clicked icon's text along with any preceding comma
        return prevText.replace(regex, '');
      }
      const regexp = new RegExp(`${text} ?,`);
      if(regexp.test(prevText)){
        return prevText.replace(regexp, '');
      }
      // Remove the clicked icon's text without removing other accompanying text
      return prevText.replace(text, '').replace(/, ,/, ', ').trim();
      });
      
    } else{
      // If icon is not clicked, add it to clickedIcons
      setClickedIcons(prevIcons => [...prevIcons, text]);
       const errMessage = document.querySelector('.error');
    setSearchText(prevText => {
      if (prevText.trim() === '') {
        errMessage.style.display = "none";
        return text;
      } else {
        return `${prevText}, ${text}`;
      }
    })
    }
  };

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
                <h1 className="leftside-header">
                    Explore
                </h1>
                <p className="leftside-paragraph paragraph-info">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" />
              </div>
            </div>
            <div className="yourInterest-rightside">
              <div className="yourInterest-rightside_content">
                <div className="logoCon">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
                <p className="questions">
                    What are your Interests?
                </p>
                <p className="rightside-paragraph">
                    Select topics you're interested in and explore forums feeds
                    and videos tailored to meet your exquisite taste
                </p>
              </div>
                <form action='/UserInvite' className='yourInterest-form '>
                  <div className="tags">
                    <div className="tags-content">
                    <label id='tag1' className={status.tag1 ? 'check' : 'add'} htmlFor="Fashion">Fashion <span id="tag" onClick={() => {handleClick('tag1');handleIconClick('Fashion');}}>{status.tag1 ? Good : Add}</span> </label>
                    <label id='tag2' className={status.tag2 ? 'check' : 'add'} htmlFor="Tech">Tech<span id="tag" onClick={() => {handleClick('tag2');handleIconClick('Tech');}}>{status.tag2 ? Good : Add}</span>  </label>
                    <label id='tag3'  className={status.tag3 ? 'check' : 'add'} htmlFor="Finance">Finance<span id="tag" onClick={() => {handleClick('tag3'); handleIconClick('Finance');}}>{status.tag3 ? Good : Add} </span> </label>
                    <label id='tag4' className={status.tag4 ? 'check' : 'add'}  htmlFor="Health and Lifestyle">Health and Lifestyle<span id="tag" onClick={() => {handleClick('tag4'); handleIconClick('Health and Lifestyle');}}>{status.tag4 ? Good : Add} </span></label>
                    <label id='tag5' className={status.tag5 ? 'check' : 'add'} htmlFor="Entertainment">Entertainment<span id="tag" onClick={() => {handleClick('tag5'); handleIconClick('Entertainment');}}> {status.tag5 ? Good : Add} </span></label>
                    <label id='tag6' className={status.tag6 ? 'check' : 'add'} htmlFor="Food">Food<span id="tag" onClick={() =>{ handleClick('tag6'); handleIconClick('Food');}}>{status.tag6 ? Good : Add} </span></label>
                    <label id='tag7' className={status.tag7 ? 'check' : 'add'}  htmlFor="Business">Business<span id="tag" onClick={() => {handleClick('tag7'); handleIconClick('Business');}}> {status.tag7 ? Good : Add} </span></label>
                    <label id='tag8' className={status.tag8 ? 'check' : 'add'}  htmlFor="Education">Education<span id="tag" onClick={() => {handleClick('tag8'); handleIconClick('Education');}}>{status.tag8 ? Good : Add} </span> </label>
                    <label id='tag9' className={status.tag9 ? 'check' : 'add'}  htmlFor="Beauty">Beauty<span id="tag" onClick={() => {handleClick('tag9'); handleIconClick('Beauty');}}>{status.tag9 ? Good : Add} </span> </label>
                    <label id='tag10' className={status.tag10 ? 'check' : 'add'} htmlFor="Socials">Socials<span id="tag" onClick={() => {handleClick('tag10'); handleIconClick('Socials');}}>{status.tag10 ? Good : Add} </span> </label>
                    <label id='tag11' className={status.tag11 ? 'check' : 'add'} htmlFor="Arts and Culture">Arts and Culture<span id="tag" onClick={() => {handleClick('tag11'); handleIconClick('Arts and Culture');}}>{status.tag11 ? Good : Add} </span> </label>
                    <label id='tag12' className={status.tag12 ? 'check' : 'add'} htmlFor="FAANG">FAANG<span id="tag" onClick={() =>{ handleClick('tag12'); handleIconClick('FAANG');}}> {status.tag12 ? Good : Add} </span></label>
                    <label id='tag13' className={status.tag13 ? 'check' : 'add'} htmlFor="Startups">Startups<span id="tag" onClick={() => {handleClick('tag13'); handleIconClick('Startups');}}> {status.tag13 ? Good : Add} </span></label>
                    <label id='tag14' className={status.tag14 ? 'check' : 'add'} htmlFor="Tailoring">Tailoring<span id="tag" onClick={() => {handleClick('tag14'); handleIconClick('Tailoring');}}>{status.tag14 ? Good : Add} </span> </label>
                    <label id='tag15' className={status.tag15 ? 'check' : 'add'} htmlFor="AFCON">AFCON<span id="tag" onClick={() => {handleClick('tag15'); handleIconClick('AFCON');}}>{status.tag15 ? Good : Add} </span> </label>
                    <label id='tag16' className={status.tag16 ? 'check' : 'add'} htmlFor="Architecture">Architecture<span id="tag" onClick={() => {handleClick('tag16'); handleIconClick('Architecture');}}>{status.tag16 ? Good : Add} </span> </label>
                    <label id='tag17' className={status.tag17 ? 'check' : 'add'} htmlFor="Knowledge and power">Knowledge and power<span id="tag" onClick={() => {handleClick('tag17'); handleIconClick('Knowledge and power');}}>{status.tag17 ? Good : Add} </span> </label>
                    <label id='tag18' className={status.tag18 ? 'check' : 'add'} htmlFor="SitCom">SitCom <span id="tag" onClick={() => {handleClick('tag18'); handleIconClick('SitCom');}}>{status.tag18 ? Good : Add} </span> </label>
                    <label id='tag19' className={status.tag19 ? 'check' : 'add'} htmlFor="Comedy">Comedy<span id="tag" onClick={() => {handleClick('tag19'); handleIconClick('Comedy');}}>{status.tag19 ? Good : Add} </span> </label>
                    <label id='tag20' className={status.tag20 ? 'check' : 'add'} htmlFor="Latin Pop">Latin Pop<span id="tag" onClick={() => {handleClick('tag20'); handleIconClick('Latin Pop');}}> {status.tag20 ? Good : Add} </span></label>
                  </div>
                  </div>
                  <label className="input">
                    <input 
                    type="text" 
                    placeholder='Search your interests... '
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="div">
                      <p className='error' style={{color : "red", fontWeight : "bold", display : "none"}}>
                        Please select your interests or click on skip
                      </p>
                        <Link style={{marginLeft: "auto", marginRight: "0", marginTop: "2rem"}} to ='/UserInvite'>
                          Skip
                        </Link>
                    </div>
                  </label>
                </form>
                <button onClick={handleNext} className='btn' style={{cursor: "pointer"}}>Next</button>
            </div>
            </div>
    );
}
 
export default YourInterest; 