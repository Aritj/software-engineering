import "./App.css";
import Game from "./games/flappyBird/Game";
import { GameLoop } from "./engine/loop";


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
