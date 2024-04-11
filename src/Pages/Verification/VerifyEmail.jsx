import "./VerifyEmail.css"
import VerifyImage from "../Images/verify_img.png"
import { Link} from "react-router-dom/cjs/react-router-dom.min"
import React from 'react';

// This class is used to make sure the dom(defined in the "render() function") is loaded first before implementing the code in "componentDidMount()"
  class VerfyEmail extends React.Component {
    componentDidMount() {

      const inputs = document.querySelectorAll(".inputs");
      
      if (inputs.length){
        //initial index position of inputs to focus
        let i = 0;
        //////////////////////////////////////////////////////

          //focuses the cursor on the first input
          const firstInput = inputs[i];
          firstInput.focus();

          //iterating each input of all inputs.
          inputs.forEach((input)=>{
          
            input.addEventListener("keyup", (e)=>{
              i++;//incrementing i each time a value is inserted in an input

              if (i < inputs.length){
                inputs[i].focus();//focuses on an input based on the value of i at the moment

              }
              
            })

          })
      
      }
      
    }


    render(){
      
      return(

        <div className="container">
          <div className="containerInner">
            <div className="containerInnerLeft">
             <div className="containerInnerLeft_img" style={{backgroundImage:`url(${VerifyImage})`}}>
              <div className="containerInnerLeft_imgColor">
  
                <div className="containerInnerLeft_imgColorInner">
                    <section>
                      <h2>Professional</h2>
                    </section>
  
                    <section>
                      <p>Join a community of like minded people where you can free air you opinions, <br /> discuss new trends and shared interests. 
                         Interact with your friends, family, <br /> colleagues and teammates <br /> as you strengthen the bond between one another... 
                      </p>
                    </section>
  
                    <section className="slider-bar">
  
                    </section>
  
                </div>
  
              </div>
  
             </div>
  
            </div>
            <div className="containerInnerRight">
              <div className="containerInnerRightInner">
                <div className="containerInnerRightInnerChild">
                    <section className="containerInnerRightInnerChild1"><h2>Verification Code Sent!</h2></section>
                    <section className="containerInnerRightInnerChild2"><p>kindly check your email <Link>sharon@gmail.com</Link>  for the verification code</p></section>
                    <section className="containerInnerRightInnerChild3">
                         <input type="text" id="digit1"  class = "inputs" maxlength="1" />
                         <input type="text" id="digit2"  class = "inputs" maxlength="1" />
                         <input type="text" id="digit3"  class = "inputs" maxlength="1" />
                         <input type="text" id="digit4"  class = "inputs" maxlength="1" />
                         <input type="text" id="digit5"  class = "inputs" maxlength="1" />
                         <input type="text" id="digit6"  class = "inputs" maxlength="1" />
                       
                    </section>
                         
                    <section className="containerInnerRightInnerChild4">
                      <div><p>Switch to <Link>sharon@gmail.com</Link> </p></div>
                      <div><p> Resend in 04s</p></div>
                    </section>
  
                    <section className="containerInnerRightInnerChild5"><button>Verify</button></section>
                </div>
  
              </div>
            </div>
  
          </div>
           
          
        </div>
          
      )
    }
  

  }


export default VerfyEmail;

