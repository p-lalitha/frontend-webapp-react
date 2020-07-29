import React, { Component } from "react";
import { Link } from "react-router-dom";
import userlogo from "./userlogo.jpg";
import "./team.css";

class Team extends Component {
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
            TEAM
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
          Logicarts Leadership
        </h1>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 col-md-4 col-lg-3 pb-5"
              style={{ textAlign: "center" }}
            >
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="user image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Gangadhar Reddy</h3>
                  <p>CEO & Founder</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">GAvinash Kumar</h3>
                  <p>COO & Co-Founder</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Sravan Davuluri</h3>
                  <p>CTO & Co-Founder</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Sunil Kumar</h3>
                  <p>Finance Controller</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Vishnu VS</h3>
                  <p>Sales & Operations Head, Bangalore</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Siddappa</h3>
                  <p>Area Manager, Bangalore</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Surender</h3>
                  <p>Area Manager, Hyderabadr</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 pb-5">
              <div className="team">
                <div className="team-pic">
                  <img src={userlogo} alt="User image" />
                </div>
                <br />
                <div className="team-desc">
                  <h3 className="mb-2">Sugumar</h3>
                  <p>Sales & Operations Head, Chennai</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
