import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { grey } from "@mui/material/colors";

export default function Contact() {
  //  const pink=;
  return (
    <div>
      {/* <h1>Welcome to contact page</h1> */}
      <div className="container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact me
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact me
            directly. Me and My team will come back to you within a matter of
            hours to help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <div className="status"></div>
            </div>

            <div className="col-md-12 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <LocationOnIcon fontSize="large" />
                  <p>AHMEDABAD 380028, GUJARAT, INDIA</p>
                </li>

                <li>
                  <CallIcon fontSize="large" />
                  <p>+91 8733897080</p>
                </li>

                <li>
                  <MailIcon fontSize="large" />
                  <p>arsalanshaikh090909@gmail.com</p>
                </li>
              </ul>
              <div className="col-md-12 contact">
                <a href="https://instagram.com/arsalan.0.9?igshid=YmMyMTA2M2Y=">
                  <InstagramIcon
                    style={{ color: grey[900] }}
                    fontSize="large"
                  />
                </a>
                <a href="tel:8733897080">
                  <CallIcon style={{ color: grey[900] }} fontSize="large" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=918733897080">
                  <WhatsAppIcon style={{ color: grey[900] }} fontSize="large" />
                </a>
                <a href="https://www.youtube.com/channel/UCKMvbCruZ4CV26HvFS3jOhg">
                  <YouTubeIcon style={{ color: grey[900] }} fontSize="large" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100015831814014">
                  <FacebookIcon style={{ color: grey[900] }} fontSize="large" />
                </a>
              </div>

              <button type="submit" className="btn btn-danger">
                <a href="mailto:arsalanshaikh090909@gmail.com?">
                  Click Here To Contact Me
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
