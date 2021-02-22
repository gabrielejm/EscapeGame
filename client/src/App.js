import React from "react";
import "./App.css";
import Main from "./pages/main";
// import ScoreBoard from '../components/ScoreBoard'
import StartModal from "./components/StartModal/StartModal";
import ScoreBoard from "./components/ScoreBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <StartModal />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/scoreboard">
            <ScoreBoard />
          </Route>
        </Switch>

        {/* <ScoreBoard /> */}
      </div>
    </Router>
  );
};

export default App;
