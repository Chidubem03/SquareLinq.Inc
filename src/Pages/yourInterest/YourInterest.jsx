import { Link } from 'react-router-dom/cjs/react-router-dom';
import leftsideImg from '../Images/leftside-img.png';
import shineLogo from '../Images/shineLogo.png';
import './yourInterest.css';
import { useState } from 'react';
import slides from '../Images/slider-img.png';
import goodSign from '../Images/Good.png';
import addSign from '../Images/Add.png';
const YourInterest = () => {
    const Add = <img src={addSign} alt="Add"/>;
    const Good = <img src={goodSign} alt="Good"/>;
    const [status, setStatus] = useState(Add);

    const handleClick = () =>{
        if(status === Add){
            setStatus(Good);
            document.getElementById('tag').classList.add("clicked");
        }else{
            setStatus(Add);
        }
    }
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
                <h1 className="rightside-header">
                    What are your Interests?
                </h1>
                <p className="rightside-paragraph">
                    Select topics you're interested in and explore forums feeds
                    and videos tailored to meet your exquisite taste
                </p>
                <form action="#">
                  <div className="tags">
                    <label id='tag' htmlFor="Fashion">Fashion <button onClick={handleClick}>{status}</button></label>
                    <label id='tag'htmlFor="Tech">Tech <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Finance">Finance <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Health and Lifestyle">Health and Lifestyle <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Entertainment">Entertainment <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Food">Food <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Business">Business <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Education">Education <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Beauty">Beauty <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Socials">Socials <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Arts and Culture">Arts and Culture <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="FAANG">FAANG <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Startups">Startups <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Tailoring">Tailoring <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="AFCON">AFCON <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Architecture">Architecture <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Knowledge and power">Knowledge and power <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="SitCom">SitCom<button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Comedy">Comedy <button onClick={handleClick}>{status}</button></label>
                    <label id='tag' htmlFor="Latin Pop">Latin Pop <button onClick={handleClick}>{status}</button></label>
                  </div>
                  <label className="input">
                    <input type="text" placeholder='Search interests and seperate with a comma "," '/>
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