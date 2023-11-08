import React from "react";

const ShopSidebarList = (props) => {
    const shopList = props.data.map(shopItem => {
        return(
            <div key={shopItem.id} className="shop-item-thumb">
                <div className="shop-thumb-img">
                    <img src={shopItem.thumbnail_image} />
                </div>
                <h1 className="name-prod">{shopItem.prod_name}</h1>
                <h2>{shopItem.id}</h2>
            </div>
        );
    });

    return <div className="shop-sidebar-list-wrapper">{shopList}</div>;
};

export default ShopSidebarList;



