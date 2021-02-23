import React from "react";
import "./App.css";
import Main from "./pages/main";
import StartModal from "./components/StartModal/StartModal";
import ScoreBoard from "./components/ScoreBoard";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Main />
            <StartModal />
          </Route>
          <Route path="/scoreboard">
            <ScoreBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
