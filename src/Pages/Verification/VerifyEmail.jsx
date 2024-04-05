import "./VerifyEmail.css"
import VerifyImage from "../Images/verify_img.png"

const VerifyEmail = ()=>{

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
                  <section className="containerInnerRightInnerChild2"><p>kindly check your email sharon@gmail.com for the verification code</p></section>
                  <section className="containerInnerRightInnerChild3">
                       <input type="text" id="digit1" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                       <input type="text" id="digit2" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                       <input type="text" id="digit3" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                       <input type="text" id="digit4" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                       <input type="text" id="digit5" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                       <input type="text" id="digit6" class = "inputs" maxlength="1" oninput="focusNextInput(this)" />
                  </section>
                  <section className="containerInnerRightInnerChild4">
                    <span><p>Switch to <Link>sharon@gmail.com</Link> </p></span>
                    <span><p> Resend in 04s</p></span>
                  </section>

                  <section className="containerInnerRightInnerChild5"><button>Verify</button></section>
              </div>

            </div>
          </div>

        </div>
      </div>

    )

}

export default VerifyEmail;