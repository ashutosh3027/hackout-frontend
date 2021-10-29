import React from "react";
import "../assets/styles/login.css";
import loginImg from "../assets/img/login-img.svg";

function Admin() {
  const styleBtn = ()=>{
      setTimeout(()=>{
      document.querySelector('#btn').classList.add('clickBtn')
      }, 0);
      setTimeout(()=>{
          document.querySelector('#btn').classList.remove('clickBtn')
      }, 200);
  }
  return (
    <>
      <div className="parent-box">
        <div className="admin-box">
          <div className="page-img box-item">
            <img src={loginImg} alt="" />
          </div>
          <div className="login-page box-item">
              <div className="login-header">
                  <div className="login-page-icon">

                  </div>
              </div>
              <p className="login-text">SIGN IN</p> <span className="Inner-text">Sign in to continue</span>
            <form action="" className="login-form">

              <div className="email  login-page-div">
                <input type="Text" name="username" id="" placeholder="Username"/>
              <i class="fa fa-user"></i>
              </div>
              <div className="pass login-page-div">
                <input type="password" name="Password" id="" placeholder="Password" />
                <i class="fa fa-lock"></i>
              </div>
              <button className="Login" onClick={styleBtn} id="btn">Log in</button>
            </form>
             <p className="login-footer">Don’t have an account?<a href="#/signUp">Sign up</a> </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
