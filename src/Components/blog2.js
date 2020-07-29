import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bgblog1 from "./blog-bg1.PNG";
import Bgblog3 from "./blog-bg3.PNG";
import "./subblogs.css";

class Firstblog extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <span className="mb-3" style={{ marginLeft: "10%" }}>
          <Link to={"/"} className="custom-hover">
            <p style={{ color: "black", display: "inline", fontSize: "14px" }}>
              HOME
              <span
                className="fa fa-angle-right"
                style={{
                  fontSize: "18px",
                  paddingLeft: "1px",
                  textDecoration: "none",
                }}
              >
                {" "}
              </span>
            </p>
          </Link>
          <Link to={"/blogs"} className="custom-hover">
            <p style={{ color: "black", display: "inline", fontSize: "14px" }}>
              BLOG
              <span
                className="fa fa-angle-right"
                style={{
                  fontSize: "18px",
                  paddingLeft: "1px",
                  textDecoration: "none",
                }}
              >
                {" "}
              </span>
            </p>
          </Link>
          <p
            style={{ paddingLeft: "2px", display: "inline", fontSize: "14px" }}
          >
            BLOG SINGLE
            <span
              className="fa fa-angle-right"
              style={{
                fontSize: "18px",
                paddingLeft: "1px",
                textDecoration: "none",
              }}
            >
              {" "}
            </span>
          </p>
        </span>
        <h1
          className="mb-5"
          style={{
            fontSize: "40px",
            fontFamily: "sans-serif",
            marginLeft: "10%",
          }}
        >
          Read Our Blog
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>
                Logicarts, is an excellent current events and news source for
                global supply chain and logistics. It is also a force to be
                reckoned with when it comes to discussions on fascinating
                innovation and technology in logistics. Logicarts has great
                information and insights on so much more than logistics and the
                supply chain, exploring topics in transportation, warehousing,
                technology and retail.
              </p>
              <p>
                Logicarts offers On-Demand, Scheduled Route Work, Distribution
                and Warehousing, Same Day and Next Day deliery, and many
                additional services to meet our the specific transportation
                needs of our customers.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Recent Blog</h3>
              <div className="w-100 mb-4 d-flex block-21">
                <Link
                  style={{ width: "30%" }}
                  to={"/use-logicarts-for-your-business-2"}
                  className="nav-link"
                >
                  <img className="w-100" src={Bgblog1} alt="Blog 1 image" />
                </Link>
                <div className="text">
                  <h3>
                    <Link
                      className="hover-blue"
                      style={{ color: "black", fontSize: "16px" }}
                      to={"/use-logicarts-for-your-business-2"}
                    >
                      Last Mile Delivery Logistics
                    </Link>
                  </h3>
                  <div>
                    <Link
                      className="hover-blue"
                      style={{ color: "#404040", fontSize: "16px" }}
                      to={"/why-lead-generation-is-key-for-business-growth"}
                    >
                      <p>
                        <span className="fa fa-calendar"></span>March. 31, 2020
                        &nbsp;
                      </p>
                      <p>
                        <span className="fa fa-user"></span>
                        <span>Logicarts </span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-100 mb-4 d-flex block-21">
                <Link
                  style={{ width: "30%" }}
                  to={"/use-logicarts-for-your-business"}
                  className="nav-link"
                >
                  <img className="w-100" src={Bgblog3} alt="Blog 3 image" />
                </Link>
                <div className="text">
                  <h3>
                    <Link
                      className="hover-blue"
                      style={{ color: "black", fontSize: "16px" }}
                      to={"/use-logicarts-for-your-business"}
                    >
                      “Logicarts” One stop solution for logistics
                    </Link>
                  </h3>
                  <div>
                    <Link
                      className="hover-blue"
                      style={{ color: "#404040", fontSize: "16px" }}
                      to={"/why-lead-generation-is-key-for-business-growth"}
                    >
                      <p>
                        <span className="fa fa-calendar"></span>March. 31, 2020
                        &nbsp;
                      </p>
                      <p>
                        <span className="fa fa-user"></span>
                        <span>Logicarts </span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Firstblog;
