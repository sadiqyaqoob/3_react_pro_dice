import { useState } from "react";
import StartGame from "./components/StartGame";
import Gamepaly from "./components/Gamepaly";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <Gamepaly /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
