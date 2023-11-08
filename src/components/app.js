import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";




import Header from "./header/header";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import eShop from "./pages/e-shop";
import eShopManager from "./pages/e-shop-manager";
import Footer from "./footer/footer";
import NoMatch from "./pages/no-match";

library.add(faLocationDot );

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div><h1></h1></div>

        <Router>
          <div>
            <Header />
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-esm" component={eShopManager} />
              <Route path="/about-us" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/e-shop" component={eShop} />
              <Route component={NoMatch} />
            </Switch>

            <Footer />

          </div>
        </Router>
        
      </div>
    );
  }
}
