import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className={"left-menu"}>
          <a href="/" className={"logo"}>Craigslist</a>
          <div className={"city"}>
            San Francisco
            <i className={`fas fa-chevron-down`} />
          </div>
        </div>

        <div className={"right-menu"}>
          <div className={"user-img"}><i className="fas fa-user-circle"></i></div>
          <div className={"user-dropdown"}>
            My Account
            <i className={`fas fa-chevron-down`} />
          </div>
          <div className={"post-btn"}>Post to Classifieds</div>
        </div>
      </header>
    );
  }
}

export default Header;
