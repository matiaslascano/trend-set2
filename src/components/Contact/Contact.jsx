import React from "react";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Mantente en contacto con nosotros: </span>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
