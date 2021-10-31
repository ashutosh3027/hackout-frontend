import React from "react";
import "../assets/styles/homepage.css";
import shoppingImg from "../assets/img/shopping-img.svg";
function Home() {
  return (
    <>
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="container">
        <div className="home container-box">
          <img src={shoppingImg} alt="" />
          <div className="intro">
            <span className="style-text">
              Hey👋!!! <br /> Are you missing out a great deal just because you
              don’t have a right credit or a debit card???
            </span>
            <br /> Just Relax….. <br /> Here is a solution - REBATE <br /> Rebate is a
            place where you can get additional discounts on your purchase👛💸
            with secure payments... <br />
            Interesting right !!!!!
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
