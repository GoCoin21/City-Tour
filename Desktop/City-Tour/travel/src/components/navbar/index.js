import React from "react";
import "./styles.css";
import logo from "../city-travel-.jpg";
export default function Navbar(){

    return (
        <nav className="navbar">
           <img src={logo} className="logo" alt="city logo"/>
           <ul className="nav-links">
             <li>
                 <a href="/" className="link">
                     Home
                 </a>
             </li>
             <li>
                 <a href="/" className="link">
                     About
                 </a>
             </li>
             <li>
                 <a href="/" className="link">
                     Tours
                 </a>
             </li>
           </ul>
        </nav>
    )
}