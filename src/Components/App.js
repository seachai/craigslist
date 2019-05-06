import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Listings from "./Listings";
import "../sass/style.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/:city/:category/" exact component={Listings} />
          <Route path="/:city/:category/:listings" exact component={Listings} />
          <Route path="/:city/:category/:listings/:item" exact component={Listings} />
        </div>
      </Router>
    );
  }
}

export default App;
