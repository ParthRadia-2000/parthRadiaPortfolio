import React, { useState } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  const changeIcon = () => {
    console.log("ppp");
    if (toggler) {
      setToggler(false);
    } else {
      setToggler(true);
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-items">
          <div className="logo">PARTH</div>
          <div className="nav-toggler" onClick={changeIcon}>
            {console.log(toggler)}
            {toggler ? <RiMenu3Line /> : <GrFormClose />}
          </div>
        </div>
      </div>
      {toggler ? (
        <div className="dix"></div>
      ) : (
        <div className="section">
          <div className="full_nav">
            <div className="full_nav_sub_items">
              <div className="full_nav_child">
                <Link to="/" className="nav_childs">
                  Home
                </Link>
              </div>
              <div className="full_nav_child">
                <Link to="/projects" className="nav_childs">
                  Projects
                </Link>
              </div>
              <div className="full_nav_child">
                <Link to="/certifications" className="nav_childs">
                  Certifications
                </Link>
              </div>
              <div className="full_nav_child">
                <Link to="/contacts" className="nav_childs">
                  Contacts
                </Link>
              </div>
              <div className="full_nav_child">
                <Link to="/about" className="nav_childs">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
