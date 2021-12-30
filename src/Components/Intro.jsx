import React from "react";
import "../Styles/intro.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="intro">
      <div className="basic_details">
        <div className="child1">Hello!</div>
        <div className="child2">I'm Parth Radia</div>
      </div>
      <div className="other_details">
        <div className="projects">
          <div className="details">
            <div className="redirect_button">Projects</div>
            <div>
              <Link to="/projects" className="redirect_link">
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="interest">
          <div className="details">
            <div className="redirect_button">Certifications</div>
            <div>
              <Link to="/certifications" className="redirect_link">
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="details">
            <div className="redirect_button">Contacts</div>
            <div>
              <Link to="/contacts" className="redirect_link">
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="details">
            <div className="redirect_button">About</div>
            <div>
              <Link to="/about" className="redirect_link">
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
