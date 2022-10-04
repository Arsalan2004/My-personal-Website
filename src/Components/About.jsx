import React from "react";
import aboutimg from "../images/about.jpeg";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row about">
        <div className="aniaboutimg">
          <img src={aboutimg} alt="" className="aboutimg" />
        </div>
      </div>
      <div className="row">
        <div className="greet">
          ─── &nbsp;&nbsp;&nbsp;&nbsp;THIS IS ME{" "}
          <span className="abtname">ARSALAN SHAIKH</span>
        </div>
        <h1 className="welcome">🆆🅴🅻🅲🅾🅼🅸🅽🅶 🆈🅾🆄</h1>
      </div>
      <div className="row">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Me
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div>
                  This is<strong> ARSALAN SHAIKH</strong>.Born in{" "}
                  <strong>Ahmedabad</strong>.Currently studying in
                  <strong> KK Shastri Educational Campus</strong>. To pursue
                  <strong> B.C.A(Bachelor in Computer Application)</strong> or
                  <strong> C.S(Computer Science)</strong> degree.
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Current Proffession
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Currently I am a<strong> Student</strong> and a
                <strong> Home Tutor</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Life Goals
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Want to become a <strong>Software Engineer</strong> and a
                <strong> Full Stack Developer.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
