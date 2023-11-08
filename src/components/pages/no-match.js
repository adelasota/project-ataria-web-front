import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            <h2>No podemos encontrar esa página</h2>
            <Link to="/">Vuelve a la página principal</Link>
        </div>
    );
}