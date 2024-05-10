import React from "react";
import squareLinq from '../Images/squarelink-logo.png';
import slider from '../Images/auth-pagination-slider3.png';
import "./requestPhone.css";
import { useCountries } from "use-react-countries";
import { RiArrowDownSLine } from "react-icons/ri";
const RequestPhone = () => {
  //for state management
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const [isShowCountries, setIsShowCountries] = React.useState(false);
  const [phoneNo, setPhoneNo] = React.useState(" ");
  const { /*name*/ flags, countryCallingCode } = countries[country];

  //handling section if any of the country listed is clicked
  const handleSelection = (index) => {
    //setting the selected country
    setCountry(index);
    //hiding the select country container
    setIsShowCountries(false);
  };
  // const phoneValue = document.querySelector('.phone-input');
  //handling the next button
  const handleNext = (e) => {
    e.preventDefault();
    if (document.getElementById('phone-input').value.length > 9 && document.getElementById('phone-input').value.length < 11){
    document.getElementById('county-phone-number-section').className = "confirm"
    window.location.pathname = "/verifyemail";
    }
    else{
      document.getElementById('county-phone-number-section').className = "error";
      alert('Provide a valid number');
    }
    //concating the country code and the inputed phoneno
    const requestedPhoneNo = countryCallingCode.concat(phoneNo);
    localStorage.setItem('phone-no', requestedPhoneNo);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    // removing any letter and character and replacing it with " "
    const numInput = input.replace(/\D/g, "");

    // slice the input if it exceeds 10 characters
    const slicedInput = numInput.slice(0, 10);
    setPhoneNo(slicedInput);
  };

  return (
    <section className="request-phone-container">
      {/**Hero container for the  background image */}
      <article className="request-phone-hero">
        <div className="request-phone-overlay">
          <div className="hero-title">
            <h1>
              Professional
            </h1>
            <br/>
            <p className="paragraph-info">
              Join a community of like minded people where you can free air you
              opinions, discuss new trends and shared interests. Interact with
              your friends, family, colleagues and teammates as you you
              strengthen the bond between one another...
            </p>
          </div>
          <img src={slider} className="auth-slide" alt="" />
        </div>
      </article>
      {/**container for the phone request */}
      <article className="request-phone-main">
      <div className="logoCon">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
        <main className="request-phone-main-container">
          <div>
            <h1 id="request-phone-h1">Enter your phone number</h1>
            <p id="instruction">
              Kindly enter your phone number to receive the verification code
            </p>
          </div>

          <div className="phone-input-container">
            <div
              className="country-flag"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                //showing and hiding of the select country container
                setIsShowCountries(!isShowCountries);
              }}
            >
              <img src={flags.svg} alt="" className="flag-img" />{" "}
              <RiArrowDownSLine />
              {/**select country container */}
              <article
                className={`${
                  isShowCountries
                    ? "select-country show-countries"
                    : "select-country"
                }`}
              >
                {countries.map((item, index) => {
                  const { name, flags, countryCallingCode } = item;

                  return (
                    <main
                      key={name}
                      className="select-main-article"
                      onClick={() => handleSelection(index)}
                    >
                      <div className="selet-flag-country-1">
                        <img
                          src={flags.svg}
                          alt={name}
                          className="select-flag-img"
                        />
                        <span>{name}</span>{" "}
                      </div>
                      <span className="">{countryCallingCode}</span>
                    </main>
                  );
                })}
              </article>
            </div>{" "}
            <div className="county-phone-number-section" id="county-phone-number-section">
              <aside>
                <span className="country-code">{countryCallingCode}</span>
              </aside>
              {/**phone number input */}
              <span className="phone-number-1">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="phone-input"
                  id="phone-input"
                  value={phoneNo}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoFocus={true}
                />
              </span>
            </div>
          </div>
          {/**next button */}
          <button
            className="btn"
            style={{ cursor: "pointer" }}
            onClick={handleNext}
          >
            Next
          </button>
        </main>
      </article>
    </section>
  );
};

export default RequestPhone;
