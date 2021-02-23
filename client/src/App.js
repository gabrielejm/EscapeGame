import React from "react";
import "./App.css";
import Main from "./pages/main";
import ScoreBoard from "./components/ScoreBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./components/DemoScreen";

const App = () => {
  return (
    <div>
      <Main />
      <ScoreBoard />
      <Demo />
    </div>
  );
};

export default App;
