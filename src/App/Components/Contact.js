import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <TopMenu active={"Contact"} />
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Contact <span>Us</span>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            flexDirection: "column",
          }}
        >
        
          <a
            className="btn btn-primary"
            href="https://www.google.com/maps/place/University+of+Cross+River+State,+Calabar/@4.9312618,8.3295498,15z/data=!4m6!3m5!1s0x1067860ccf48c957:0x3a9e7e33c2463820!8m2!3d4.9312618!4d8.3295498!16s%2Fg%2F11bwf0dg00"
            target="_blank"
            rel="noreferrer"
          >
            Use Google Map
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
