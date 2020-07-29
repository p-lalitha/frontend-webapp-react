import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
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
          <p
            style={{ paddingLeft: "2px", display: "inline", fontSize: "14px" }}
          >
            ABOUT US
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
          About Us
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pl-md-5" style={{ color: "#85868c" }}>
                <h2
                  className="mb-4"
                  style={{ fontSize: "40px", fontWeight: "600" }}
                >
                  Welcome to Logicarts
                </h2>
                <p>
                  Logicarts is an award-winning single aggregator platform
                  efficiently solving major Logistics problems in south India.
                  Our Mission is to connect{" "}
                  <strong>SELLERS TO CONSUMERS ON TIME</strong> at an affordable
                  cost.
                </p>
                <p>
                  Legal Name Of Business:{" "}
                  <strong>
                    Smart Ship Innovative Solutions Private Limited
                  </strong>
                </p>
                <p>
                  Logicarts is SME Friendly, We carry your products effortlessly
                  from Client Warehouse or Manufacturing plant to Customer door
                  step within stipulated time. We are spread across South INDIA,
                  directly delivering 1000 + shipments every day to consumers
                  and connecting 25000+ shipments via our FML and Mid mile
                  channels. We do also help our clients in setting up and
                  maintaining micro fulfillment centers.
                </p>
                <p>
                  Logicarts working towards organizing the sector through our
                  modern Tech by embracing AI & IOT Solution so as bring up more
                  tractability, accountability, and transparency in all our
                  processes.Drivers and Delivery Associates are the main pillars
                  and integral parts of our organization. Logicarts provides
                  many job opportunities to drivers and team members, which
                  enhances their monthly revenue giving them a sustainable
                  income.“Be your Boss” is our internal program where we provide
                  financial aid to our drivers for them to able to own vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
