import React from "react";
import "./App.css";
import Main from "./pages/main";
<<<<<<< HEAD
import ScoreBoard from "./components/ScoreBoard";
=======
import ScoreBoard from "./components/ScoreBoard/Scoreboard";
>>>>>>> main
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./pages/Demo";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/scoreboard">
            <ScoreBoard />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
