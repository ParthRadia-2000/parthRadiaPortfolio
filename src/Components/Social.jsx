import React from "react";
import Navbar from "./Navbar";
import "../Styles/social.css";
import contact_image from "../Images/contacts.svg";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Social = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      <Navbar />
      <div className="social_window">
        <div className="social_details">
          <div className="contacts">
            <div className="contacts_link">
              <div className="contact_link linkedin">
                <BsLinkedin
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/parth-radia-291135202/"
                    )
                  }
                />
              </div>
              <div className="contact_link github">
                <BsGithub
                  onClick={() =>
                    openInNewTab("https://github.com/ParthRadia-2000")
                  }
                />
              </div>
              <div className="contact_link mail">
                <BsFillEnvelopeFill
                  onClick={() =>
                    openInNewTab(
                      "mailto:support@example.com?subject=SendMail&body=Description'"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="contacts_image">
            <img
              src={contact_image}
              alt="contact_image"
              className="contact_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
