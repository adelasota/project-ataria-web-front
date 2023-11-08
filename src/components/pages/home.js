import React from "react";
import { Link } from "react-router-dom";

import CarouselHome from "../carousel/carousel-home"

export default function() {
    return (
    <div>
        <CarouselHome />
        <div className="home-wrapper">
            <div>
                <p>"Del <span>salitre</span> en la piel, de las <span>emociones</span> con espuma, del <span>esfuerzo</span> aunque el cielo estaba nublado, de la brisa con <span>aroma</span> a Salitre. <span>Diseño</span> y <span>Artesanía</span> Local . <span>Ropa</span> y <span>Accesorios</span> con Salitre"</p>
            </div>
            <div className="portada-img">
                <Link to = "/e-shop"><img src="./assets/images/portada/banner1-portada.jpg" alt=""></img></Link>
                <Link to = "/e-shop"><img src="./assets/images/portada/banner2-portada.jpg" alt=""></img></Link>
            </div>
            
        </div>
        
    </div>
    )
}