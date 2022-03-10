import "./App.css";
import { GameComponent } from "./engine/superClasses/GameComponent";
import bird from "./game/images/bird.png";
import pipe from "./game/images/pipe.png";
import { GameObject } from "./engine/functionalComponents/GameObject";
import { Physics } from "./engine/Physics";
import { Vector2D } from "./engine/Vector2D";
import { Transform } from "./engine/functionalComponents/Transform";
import { render } from "@testing-library/react";
import { InputSystem } from "./engine/InputSystem";
import { PlayerController } from "./game/PlayerController";
import Game from "./Game";

function App() {
    return (
        <div id="screen-div">
            <Game />
        </div>
    );
}

export default App;
