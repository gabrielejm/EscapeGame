import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarStyle = {
  color: "red",
  margin: "5px",
};

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>Escape Game</h1> */}
      <div className="links">
        <Link style={NavbarStyle} to="/">
          Play
        </Link>
        <Link style={NavbarStyle} to="/scoreboard">
          Scoreboard
        </Link>
        <Link style={NavbarStyle} to="/demo">
          Puzzle Demos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
