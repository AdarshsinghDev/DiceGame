import React, { useState } from "react";
import Dice from "./Components/DiceLoading/Dice";
import Game from "./Components/DiceMain/Game";
function App() {
  const [gamePlay, setGamePlay] = useState(false);

  const toggleGame = () => {
    setGamePlay((prev) => !prev);
  };

  return <>{gamePlay ? <Game /> : <Dice toggle={toggleGame} />}</>;
}

export default App;
