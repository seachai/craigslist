import React, { Component } from "react";

class Listings extends Component {
  render() {
    const { match, location, history } = this.props
    return (
        <div className="listings">
          <div className="container">
            City: {match.params.city}
            Category: {match.params.category}
            Listings: {match.params.listings}
          </div>
        </div>
    );
  }
}

export default Listings;
