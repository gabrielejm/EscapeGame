import React from "react";
import "./App.css";
import Main from "./pages/main";
// import ScoreBoard from '../components/ScoreBoard'
import StartModal from "./components/StartModal/StartModal";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  return (
    <div>
      <StartModal />
      <Main />
      {/* <ScoreBoard /> */}
    </div>
  );
};

export default App;
