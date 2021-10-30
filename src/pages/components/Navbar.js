import React from 'react'
import '../assets/styles/navbar.css'
export default function Navbar() {
   
    return (
        <>
            <div className="navbar">
                <div className="logo"><h1 id="logo" >Hackout</h1></div>
                <ul>
                    <li className="nav_items"><a href="#/"> Home</a></li>
                    <li className="nav_items"><a href="#/login"> Log in</a></li>
                    <li className="nav_items"><a href="#/signup">Sign up</a> </li>
                </ul>
            </div>
        </>
    )
}
