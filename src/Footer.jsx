import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const date = new Date();
  const fulldate = date.toLocaleDateString();
  return (
    <>
      <div className="row footer">
        <div className="col-md-4 contact">
          <a href="https://instagram.com/arsalan.0.9?igshid=YmMyMTA2M2Y=">
            <InstagramIcon />
          </a>
          <a href="tel:8733897080">
            <CallIcon />
          </a>
          <a href="https://api.whatsapp.com/send?phone=918733897080">
            <WhatsAppIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCKMvbCruZ4CV26HvFS3jOhg">
            <YouTubeIcon />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100015831814014">
            <FacebookIcon />
          </a>
        </div>
        <div className=" col-md-4 copyright">© {fulldate}</div>
        <div className=" col-md-4 copyright">Created By Arsalan</div>
      </div>
    </>
  );
}
