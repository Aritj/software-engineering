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

function Game() {
    return (
        <div>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}
                components={[]}
                transform={{
                    position: Vector2D.setPosition(200, 100),
                    scale: Vector2D.multiply(Vector2D.one, 1),
                    z: 1,
                }}
            />

            <GameObject
                name={"Pipe"}
                image={pipe}
                active={true}
                components={[]}
                transform={{
                    position: Vector2D.zero,
                    scale: Vector2D.multiply(Vector2D.one, 1),
                    z: 0,
                }}
            />
        </div>
    );
}

export default Game;
