import React from "react";
import "../App.css";
import resume from "../cvv/resume.pdf";
import homeimg from "../images/home.jpg";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mx-auto image">
            <img src={homeimg} alt="" />
          </div>
          <div className="col-md-7 mx-auto margin content">
            <div className="greet">─── &nbsp;&nbsp;&nbsp;&nbsp;H E L L O</div>
            <div className="intro">
              I'm&nbsp;
              <span className="name">
                <span className="a"> A</span>rsalan
              </span>
              <div>
                <span className="s">S</span>haikh
              </div>
            </div>
            <div className="detail">
              This is <span>Arsalan Shaikh</span> Visual
              designer,Photographer,Web Developer located in India,looking for
              working around the globe.
            </div>
            <div className="downloadcvv">
              <div className="box-1">
                <a href={resume} download="resume.pdf">
                  <div className="btndown btn-one">Download CVV</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
