import React, { Component } from "react" ;
import axios from "axios";

import ShopSidebarList from "../shop/shop-sidebar-list";
import ShopForm from "../shop/shop-form";

export default class EshopManager extends Component {
    constructor() {
        super();

        this.state = {
            shopItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(shopItem) {
        //TODO
        //update the shopItems state
        //and add the shopItem to the list
        //this.setState({
            shopItems: [shopItem].concat(this.state.shopItems)
        //});
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error);
    }

    getShopItems(){
        axios
            .get("https://atari-proyecto-web-backend-8d0467247c80.herokuapp.com/products")
            .then(response => {
                //console.log("response from get shop items", response);
                this.setState({
                    shopItems: [...response.data] 
                });
            })
            .catch(error => {
                console.log("error in getShopItems", error);
            });
    }

    componentDidMount() {
        this.getShopItems();
    }

    render() {
        return (
            <div className="shop-manager-wrapper">
                <div className="left-column">
                    <ShopForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <ShopSidebarList data={this.state.shopItems} />
                </div>
            </div>
            
        );
    }
}

