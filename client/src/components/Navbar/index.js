import React, { useState } from "react";
import { Link } from "react-router-dom";

// const NavBar = (props) => {
//     const [collapsed, setCollapsed] = useState(true);

//     const toggleNavbar = () => setCollapsed(!collapsed);

//     return (
//         <div>
//       <div>

//         export default NavBar;

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Escape Game</h1>
      <div className="links">
        <Link to="/">Play</Link>
        <Link to="/scoreboard">Scoreboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
