import { useState } from "react";
import "./App.css";
import GameStart from "./components/GameStart";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prevState) => !prevState);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <GameStart toggle={toggleGamePlay} />}</>
  );
}

export default App;
