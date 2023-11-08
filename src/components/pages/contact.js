import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return ( 
    <div className="contact-wrapper">
        <p>¡Mucho mejor si vienes a vernos!</p>
        <div className="puerta">
            <img src="./assets/images/contact/contact-1.png" alt="" ></img>
        </div>
        <div className="location">
        <a href=""><FontAwesomeIcon icon="fa-solid fa-location-dot" /></a>
        </div>

        <ul className="contact-adress">
            <li>C/ Itxasalde, 315</li>
            <li>KAIA</li>
            <li><a href="">+34 940 00 00 00</a></li>
            <li>
                <a href=" ">contact@ataria.com</a>
            </li>
        </ul>

    </div>
    )
}