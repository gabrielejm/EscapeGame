
import React, { useState } from 'react';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
        <div>
      <div>

        export default NavBar;