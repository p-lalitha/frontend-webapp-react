import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer bg-dark py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="border-bottom pb-3 text-white">
                <h5 style={{ fontSize: "1rem" }}>Top Visited Sites</h5>
              </div>
            </div>
          </div>
          <div className="row border-bottom pb-3">
            <div className="col-md-3 text-white">
              <h5 style={{ fontSize: "1rem" }}>Popular Outstation Routes</h5>
            </div>
            <div className="col-md-3">
              <h5 className="text-white" style={{ fontSize: "1rem" }}>
                Bangalore
              </h5>
              <div>
                <ul className="list-unstyled " style={{ fontSize: "1rem" }}>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Bangalore to Hyderabad Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Bangalore to Goa Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Bangalore to Chennai Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Bangalore to Mysore Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Bangalore to Warangal Long Haul Trucks</small>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="text-white" style={{ fontSize: "1rem" }}>
                Hyderabad
              </h5>
              <div>
                <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Hyderabad to Bangalore Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Hyderabad to Chennai Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Hyderabad to Vijayawada Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Hyderabad to Vizag Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Hyderabad to Karimnagar Line Haul Trucks</small>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="text-white" style={{ fontSize: "1rem" }}>
                Chennai
              </h5>
              <div>
                <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Chennai to Ahmedabad Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Chennai to Pune Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Chennai to Delhi Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Chennai to Bangalore Long Haul Trucks</small>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"} className="nounderline">
                      <small>Chennai to Indore Line Haul Trucks</small>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center pt-4 text-white-50">
              <p>
                Copyright © 2020 Logicarts. All Rights Reserved |
                <Link to={"/sitemap"} className="text-white-50 nounderline">
                  Sitemap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
