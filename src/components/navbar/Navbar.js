import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            Tshirt Design
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggler="collapse"
            data-target="#navbarNav"
          ></button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Sign-Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Log-In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
