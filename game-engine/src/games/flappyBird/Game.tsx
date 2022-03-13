import "../../App.css";
import { GameObject } from "../../engine/functionalComponents/GameObject";
import { Vector2D } from "../../engine/Vector2D";
import { Fragment, useEffect } from "react";
import { useGameLoop } from "../../engine/loop";
import bird from "../flappyBird/images/bird.png";
import pipe from "../flappyBird/images/pipe.png";
import background from "../flappyBird/images/background.png";
import { PlayerController } from "./PlayerController";
import { Background, Collision, Physics, Velocity } from "../../engine/components/Components";
import { InputSystem } from "../../engine/input/InputSystem";
import inputs from "../flappyBird/user_input.json"

function Game() {
    const loop = useGameLoop();

    InputSystem.initialize(inputs);

    // Start the game
    useEffect(() => {
        loop.start();
    }, []);

    return (
        <Fragment>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}
                components={[PlayerController, Physics, Collision]}
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
                components={[Velocity, Collision]}
                transform={{
                    position: Vector2D.setPosition(0, 200),
                    scaleX: 0.4,
                    scaleY: 0.6,
                    z: 1,
                }}
            />

            <GameObject
                name={"Pipe"}
                image={pipe}
                active={true}
                components={[Velocity, Collision]}
                transform={{
                    position: Vector2D.setPosition(350, -200),
                    scaleX: 0.4,
                    scaleY: -0.6,
                    z: 1,
                }}
            />

            <GameObject
                name={"Pipe"}
                image={pipe}
                active={true}
                components={[Velocity, Collision]}
                transform={{
                    position: Vector2D.setPosition(700, 200),
                    scaleX: 0.4,
                    scaleY: 0.6,
                    z: 1,
                }}
            />

            <GameObject
                name={"Background"}
                image={background}
                active={true}
                components={[Background]}
                transform={{
                    position: Vector2D.setPosition(150, 10),
                    scaleX: 1.4,
                    scaleY: 1.3,
                    z: -1,
                }}
            />
        </Fragment>
    );
}

export default Game;
