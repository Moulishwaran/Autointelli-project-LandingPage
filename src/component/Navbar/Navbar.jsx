import React from "react";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img
          className="Navbar-logo"
          src={require("../../assets/auto-intelli-logo.png")}
          alt="cc"
        />
        <div className="Navbar-Seacrh">
          <div className="Navbar-SearchBox">
            <input
              type="text"
              placeholder="Search....."
              className="Navbar-SearchInput"
            />
            <CiSearch className="NavbarSearchIcon" />
          </div>
          <div>
            <Link to={"/login"} className="Navbar-login">
              Login
            </Link>
          </div>
          <div className="Demo">
            <button className="NavbarDemoBtn">GetDemo</button>
          </div>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Navbar;
