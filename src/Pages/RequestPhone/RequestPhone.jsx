import React from "react";
import "../RequestPhone/requestPhone.css";
import shineLogo from "../Images/shineLogo.png";
import { useCountries } from "use-react-countries";
import { RiArrowDownSLine } from "react-icons/ri";

const RequestPhone = () => {
  //for state management
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const [isShowCountries, setIsShowCountries] = React.useState(false);
  const [phoneNo, setPhoneNo] = React.useState("");
  const { name, flags, countryCallingCode } = countries[country];

  //handling section if any of the country listed is clicked
  const handleSeclection = (index) => {
    //setting the selected country
    setCountry(index);
    //hiding the select country container
    setIsShowCountries(false);
  };


  //handling the next button
const handleNext=()=>{

  //concating the country code and the inputed phoneno
  const requestedPhoneNo = countryCallingCode.concat(phoneNo);

console.log(requestedPhoneNo)



}

  return (
    <section className="reset-phone-container">
      {/**Hero container for the  bacgroung image */}
      <article className="reset-phone-hero">
        <div className="reset-phone-overlay">
          <div>
            <h1>
              Professional{" "}
              <img src={shineLogo} alt="shine logo" className="shine-logo" />{" "}
            </h1>
            <p>
              Join a community of like minded people where you can free air you
              opinions, discuss new trends and shared interests. Interact with
              your friends, family, colleagues and teammates as you you
              strengthen the bond between one another...
            </p>
          </div>
        </div>
      </article>
      {/**container for the phone request */}
      <article className="reset-phone-main">
        <main className="reset-phone-main-container">
          <div>
            <h2>Enter your phone number</h2>
            <p>
              Kindly enter your phone number to receive the verification code{" "}
            </p>
          </div>

          <div className="phone-input-container">
            <div
              className="country-flag"
           
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
                      onClick={() => handleSeclection(index)}
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
            <div className="county-phone-number-section">
              <aside>
                <span className="country-code">{countryCallingCode}</span>
              </aside>
              {/**phone number input */}
              <span className="phone-number-1">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="phone-input"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </span>
            </div>
          </div>
          {/**next button */}
          <button className=" reset-phone-btn" onClick={handleNext}>
            Next
          </button>
        </main>
      </article>
    </section>
  );
};

export default RequestPhone;
