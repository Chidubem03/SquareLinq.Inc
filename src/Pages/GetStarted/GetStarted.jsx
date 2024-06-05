import React from "react";
import slider from "../Images/auth-pagination-slider.png";
import squareLinq from '../Images/squarelink-logo.png';
import "./getStarted.css";
import { IoIosClose, IoIosCheckmark } from "react-icons/io";

const GetStarted = () => {
  const handleNext = () =>{
    window.location.pathname = '/yourinterest';
  }
  const suggestion = [
    {
      id: 0,
      img: "https://img.freepik.com/free-photo/positive-carefree-woman-with-curly-hair-dressed-hoodie-smiles-happily-makes-peace-gesture-takes-selfie-urban-place-being-good-mood-after-sport-training-people-emotions-sporty-lifestyle_273609-59906.jpg?size=626&ext=jpg&ga=GA1.1.1633137608.1702649795&semt=sph",
      name: "John Doe",
    },
    {
      id: 1,
      img: "https://shotkit.com/wp-content/uploads/bb-plugin/cache/selfie-poses-landscape-52ad92635f1133a439ce85fd13a5bbd8-zybravgx2q47.jpg",
      name: "Esther  Ben",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9C9664zPg5QP8jtHqYXJiizBdxd8LMTJbBwoEw3kVZSkmKDnkbUhawO2pP1KFknh99Q&usqp=CAU",
      name: " Emmanuel Johsua",
    },
    {
      id: 3,
      img: "https://shotkit.com/wp-content/uploads/bb-plugin/cache/selfie-poses-landscape-52ad92635f1133a439ce85fd13a5bbd8-zybravgx2q47.jpg",
      name: "Esther  Ben",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9C9664zPg5QP8jtHqYXJiizBdxd8LMTJbBwoEw3kVZSkmKDnkbUhawO2pP1KFknh99Q&usqp=CAU",
      name: " Emmanuel Johsua",
    },
    {
      id: 5,
      img: "https://shotkit.com/wp-content/uploads/bb-plugin/cache/selfie-poses-landscape-52ad92635f1133a439ce85fd13a5bbd8-zybravgx2q47.jpg",
      name: "Esther  Ben",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9C9664zPg5QP8jtHqYXJiizBdxd8LMTJbBwoEw3kVZSkmKDnkbUhawO2pP1KFknh99Q&usqp=CAU",
      name: " Emmanuel Johsua",
    },
  ];

  return (
    <div className="getstarted-container">
      <div className="con interactive-sec">
        <div className="getstarted-left-container">
          <h1>
            Interactive
          </h1>
          <br />
          <p className="paragraph-info">
            Join a community of like minded people where you can free air you
            opinions, discuss new trends and shared interests. Interact with
            your friends, family, colleagues and teammates as you you strengthen
            the bond between one another...
          </p>
          <img src={slider} className="sign-up-slider" alt="slider" />
        </div>
      </div>
      <section className="getstarted-section">
              <div className="logoCon">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
        <article className="getstarted-article">
          {/* gs is short for get started */}
          <h1 className="gs-h1">Start a convo now!</h1>
          <p className="text-contents">
            Import contacts and select friends to start your first conversation
            with{" "}
          </p>
          <div className="import-div">
            <p className="text-contents">Import my contacts</p>
            <div className="toggle">
              <span className="close-x">
                <IoIosClose />
              </span>
              <span className="ok-x">
                <IoIosCheckmark className="check-icon" />
              </span>
            </div>
          </div>
          <main className="suggested-div">
            <h3>Suggested friends</h3>

            {suggestion.map((person) => {
              const { id, img, name } = person;

              return (
                <article className="suggested-article " key={id}>
                  <div className="suggested-persion">
                    <img src={img} alt="" className="suggested-img" />
                    <p className="suggested-name">{name}</p>
                  </div>

                  <div className="check-div">
                    <IoIosCheckmark className="check-icon" />
                  </div>
                </article>
              );
            })}
          </main>
          <div className="skip-div">
            <p className="skip1">Skip</p>
          </div>
          <div className="suggested-btn-div">
            <button className="btn" onClick={handleNext}>Next</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default GetStarted;
