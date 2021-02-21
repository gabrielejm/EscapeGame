import React from "react";
import "./App.css";
import Main from "./pages/main";
// import ScoreBoard from '../components/ScoreBoard'
import StartModal from "./components/StartModal/StartModal";

const App = () => {
  return (
    <div>
      <StartModal />
      <Main />
    </div>
  );
};

export default App;
