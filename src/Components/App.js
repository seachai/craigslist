import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/sf/community/artists" component={Listings} />
        </div>
      </Router>
    );
  }
}

export default App;
