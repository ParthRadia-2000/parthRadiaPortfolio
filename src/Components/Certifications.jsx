import React from "react";
import "../Styles/certifications.css";
import Navbar from "./Navbar";
const Certifications = () => {
  return (
    <div>
      <Navbar />
      <div className="certifications_window">
        <div className="certifications_detail">
          <div className="certificate">
            <div className="certificate_name">React + Redux</div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://www.sololearn.com/Certificate/1097-21763981/jpg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">JavaScript, jQuery, and JSON</div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HWS2X99C3GXT/CERTIFICATE_LANDING_PAGE~HWS2X99C3GXT.jpeg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">Python Data Structures</div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~J45QWV9VP39C/CERTIFICATE_LANDING_PAGE~J45QWV9VP39C.jpeg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">
              Programming for Everybody (Getting Started with Python)
            </div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T9A34BUJTF8T/CERTIFICATE_LANDING_PAGE~T9A34BUJTF8T.jpeg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">
              Building Database Applications in PHP
            </div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LJ8HSCPM9BKV/CERTIFICATE_LANDING_PAGE~LJ8HSCPM9BKV.jpeg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">
              Using Python to Access Web Data
            </div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~A8HS77E2TMLQ/CERTIFICATE_LANDING_PAGE~A8HS77E2TMLQ.jpeg"
                alt="certi"
              />
            </div>
          </div>

          <div className="certificate">
            <div className="certificate_name">
              Retrieve Data using Single-Table SQL Queries
            </div>
            <div className="certi_image">
              <img
                className="certificate_image"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3949Y85DJUB9/CERTIFICATE_LANDING_PAGE~3949Y85DJUB9.jpeg"
                alt="certi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
