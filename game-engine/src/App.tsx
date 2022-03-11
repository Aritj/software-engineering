import "./App.css";
import Game from "./Game";
import userInput from "./games/flappyBird/user_input.json";
import { GameLoop } from "./engine/loop";
import { InputSystem } from "./engine/input/InputSystem";

InputSystem.Initialize(userInput);

function App() {
    return (
        <div id="game-window-div">
            <GameLoop>
                <Game />
            </GameLoop>
        </div>
    );
}

export default App;
