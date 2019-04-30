import React, { Component } from "react";

class Home extends Component {
  loopCategories = () => {
    let testArray = [1, 2, 3, 4, 5, 6, 7];
    return testArray.map(item => {
      return (
        <div className="categories" key={item}>
          <div className="title">Community</div>
          <div className="group-links">
            <a href="#home" className="link">
              Community
            </a>
            <a href="#home" className="link">
              Groups
            </a>
            <a href="#home" className="link">
              General
            </a>
            <a href="#home" className="link">
              Artists
            </a>
            <a href="#home" className="link">
              Activities
            </a>
            <a href="#home" className="link">
              Child Care
            </a>
            <a href="#home" className="link">
              Local News
            </a>
            <a href="#home" className="link">
              Lost & Found
            </a>
            <a href="#home" className="link">
              Classes
            </a>
            <a href="#home" className="link">
              Musician
            </a>
            <a href="#home" className="link">
              Events
            </a>
            <a href="#home" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  };

  loopTags = () => {
    let testTags = [1, 2, 3, 4, 5, 6, 7];
    return testTags.map((item, i) => (
      <div key={i} className="tag">
        Apple Macbook
      </div>
    ));
  };

  render() {
    return (
      <div className="home">
        <h1>
          Connect People <br />
          Everywhere 😄
        </h1>
        <section className={"links"}>{this.loopCategories()}</section>
        <section className={"trending"}>
          <input type="text" name="search" className="search" />
          <div className="title">
            <i className="far fa-clock" />
            Trending Now
          </div>
          <div className="trending-tags">{this.loopTags()}</div>
        </section>
      </div>
    );
  }
}

export default Home;
