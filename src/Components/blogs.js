import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bgblog1 from "./blog-bg1.PNG";
import Bgblog2 from "./blog-bg2.PNG";
import Bgblog3 from "./blog-bg3.PNG";

class Blogs extends Component {
  state = {
    text: "Show More",
  };

  changeText = () => {
    this.setState({ text: "That's all!" });
  };

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
        </span>
        <h1
          className="mb-5"
          style={{
            fontSize: "40px",
            fontFamily: "sans-serif",
            marginLeft: "10%",
          }}
        >
          Our Blog
        </h1>
        <div className="p-3">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-lg-4 text-center d-flex">
                <div className="mb-md-5 w-100">
                  <Link
                    to={"/use-logicarts-for-your-business-2"}
                    className="nav-link"
                  >
                    <img className="w-100" src={Bgblog1} alt="Blog1 image" />
                  </Link>
                  <div className="mb-3">
                    <div>
                      <Link to={"/use-logicarts-for-your-business-2"}>
                        March. 31, 2020 logicarts{" "}
                        <span className="fa fa-comment"></span>3
                      </Link>
                    </div>
                    <h3
                      className="mt-2"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      <Link to={"/use-logicarts-for-your-business-2"}>
                        Last Mile Delivery Logistics
                      </Link>
                    </h3>
                    <p
                      className="text-left"
                      style={{
                        color: "#85868c",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                      }}
                    >
                      Last Mile Delivery Logistics Indian Logistics Sector
                      Shining Bright The Indian logistics sector is on a big
                      growth tide. According to ICRA , Indian logistics sector
                      is expected to grow at a rate 8-10% over the medium term.
                      According to the Global ranking of the World Bank’s 2018
                      Indian jumped to 44th rank in 2018 […]
                    </p>
                    <p className="text-left">
                      <Link
                        className="btn btn-primary pl-5 pr-5"
                        style={{ backgroundColor: "#3164a6" }}
                        to={"/use-logicarts-for-your-business-2"}
                      >
                        Continue{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center d-flex">
                <div className="mb-md-5 w-100">
                  <Link
                    to={"/why-lead-generation-is-key-for-business-growth"}
                    className="nav-link"
                  >
                    <img className="w-100" src={Bgblog2} alt="Blog2 image" />
                  </Link>
                  <div className="mb-3">
                    <div>
                      <Link
                        to={"/why-lead-generation-is-key-for-business-growth"}
                      >
                        March. 31, 2020 logicarts{" "}
                        <span className="fa fa-comment"></span>3
                      </Link>
                    </div>
                    <h3
                      className="mt-2"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      <Link
                        to={"/why-lead-generation-is-key-for-business-growth"}
                      >
                        Logicarts logistics
                      </Link>
                    </h3>
                    <p
                      className="text-left"
                      style={{
                        color: "#85868c",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                      }}
                    >
                      Logicarts, is an excellent current events and news source
                      for global supply chain and logistics. It is also a force
                      to be reckoned with when it comes to discussions on
                      fascinating innovation and technology in logistics.
                      Logicarts has great information and insights on so much
                      more than logistics and the supply chain, exploring topics
                      in […]
                    </p>
                    <p className="text-left">
                      <Link
                        className="btn btn-primary pl-5 pr-5"
                        style={{ backgroundColor: "#3164a6" }}
                        to={"/why-lead-generation-is-key-for-business-growth"}
                      >
                        Continue{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center d-flex">
                <div className="mb-md-5 w-100">
                  <Link
                    to={"/use-logicarts-for-your-business"}
                    className="nav-link"
                  >
                    <img className="w-100" src={Bgblog3} alt="Blog3 image" />
                  </Link>
                  <div className="mb-3">
                    <div>
                      <Link to={"/use-logicarts-for-your-business"}>
                        March. 31, 2020 logicarts{" "}
                        <span className="fa fa-comment"></span>3
                      </Link>
                    </div>
                    <h3
                      className="mt-2"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      <Link to={"/use-logicarts-for-your-business"}>
                        “Logicarts” One stop solution for logistics
                      </Link>
                    </h3>
                    <p
                      className="text-left"
                      style={{
                        color: "#85868c",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                      }}
                    >
                      LOGICARTS, has established itself as one of the India’s
                      leading last mile channel partner of all major
                      multinational courier companies, providing national
                      Courier and shipping Forwarding services, delivering pan
                      india on behalf of both individual and commercial
                      customers. LOGICARTS provides a complete range of express
                      solutions by offering door to door courier service to
                      almost […]
                    </p>
                    <p className="text-left">
                      <Link
                        className="btn btn-primary pl-5 pr-5"
                        style={{ backgroundColor: "#3164a6" }}
                        to={"/use-logicarts-for-your-business"}
                      >
                        Continue{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex text-center">
                <div
                  onClick={this.changeText}
                  className="p-2 m-auto"
                  style={{
                    backgroundColor: "#3164a6",
                    color: "#fff",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  {this.state.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
