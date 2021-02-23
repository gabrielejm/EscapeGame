// import React, { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Navbar.css";

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
      <AppBar id="nav-style" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="links" to="/">
              Play
            </Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link className="links" to="/scoreboard">
              Scoreboard
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className="links" to="/demo">
              Puzzle Demos
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
