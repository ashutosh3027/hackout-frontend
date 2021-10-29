import React from "react";
import "../assets/styles/signup.css";
import SignUpImg from "../assets/img/SignUp.svg";

export default function SignUp() {
  const styleBtn = () => {
    setTimeout(() => {
      document.querySelector("#btn").classList.add("clickBtn");
    }, 0);
    setTimeout(() => {
      document.querySelector("#btn").classList.remove("clickBtn");
    }, 200);
  };
  return (
    <>
      <div className="parent-box1">
        <div className="admin-box">
          <div className="page-img box-item">
            <img src={SignUpImg} alt="" />
          </div>
          <div className="login-page box-item">
            <div className="login-header">
              <div className="login-page-icon"></div>
             <a href="#/login"  className="login-header-text">Log in</a> 
            </div>
            <p className="login-text">SIGN UP</p>{" "}
            <form action="" className="login-form">
              <div className="username  login-page-div">
                <input type="text" name="username" id="" placeholder="Username"/>
                <i class="fa fa-user"></i>
              </div>
              <div className="email  login-page-div">
                <input type="email" name="Email" id="" placeholder="Email" />
                <i class="fa fa-envelope-square"></i>
              </div>
              <div className="pass login-page-div">
                <input
                  type="password"
                  name="Password"
                  id=""
                  placeholder="Password"
                />
                <i class="fa fa-lock"></i>
              </div>
              <button className="Login" onClick={styleBtn} id="btn">
              Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
