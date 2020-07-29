import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
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
            CONTACT
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
          Contact Us
        </h1>
        <section className="m-0">
          <div className="container">
            <div className="row mb-3 d-flex">
              <div className="col-md-4">
                <div className="col-md-12">
                  <div
                    className="border p-4 rounded mb-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <div>
                      <p style={{ color: "#999" }}>
                        <svg
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          class="bi bi-map"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
                          />
                        </svg>
                        {"  "}
                        Address:
                      </p>
                    </div>
                    <div className="pl-3">
                      <strong>
                        SMART SHIP INNOVATIVE SOLUTIONS PRIVATE LIMITED
                      </strong>
                      <strong style={{ color: "#404040" }}>
                        NO 251/4, NEAR SHANTI WOOD WORKS KONADASAPURA,
                        VIRGONAGAR Bangalore 560049
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="border p-4 rounded mb-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <div className="mb-1" style={{ color: "#999" }}>
                      <span
                        className="fa fa-mobile pr-3"
                        style={{ fontSize: "18px" }}
                      ></span>
                      <strong>Phone:</strong>
                    </div>
                    <p className="pl-3 mb-0">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"tel:+91 9606100542"}
                      >
                        +91 9606100542
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="border p-4 rounded mb-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <div className="mb-1" style={{ color: "#999" }}>
                      <span
                        className="fa fa-envelope-o pr-3"
                        style={{ fontSize: "18px" }}
                      ></span>
                      <strong>Email:</strong>
                    </div>
                    <p className="pl-3 mb-0">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"mailto:info@logicarts.in"}
                      >
                        info@logicarts.in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form className="bg-light p-5">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="mobile"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      cols="40"
                      rows="10"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send"
                      className="text-white"
                      style={{
                        backgroundColor: "#3164a6",
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
        </section>
      </div>
    );
  }
}

export default Contact;
