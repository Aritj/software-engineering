import "../../App.css";
import { GameObject } from "../../engine/functionalComponents/GameObject";
import { Vector2D } from "../../engine/Vector2D";
import { Fragment, useEffect, useState } from "react";
import { useGameLoop } from "../../engine/loop";
import bird from "../flappyBird/images/bird.png";
import pipe from "../flappyBird/images/pipe.png";
import background from "../flappyBird/images/background.png";
import { PlayerController } from "./PlayerController";
import { PhysicsComponent, VelocityComponent, CollisionComponent } from "../../engine/components/Components";
import { InputSystem } from "../../engine/input/InputSystem";
import inputs from "../flappyBird/user_input.json"
import { GameComponent } from "../../engine/superClasses/GameComponent";
import React from "react";


export function pipeFactory() {
    const variable: number = Math.floor(Math.random() * (200 - (-200) + 1)) - 200;
    const startingPositionX: number = 600;
    const lowerPipeY = 300 - variable;
    const upperPipeY = lowerPipeY - 600;

    return (
    <Fragment>
        {/*
        <GameObject
            name={"upperPipe"}
            image={pipe}
            active={true}

            height={781*0.6}
            width={860*0.4}
            components={[CollisionComponent, BoxCollisionComponent]}

            components={[VelocityComponent, CollisionComponent]}

            transform={{
                position: new Vector2D(startingPositionX, upperPipeY),
                rotation: 180,
                width: 100,
                height: 400,
                z: 1,
            }}
        />*/}

        <GameObject
            name={"lowerPipe"}
            image={pipe}
            active={true}

            
            components={[CollisionComponent]}



            transform={{
                position: new Vector2D(startingPositionX, lowerPipeY),
                width: 100,
                height: 400,
                z: 1,
            }}
        />

    </Fragment>);
}



function Game() {
    const loop = useGameLoop();

    const [pipes, setPipes] = useState<React.FunctionComponentElement<{}>[]>([]);

    InputSystem.initialize(inputs);

    // Start the game
    useEffect(() => {
        loop.start();
        test();

        //setInterval(test, 4000)



    }, []);

    const test = () => {
        pipes.push(React.createElement(pipeFactory, {}));
        setPipes([...pipes])
    }

    return (
        <Fragment>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}

                
                
                components={[PlayerController, PhysicsComponent, CollisionComponent]}



                transform={{
                    position: new Vector2D(0, 0),
                    width: 80,
                    height: 60,
                    z: 3,
                }}
            />

            {pipes.map((pipe, index) => {
                return <Fragment key={index}>{pipe}</Fragment>;
            })}

            <GameObject
                name={"Background"}
                image={background}
                active={true}
                components={[GameComponent]}
                transform={{
                    position: new Vector2D(0, 0),
                    width: 1400,
                    height: 610,
                    z: -1,
                }}
            />
        </Fragment>
    );
}

export default Game;
