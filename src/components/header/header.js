import React from "react"
import { Link } from "react-router-dom";

export default function() {
    return(
        <div>
            <Link to = "/">
            <div className="logo-wrapper">
                <img src="./assets/images/logo/logo-ataria-positivo.png" className="logo" alt="logo-ataria-positivo" />
            </div>
            </Link>
        </div>
    )
}