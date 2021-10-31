import React from 'react'
import '../assets/styles/navbar.css'
import logo from '../assets/img/logo1.svg'
import { useState } from 'react'
import { useEffect } from 'react';
export default function Navbar() {
     const [token, setToken] = useState('');
     
     useEffect(() => {
         setToken(localStorage.getItem(`token`));
     })
     const logout = ()=>{
        localStorage.removeItem(`token`);
        setToken(localStorage.getItem(`token`));
     }

    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={logo} alt="" /><h1>Rebate</h1></div>
                <ul>
                    <li className="nav_items"><a href="#/"> Home</a></li>
                    {!(token)&&<li className="nav_items"><a href="#/login"> Log in</a></li>}
                    {!(token)&&<li className="nav_items"><a href="#/signup">Sign up</a> </li>}
                    {token&&<li className="nav_items"><a href={`#/${token}/dashboard`}>Dashboard</a> </li>}
                    {token&&<li className="nav_items"><a href="#/" onClick={logout}>Log out</a> </li>}
                    
                </ul>
            </div>
        </>
    )
}
