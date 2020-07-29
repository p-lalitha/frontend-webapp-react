import React, { Component } from "react";
import { Link } from "react-router-dom";
import bghome from "./bghome.PNG";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        <div
          className="custom-background d-flex align-items-center"
          style={{ backgroundImage: `url(${bghome})` }}
        >
          <div className="custom-content">
            <h1 className="aligncontent">
              Book Truck at Lowest Price Guaranteed
            </h1>
            <Link
              to={"/order"}
              className="btn  orange btn-round font-weight-bold"
            >
              BOOK NOW !!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
