import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bgblog2 from "./blog-bg2.PNG";
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
              <h2 className="mb-3 mt-5">Last Mile Delivery Logistics</h2>
              <p>
                <strong>Indian Logistics Sector </strong>
                <br />
                Shining Bright
              </p>
              <p>
                The Indian logistics sector is on a big growth tide. According
                to ICRA , Indian logistics sector is expected to grow at a rate
                8-10% over the medium term. According to the Global ranking of
                the World Bank’s 2018 Indian jumped to 44th rank in 2018 from
                54th rank in 2014.
              </p>
              <h4>What is last mile delivery?</h4>
              <p>
                As the name suggests, last mile delivery is the last leg of the
                delivery process which takes place from the distribution center
                to user’s doorsteps. The last mile delivery can range from just
                a few blocks to 50 to 100 miles. The prime objective of the last
                mile delivery is to deliver the package to the customers as
                quickly as possible , if possible same day delivery.
              </p>
              <h4>Growth of Last mile delivery over the period:</h4>
              <h5>Same day delivery</h5>
              <p>
                * Earlier, a waiting period of 5-7 days was considered normal,
                however time has changed same-day delivery and have redefined
                the customer experience and convenience.
              </p>
              <h5>Real-time Delivery Tracking</h5>
              <p>
                * The customer along with the store manager can track the
                en-route delivery of the shipment until it reaches the customer.
                With this feature, the store manager can actually control the
                last mile deliveries.
              </p>
              <h5>Dynamic delivery route planning</h5>
              <p>
                * With the assistance of last mile logistics software, the
                companies can easily re-route their workforce as soon as they
                receive the update. This will avoid all the delays or downtimes
                caused by last moment changes in the schedule.
              </p>
              <h4>LOGICARTS ,</h4>
              <p>
                one of the booming company was established on May 2019 , It
                evoked off as a rostrum to abode disorganized in the last mile
                logistics sector and mainly aims at Connecting Sellers to
                Consumers ONTIME at Affordable price. We offers extensive
                portfolio of services such as Warehouses, First mile , Mid mile
                and Last mile services which are enactment by Timeline, Tech
                enabled , Flexibility , Safety and Reliability.
              </p>
              <h4 style={{ textAlign: "center" }}>
                “Logicarts business purpose is to create customer”
              </h4>
              <p>
                Logicarts , just in a span of 3 months its started delivering
                5000 Shipments directly and 25000 Shipments through our FML ,
                MML channels every day. Customers are god to us , we promise to
                deliver one time with reliable pricing and realtime tracking
                enabled.
              </p>
              <h4 className="pb-4" style={{ textAlign: "center" }}>
                “So next time you think of logistics contact Logicarts”
              </h4>
            </div>
            <div className="col-md-4">
              <h3>Recent Blog</h3>
              <div className="w-100 mb-4 d-flex block-21">
                <Link
                  style={{ width: "30%" }}
                  to={"/why-lead-generation-is-key-for-business-growth"}
                  className="nav-link"
                >
                  <img className="w-100" src={Bgblog2} alt="Blog2 image" />
                </Link>
                <div className="text">
                  <h3>
                    <Link
                      className="hover-blue"
                      style={{ color: "black", fontSize: "16px" }}
                      to={"/why-lead-generation-is-key-for-business-growth"}
                    >
                      Logicarts logistics
                    </Link>
                  </h3>
                  <div>
                    <Link
                      className="hover-blue"
                      style={{ color: "#404040", fontSize: "16px" }}
                      to={"/use-logicarts-for-your-business-2"}
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
                  <img className="w-100" src={Bgblog3} alt="Blog3 image" />
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
                      to={"/use-logicarts-for-your-business-2"}
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
