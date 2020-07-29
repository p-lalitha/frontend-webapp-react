import React, { Component } from "react";
import { Link } from "react-router-dom";
import bghome from "./bghome.PNG";
import "./home.css";
import banglore from "./Bangalore2.png";
import hyderabad from "./Charminar.png";
import coimbatore from "./Coimbatore.png";
import vijayawada from "./Vijayawada2.png";
import warangal from "./warangal2.png";
import chennai from "./Chennai2.png";
import vijag from "./vizag2.png";
import supporticon from "./customer-support-icon.PNG";
import toprated from "./top-rated-driver-partners.PNG";
import yoursafety from "./your-safety-first.PNG";

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
        <div className="py-30 mt-3">
          <div className="container ">
            <div
              className="row"
              style={{ marginTop: "30px", borderBottom: "0.5px solid #999999" }}
            >
              <div className="col-12">
                <h2
                  style={{ fontSize: "20px", marginBottom: "30px" }}
                  className="text-uppercase font-weight-bold"
                >
                  CITIES WE Serve
                </h2>
              </div>
              <div className="col-12 mb-30 justify-content-center">
                <div className="row">
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={banglore} alt="Bengaluru" />
                      <h3>Bengaluru</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={hyderabad} alt="Hyderabad" />
                      <h3>Hyderabad</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={chennai} alt="Chennai" />
                      <h3>Chennai</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={warangal} alt="Warangal" />
                      <h3>Warangal</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={vijag} alt="Vishakapatnam" />
                      <h3>Vishakapatnam</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={vijayawada} alt="Vijayawada" />
                      <h3>Vijayawada</h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center flex-column width50">
                    <div className="city">
                      <img src={coimbatore} alt="Coimbatore" />
                      <h3>Coimbatore</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4" style={{ maxWidth: "100%" }}>
              <div className="inner-block">
                <span
                  className="custom-span"
                  style={{ backgroundImage: `url(${supporticon})` }}
                ></span>
                <h4 className="font-weight-bold">24/7 Customer Support</h4>
                <p>
                  A dedicated 24×7 customer support team always at your service
                  to help solve any problem
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ maxWidth: "100%" }}>
              <div className="inner-block">
                <span
                  className="custom-span"
                  style={{ backgroundImage: `url(${yoursafety})` }}
                ></span>
                <h4 className="font-weight-bold">Your Safety First</h4>
                <p>
                  Keep your load ones informed about your travel routes or call
                  emergency services when in need
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ maxWidth: "100%" }}>
              <div className="inner-block">
                <span
                  className="custom-span"
                  style={{ backgroundImage: `url(${toprated})` }}
                ></span>
                <h4 className="font-weight-bold">2Top Rated Driver-Partners</h4>
                <p>
                  All our driver-partner are background verified and trained to
                  deliver only the best experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
