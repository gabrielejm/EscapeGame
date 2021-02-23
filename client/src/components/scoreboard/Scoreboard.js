import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Scoreboard.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(username, score) {
  return { username, score };
}

const rows = [
  createData("Jim Bob", 159, 6.0, 24, 4.0),
  createData("Mister Cool", 237, 9.0, 37, 4.3),
  createData("Joe Mama", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Guy Friend", 356, 16.0, 49, 3.9),
];

export default function ScoreBoard() {
  const classes = useStyles();

  return (
    <div>
      <h1 id="scoreboard-head">Scoreboard</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Score/Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.username}>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
