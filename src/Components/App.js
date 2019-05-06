import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Listings from "./Listings";
import Details from "./Details";
import "../sass/style.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city/:category/" component={Listings} />
          <Route exact path="/:city/:category/:listings" component={Listings} />
          <Route exact path="/:city/:category/:listings/:item" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
