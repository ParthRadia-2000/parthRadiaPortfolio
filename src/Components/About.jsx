import React from "react";
import "../Styles/about.css";
import Navbar from "./Navbar";
import profile from "../Images/profile.jpeg";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about_window">
        <div className="about_details">
          <div className="basic_detail">
            <div className="basic_details_text">
              I'm a computer engineering student from atmiya university, batch
              of 2022. <br />
              being a technology enthusiast, I love exploring new technologies
              and
              <br /> leveraging them to solve real-life problems.
            </div>
            <div className="basic_details_image">
              <img
                src={profile}
                alt="profile_photo"
                className="profile_photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
