import React, { useState } from "react";
import "./styles.css";
import {MdArrowDropDown} from "react-icons/md";
//import image1 from "../newyork.jpeg";
export default function Tour({tour}){
    const {img,city,name,info} = tour
    const [detail,setDetail] = useState("");
    const showInfo = (e) => {
        e.preventDefault()
        setDetail(!detail)
    }
    return (
            <div className="card">
            <img className="city-img" src={img} alt="city"/>
            <span className="city">{city}</span>
            <h4 className="name">{name}</h4>
            <h5 className="info">Info
            <span className="show-info" onClick={showInfo}>
              <MdArrowDropDown/>
              </span>
              {detail && <p>{info}</p>}
            </h5>
          </div>
    
    )
}