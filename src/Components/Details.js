import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="sub-menu">
              <div className="direction">
                <a href="#prev" className="prev">
                  Prev
                </a>
                <a href="#next" className="next">
                  Next
                </a>
              </div>
              <nav className="sub-links">
                <a href="#moreadsbyuser">More ads by this user</a>
                <a href="#print">Print</a>
                <a href="#share">Share</a>
                <a href="#contactseller">Contact Seller</a>
              </nav>
            </section>

            <section className="">
              <div className="media-column">
                <div className="gallery">
                  <div className="slider">
                    <div className="main-image">
                      <div className="left-arrow">{"<"}</div>
                      <div className="right-arrow">{">"}</div>
                    </div>
                  </div>
                  <div className="thumbnails">
                    <div className="thumb-img">Image</div>
                  </div>
                </div>
              </div>
              <div className="details-column">
                <div className="date">Posted: May 25th</div>
                <h3>Post Title</h3>
                <h4 className="price">$10,000</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>JAHASF154WA215</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>25,000</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ultrices quis lorem ut facilisis. Praesent vel commodo
                    ante, efficitur rhoncus dui. Morbi venenatis velit sapien,
                    vel finibus magna molestie et. Nulla erat mauris, elementum
                    ut tempor et, feugiat nec dui.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
