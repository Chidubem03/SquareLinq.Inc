import "./VerifyEmail.css";
import VerifyImage from "../Images/verify_img.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

// This class is used to make sure the dom(defined in the "render() function") is loaded first before implementing the code in "componentDidMount()"
class VerfyEmail extends React.Component {
  componentDidMount() {
    /**Dom elements definition center...........................................................................*/
    const inputs = document.querySelectorAll(".inputs");
    const verifyBtn = document.querySelector(".containerInnerRightInnerChild5");
    ///////////////////////////////////////////////////////////////////////////

    /**Global varables declaration center .............*/
    let allInputValues = "";
    ////////////////////////////////////////////////

    if (inputs.length) {
      //initial index position of inputs to focus
      let i = 0;
      //////////////////////////////////////////////////////

      //focuses the cursor on the first input
      const firstInput = inputs[i];
      firstInput.focus();

      //iterating each input of all inputs.
      inputs.forEach((input) => {
        input.addEventListener("keyup", (e) => {
          const regexNum = /[0-9]$/;
          const aNumber = regexNum.test(input.value);

          /**This condition deprecates any non numerical value from being inserted and increment the value of i if false*/
          if (!aNumber) {
            input.value = "";
          } else {
            i++; //incrementing i each time a value is inserted in an input
          }
          ///////////////////////////////////////////////////////////////////////

          //when the result of this condition is true, all value in the inputs are cleared
          if (e.key === "Backspace") {
            i = 0;
            inputs.forEach((input) => {
              input.value = "";
              allInputValues = "";
              input.classList.remove("errorCode");
            });
          }
          ///////////////////////////////////////////////////////////////////////////////

          if (i < inputs.length) {
            inputs[i].focus(); //Focuses on the next input after an input is inserted
          }
        });
      });
    }

    /**This action takes place when the verify button is clicked */
    verifyBtn.addEventListener("click", () => {
      inputs.forEach((input) => {
        allInputValues += input.value;
      });

      const verficationCodeSent = "123456"; //This is just a testing reference. A real verification code will be used on this variable soon...
      if (!(allInputValues === verficationCodeSent)) {
        inputs.forEach((input) => {
          input.classList.add("errorCode");
        });
        inputs[5].focus(); //focus the cursor on the last button

        //alert('invalid verfication code')
      } else {
        //Navigate to next page
      }

      allInputValues = "";
    });
  }

  render() {
    var emailAddresss = localStorage.getItem("email-address");
    const emailToverify = emailAddresss || "";

    var phoneNumber = localStorage.getItem("phone-no");
    const phoneToverify = phoneNumber || "";

    const rightContent =() =>{
      if(document.referrer === 'https://localhost:3000/verification'){
        return emailToverify;
      }
      else if(document.referrer ==='https://localhost:3000/request-phone'){
        return phoneToverify
      }
    }
     const emailContent = document.getElementById('emailContent');
     if(emailContent){
       emailContent.innerHTML = emailAddresss;
     }
    // const handleClick = () =>{
    //   console.log(document.referrer)
    // }
    return (
      <div className="container">
        <div className="containerInner">
          <div className="containerInnerLeft">
            <div
              className="containerInnerLeft_img"
              style={{ backgroundImage: `url(${VerifyImage})` }}
            >
              <div className="containerInnerLeft_imgColor">
                <div className="containerInnerLeft_imgColorInner">
                  <section>
                    <h2>Professional</h2>
                  </section>
                  <br />
                  <br />
                  <section>
                    <p>
                      Join a community of like minded people where you can free
                      air you opinions, discuss new trends and shared
                      interests. Interact with your friends, family,
                      colleagues and teammates as you strengthen the bond
                      between one another...
                    </p>
                  </section>

                  <section className="slider-bar"></section>
                </div>
              </div>
            </div>
          </div>
          <div className="containerInnerRight">
            <div className="containerInnerRightInner">
              <div className="containerInnerRightInnerChild">
                <section className="containerInnerRightInnerChild1">
                  <h2>Verification Code Sent!</h2>
                </section>
                <section className="containerInnerRightInnerChild2">
                  <p>
                    kindly check your email{" "}
                    <Link>
                      <span id="emailContent">{rightContent}</span>
                    </Link>{" "}
                    for the verification code
                  </p>
                </section>
                <section className="containerInnerRightInnerChild3">
                  <input type="text" id="digit1" class="inputs" maxlength="1" />
                  <input type="text" id="digit2" class="inputs" maxlength="1" />
                  <input type="text" id="digit3" class="inputs" maxlength="1" />
                  <input type="text" id="digit4" class="inputs" maxlength="1" />
                  <input type="text" id="digit5" class="inputs" maxlength="1" />
                  <input type="text" id="digit6" class="inputs" maxlength="1" />
                </section>

                <section className="containerInnerRightInnerChild4">
                  <div>
                    <p>
                      Switch to{" "}
                      <Link>
                        <span id="emailContent">{rightContent}</span>
                      </Link>{" "}
                    </p>
                  </div>
                  <div>
                    <p> Resend in 04s</p>
                  </div>
                </section>

                <section className="containerInnerRightInnerChild5">
                 <button /*onClick={handleClick}*/>Verify</button> 
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerfyEmail;
