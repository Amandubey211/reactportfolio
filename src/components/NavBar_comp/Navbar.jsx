import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  let time = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(time);
  function Run() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(Run, 1000);

  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-Light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="text-uppercase text-muted me-4 "> #portfolio</span>
            {Time}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto"></div>
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/service">
                  service
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/more">
                  more
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/portfolio">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  User
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
