// import React, { useState } from "react";
import { Link } from "react-router-dom";

// const NavbarStyle = {
//   color: "red",
//   margin: "5px",
// };

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* <h1>Escape Game</h1> */}
//       <div className="links">
//         <Link style={NavbarStyle} to="/">
//           Play
//         </Link>
//         <Link style={NavbarStyle} to="/scoreboard">
//           Scoreboard
//         </Link>
//         <Link style={NavbarStyle} to="/demo">
//           Puzzle Demos
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Play</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link to="/scoreboard">Scoreboard</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/demo">Puzzle Demos</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
