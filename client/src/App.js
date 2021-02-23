import React from "react";
import "./App.css";
import Main from "./pages/main";
import ScoreBoard from "./components/scoreboard/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./components/DemoScreen";

const App = () => {
  return (
    <Router>
      <div>
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
