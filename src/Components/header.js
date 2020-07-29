import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar p-2 navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid row">
          <div className="col-3">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="Logo" alt="Logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul
              className="navbar-nav ml-auto"
              style={{
                height: "100%",
                fontWeight: 500,
                fontSize: "20px",
                float: "right",
              }}
            >
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <strong> HOME</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/order"} className="nav-link">
                  <strong>ORDER</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/team"} className="nav-link">
                  <strong>TEAM</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/blogs"} className="nav-link">
                  <strong>BLOGS</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  <strong>ABOUT US</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  <strong>CONTACT</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

// <div
//  class="col-12"
//  style={{
//    flexDirection: "column",
//    position: "relative",
//  }}
// >

// <strong class="fa fa-mobile-phone" style={{ fontSize: "24px" }}>
//    96061 00542
//  </strong>
//</div>
//<div
//class="col-12"
//style={{ flexDirection: "column", position: "relative" }}
//>
