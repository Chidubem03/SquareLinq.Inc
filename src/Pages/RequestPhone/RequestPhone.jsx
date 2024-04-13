import React from "react";
import "../RequestPhone/requestPhone.css";
import shineLogo from "../Images/shineLogo.png";
import { useCountries } from "use-react-countries";
import { RiArrowDownSLine } from "react-icons/ri";

const RequestPhone = () => {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <section className="reset-phone-container">
      <article className="reset-phone-hero">
        <div>
          <h1>
            Professional{" "}
            <img src={shineLogo} alt="shine logo" className="shine-logo" />{" "}
          </h1>
          <p>
            Join a community of like minded people where you can free air you
            opinions, discuss new trends and shared interests. Interact with
            your friends, family, colleagues and teammates as you you strengthen
            the bond between one another...
          </p>
        </div>
      </article>
      <article className="reset-phone-main">
        <main className="reset-phone-main-container">
          <div>
            <h2>Enter your phone number</h2>
            <p>
              Kindly enter your phone number to receive the verification code{" "}
            </p>
          </div>

          <div className="phone-input-container">
            <div className="country-flag">
              <img src={flags.svg} alt="" className="flag-img" />{" "}
              <RiArrowDownSLine />
              <article className="select-country">
                {countries.map((item, index) => {
                  const { name, flags, countryCallingCode } = item;

                  return (
                    <main
                      key={name}
                      className="select-main-article"
                      onClick={() => setCountry(index)}
                    >
                      <div>
                        <img src={flags.svg} alt={name} className="" />
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
                <span className="country-code">234</span>
              </aside>
              <span className="phone-number-1">
                <input
                  type="text"
                  placeholder="08132586888"
                  className="phone-input"
                />
              </span>
            </div>
          </div>
          <button className=" reset-phone-btn">Next</button>
        </main>
      </article>
    </section>
  );
};

export default RequestPhone;
