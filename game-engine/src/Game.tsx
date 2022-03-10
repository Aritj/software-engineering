import "./App.css";
import { GameComponent } from "./engine/superClasses/GameComponent";
import bird from "./game/images/bird.png";
import pipe from "./game/images/pipe.png";
import background from "./game/images/background.png";
import { GameObject } from "./engine/functionalComponents/GameObject";
import { Physics } from "./engine/Physics";
import { Vector2D } from "./engine/Vector2D";
import { Transform } from "./engine/functionalComponents/Transform";
import { render } from "@testing-library/react";
import { InputSystem } from "./engine/InputSystem";
import { PropsGameObject } from "./engine/types/props/PropsGameObject";
import React from "react";

function Game() {
    return (
        <React.Fragment>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}
                components={[]}
                transform={{
                    position: Vector2D.setPosition(100, 100),
                    scaleX: 0.5,
                    scaleY: 0.5,
                    z: 3,
                }}
            />

            <GameObject
                name={"Pipe"}
                image={pipe}
                active={true}
                components={[]}
                transform={{
                    position: Vector2D.one,
                    scaleX: 0.4,
                    scaleY: 0.6,
                    z: 1,
                }}
            />

            <GameObject
                name={"Background"}
                image={background}
                active={true}
                components={[]}
                transform={{
                    position: Vector2D.setPosition(150, 10),
                    scaleX: 1.4,
                    scaleY: 1.3,
                    z: 0,
                }}
            />
        </React.Fragment>
    );
}

export class PlayerController extends GameComponent {
    start(): void {
        InputSystem.add("w", this.moveUp);
        InputSystem.add("a", this.moveLeft);
        InputSystem.add("s", this.moveDown);
        InputSystem.add("d", this.moveRight);
    }

    moveUp() {
        new Audio("audio/swoosh.mp3").play();
        console.log("UP!");
    }

    moveDown() {
        console.log("DOWN!");
    }

    moveLeft() {
        console.log("LEFT!");
    }

    moveRight() {
        console.log("RIGHT!");
    }
}

export default Game;
