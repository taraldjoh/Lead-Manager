import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Lead Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Hjem <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Funksjoner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Priser
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Om oss
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
