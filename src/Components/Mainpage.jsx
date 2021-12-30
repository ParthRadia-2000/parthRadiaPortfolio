import React from "react";
import "../Styles/mainpage.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="nav_menu">
        <Navbar />
      </div>
      <div className="text">
        <Intro />
      </div>
    </div>
  );
};

export default Mainpage;
