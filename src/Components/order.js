import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgorder from "./bgorder.PNG";
import "./order.css";

class Order extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div
            className="col-md-7 col-lg-8 d-flex mb-5"
            style={{ alignItems: "center" }}
          >
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src={bgorder}
              alt="OrderBackground"
            />
          </div>
          <div
            className="col-md-5 col-lg-4 d-flex mb-5 b-radius pt-5"
            style={{
              alignItems: "center",
              backgroundColor: "#3164a6",
            }}
          >
            <form className="text-white w-100">
              <div className="form-group">
                <label>PICK-UP LOCATION</label>
                <input
                  type="text"
                  id="pickup"
                  className="form-control placeholdercolor"
                  placeholder="Enter Pick-up Location"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group">
                <label>DROP-OFF LOCATION</label>
                <input
                  type="text"
                  id="drop"
                  className="form-control placeholdercolor"
                  placeholder="Enter Drop-Off Location"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group">
                <label>PICK-UP DATE</label>
                <input
                  type="text"
                  id="pickupdate"
                  className="form-control placeholdercolor"
                  placeholder="22/11/2020"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group">
                <label>PICK-UP TIME</label>
                <input
                  type="text"
                  id="pickuptime"
                  className="form-control placeholdercolor"
                  placeholder="10AM"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group">
                <label>NAME</label>
                <input
                  type="text"
                  id="name"
                  className="form-control placeholdercolor"
                  placeholder="Name"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control text-white placeholdercolor"
                  placeholder="phone"
                  style={{ backgroundColor: "#3164a6" }}
                />
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="GET ESTIMATE NOW"
                  className="text-white"
                  style={{
                    backgroundColor: "#f25b03",
                    padding: "1rem 3rem",
                    outline: "none",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
