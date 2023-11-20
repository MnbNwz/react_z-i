import React from "react";
import "./header.scss";
import faceBookImage from "../../images/Icon awesome-facebook-f.png";
import TwitterImage from "../../images/Icon awesome-twitter.png";
import WhatsappImage from "../../images/Icon awesome-whatsapp.png";
import InstaImage from "../../images/Icon awesome-instagram.png";
import telephoneIcon from "../../images/Icon ionic-ios-call.png";
import mailIcon from "../../images/Icon ionic-ios-mail.png";

const Announcement = () => {
  return (
    <div className="Announcement">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="Announcement-links">
              <div className="link-mobile">
                <img src={telephoneIcon} alt="" />
                <div>
                  <a href="#">+971 50 9126 175</a>
                  <a href="#">+971 52 7018 202</a>
                </div>
              </div>
              <div className="link-mobile">
                <a href="#">
                  <span>
                    <img src={mailIcon} alt="" />
                  </span>
                  <span>zanditransport23@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="Announcement-social-wrapper">
              <a href="#">
                <img src={faceBookImage} alt="" />
              </a>
              <a href="#">
                <img src={InstaImage} alt="" />
              </a>
              <a href="#">
                <img src={WhatsappImage} alt="" />
              </a>
              <a href="#">
                <img src={TwitterImage} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
