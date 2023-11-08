import React from "react";

export default function(props) {
        // Data that we'll need:
        // - prod_image
        // - prod_name
        // - prod_description
        // - prod_price
        // - id

    const { id, prod_name, prod_description, prod_price, prod_image } = props.item;
    return(
        <div className="shop-item-wrapper">
            
            <img src={prod_image} />
            <div className="prod-name">{prod_name}</div>
            <div className="prod-description">{prod_description}</div>
            <div className="prod-price">{prod_price} EUR</div> 
            
            
        </div>
    );
}