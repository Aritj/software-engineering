import "../../App.css";
import { GameObject } from "../../engine/functionalComponents/GameObject";
import { Vector2D } from "../../engine/Vector2D";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useGameLoop } from "../../engine/loop";
import bird from "../flappyBird/images/bird.png";
import pipe from "../flappyBird/images/pipe.png";
import background from "../flappyBird/images/background.png";
import { PlayerController } from "./PlayerController";
import { PhysicsComponent, VelocityComponent, CollisionComponent, BoxCollisionComponent } from "../../engine/components/Components";
import { InputSystem } from "../../engine/input/InputSystem";
import inputs from "../flappyBird/user_input.json"
import { GameComponent } from "../../engine/superClasses/GameComponent";
import React from "react";

type pipeValues = {

}

export function pipeFactory() {
    const variable: number = Math.floor(Math.random() * (200 - (-200) + 1)) - 200;
    const startingPositionX: number = 1200;
    const lowerPipeY = 300 - variable;
    const upperPipeY = -600 + lowerPipeY;

    return (
    <Fragment>
        <GameObject
            name={"upperPipe"}
            image={pipe}
            active={true}
            height={781*0.6}
            width={860*0.4}
            components={[VelocityComponent, CollisionComponent, BoxCollisionComponent]}
            transform={{
                position: new Vector2D(startingPositionX, upperPipeY),
                scaleX: 0.4,
                scaleY: -0.6,
                z: 1,
            }}
        />

        <GameObject
            name={"lowerPipe"}
            image={pipe}
            active={true}
            height={781*0.6}
            width={860*0.4}
            components={[VelocityComponent, CollisionComponent, BoxCollisionComponent]}
            transform={{
                position: new Vector2D(startingPositionX, lowerPipeY),
                scaleX: 0.4,
                scaleY: 0.6,
                z: 1,
            }}
        />
    </Fragment>);
}

function Game() {
    const loop = useGameLoop();

    const [pipes, setPipes] = useState<any[]>([]);

    InputSystem.initialize(inputs);

    console.log(pipes)

    // Start the game
    useEffect(() => {
        loop.start();

        const generatePipes = () => {
            setPipes([...pipes, React.createElement(pipeFactory, {})])
        }

        setInterval(generatePipes, 2000);
    }, []);

    return (
        <Fragment>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}
                height={108*0.5}
                width={153*0.5}
                components={[PlayerController, PhysicsComponent, BoxCollisionComponent]}
                transform={{
                    position: new Vector2D(0, 0),
                    scaleX: 0.5,
                    scaleY: 0.5,
                    z: 3,
                }}
            />

            {pipes.map((pipe, index) => {
                return <Fragment key={index}>{console.log("key: " + index)}{pipe}</Fragment>;
            })}

            <GameObject
                name={"Background"}
                image={background}
                active={true}
                height={600}
                width={1400}
                components={[GameComponent]}
                transform={{
                    position: new Vector2D(150, 10),
                    scaleX: 1.4,
                    scaleY: 1.3,
                    z: -1,
                }}
            />
        </Fragment>
    );
}

export default Game;
