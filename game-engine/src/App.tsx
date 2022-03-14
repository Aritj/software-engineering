import "./App.css";
import Game from "./games/flappyBird/Game";
import { GameLoop } from "./engine/loop";
import { CollisionSystem } from "./engine/Collision/CollisionSystem";

function App() {
    return (
        <div id="game-window-div">
            <CollisionSystem>
                <GameLoop>
                    <Game />
                </GameLoop>
            </CollisionSystem>
        </div>
    );
}

export default App;
