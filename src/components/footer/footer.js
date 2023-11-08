import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
    return(
        <div className="footer-wrapper">
            <div className="social-media">
                <ul>
                    <li><a href="https://www.instagram.com/"><img src="./assets/images/redes-sociales/instagram.png" alt="" ></img></a></li>
                    <li><a href="https://m.facebook.com/"><img src="./assets/images/redes-sociales/facebook.png" alt="" ></img></a></li>
                    <li><a href="https://www.pinterest.es/"><img src="./assets/images/redes-sociales/pinterest.png" alt="" ></img></a></li>
                </ul>
            </div>
            <div className="footer-content">
                <div className="horario">
                    <h4>HORARIO</h4>
                    <ul>
                        <li>Lunes-Viernes</li>
                        <li>10:00 - 20:00</li>
                        <li>Sábados</li>
                        <li>10:00 - 17:00</li>
                    </ul>
                </div>

                <div className="legal">
                    <h4>INFORMACIÓN LEGAL</h4>
                    <ul>
                        <li><a href="">CONDICIONES DE COMPRA</a></li>
                        <li><a href="">PROPIEDAD INTELECTUAL</a></li>
                        <li><a href="">POLÍTICA DE PRIVACIDAD</a></li>
                        <li><a href="">ENCARGOS PERSONALIZADOS</a></li>
                    </ul>
                </div>

                <div className="contact-footer">
                    <h4>CONTACTO</h4>
                    <ul>
                        <li>C/ Itxasaldea, 315</li>
                        <li>KAIA - 48000</li>
                        <li><a href="">+34 940 00 00 00</a></li>
                        <li><a href="">contact@ataria.com</a></li>
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}