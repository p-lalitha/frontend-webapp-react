import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bgblog1 from "./blog-bg1.PNG";
import Bgblog2 from "./blog-bg2.PNG";
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
                <strong>LOGICARTS,</strong> has established itself as one of the
                India’s leading last mile channel partner of all major
                multinational courier companies, providing national Courier and
                shipping Forwarding services, delivering pan india on behalf of
                both individual and commercial customers.
              </p>
              <p>
                <strong>LOGICARTS</strong> provides a complete range of express
                solutions by offering door to door courier service to almost all
                destinations in INDIA.
              </p>
              <p>
                <strong>LOGICARTS</strong> has enjoyed steady growth over the
                past 12months and worked in partnership with various
                organisations.
              </p>
              <p>
                Our success is largely based on our dedication to providing
                economical express deliveries along with high levels of customer
                service.
              </p>
              <p>
                Our vision is to be recognized as the Indian Leader and Provider
                of last mile Logistics while keeping high quality of work and
                satisfaction of customer as our main aim
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
                  <img className="w-100" src={Bgblog1} alt="Blog1 image" />
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
                      to={"/use-logicarts-for-your-business"}
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
                      to={"/use-logicarts-for-your-business"}
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
