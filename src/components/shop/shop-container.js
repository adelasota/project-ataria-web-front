import React, { Component } from "react";
import axios from "axios";

import ShopItem from "./shop-item";


export default class ShopContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            isLoading: false,
            data: [] 
        };

        this.handleFilter = this.handleFilter.bind(this);
      
    }

    handleFilter(filter) {
        
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    

    }

    getShopItems() {
        axios
            .get("https://atari-proyecto-web-backend-8d0467247c80.herokuapp.com/products")
            .then(response => {
                
                this.setState({
                    data: response.data  
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    shopItems() {
        
        return this.state.data.map(item => {
            console.log("shop item", item);
            return(
                <ShopItem 
                key={item.id}
                item={item} 
                />
            );
        });
    }

    componentDidMount() {
        this.getShopItems();
    }

    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>;
        }

       

        return (
            <div className="shop-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("Ropa")}>Ropa</button>
                <button className="btn" onClick={() => this.handleFilter("Accesorios")}>Accesorios</button>  
                    
                {this.shopItems()}
            </div>
            
        );
    }
}