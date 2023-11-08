import React, { Component } from "react";
import axios from "axios";

export default class ShopForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prod_name: "",
            prod_description: "",
            prod_price: "",
            prod_image: "",
            thumbnail_image: "",
            category: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        
        fetch("https://atari-proyecto-web-backend-8d0467247c80.herokuapp.com/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                prod_name: this.state.prod_name,
                prod_description: this.state.prod_description,
                prod_price: this.state.prod_price,
                category: this.state.category,
                prod_image: this.state.prod_image,
                thumbnail_image: this.state.thumbnail_image

            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Data added and reset", data)
            this.setState({
                prod_name: "",
                prod_description: "",
                prod_price: "",
                category: "",
                prod_image: "",
                thumbnail_image: ""

            })
        })
        .catch(error => {console.log("error adding product", error)})

       /* axios
            .post(
            "https://atari-proyecto-web-backend-8d0467247c80.herokuapp.com/product",
            this.buildForm(), 
            )
            .then(response => {
                //this.props.handleSuccessfulFormSubmission(response.data.shop_item);
                console.log("response", response);
               
            })
            .catch(error => {
               console.log("shop form handleSubmit error", error);
            });*/
        
        console.log("event", event);
        event.preventDefault();
    } 

    render() {
        return (
            

                <form onSubmit={this.handleSubmit} className="shop-form-wrapper">
                    <div>
                        <input
                            type="text"
                            name="prod_name"
                            placeholder="Product Item Name"
                            value={this.state.prod_name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>

                        <input
                            type="text"
                            name="prod_price"
                            placeholder="Product Item Price"
                            value={this.state.prod_price}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                        
                    </div>

                    <div className="one-column">
                        
                        <textarea 
                            type="text"
                            name="prod_description"
                            placeholder="Description"
                            value={this.state.prod_description}
                            onChange={this.handleChange}
                            //rows={5}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="prod_image"
                            placeholder="Image URL"
                            value={this.state.prod_image}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="thumbnail_image"
                            placeholder="Thumbnail URL"
                            value={this.state.thumbnail_image}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>



                </form>
                
            
        )
    }
}