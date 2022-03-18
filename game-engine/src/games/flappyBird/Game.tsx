import "../../App.css";
import { GameObject } from "../../engine/functionalComponents/GameObject";
import { Vector2D } from "../../engine/Vector2D";
import { Fragment, useEffect, useState } from "react";
import { useGameLoop } from "../../engine/loop";
import blank from "../flappyBird/images/blank.png";
import bird from "../flappyBird/images/bird.png";
import pipe from "../flappyBird/images/pipe.png";
import background from "../flappyBird/images/background.png";
import { PlayerController } from "./PlayerController";
import { PhysicsComponent, VelocityComponent, DebuggerComponent, CollisionComponent } from "../../engine/components/Components";
import { InputSystem } from "../../engine/input/InputSystem";
import inputs from "../flappyBird/user_input.json"
import { GameComponent } from "../../engine/superClasses/GameComponent";
import React from "react";
import {PointSystem} from "../../engine/Collision/PointSystem";


export function pipeFactory(this: any) {
    const variable: number = Math.floor(Math.random() * (200 - (-200) + 1)) - 200;
    const startingPositionX: number = 1200;
    const lowerPipeY = 400 - variable;
    const upperPipeY = lowerPipeY - 600;

    return (
    <Fragment>
        
        <GameObject
            name={"upperPipe"}
            image={pipe}
            active={true}
            components={[VelocityComponent, DebuggerComponent, CollisionComponent]}
            transform={{
                position: new Vector2D(startingPositionX, upperPipeY),
                rotation: 180,
                width: 100,
                height: 400,
                z: 1,
            }}
        />

        <GameObject
            name={"Point"}
            image={""}
            active={true}
            components={[VelocityComponent, DebuggerComponent, CollisionComponent]}
            transform={{
                position: new Vector2D(startingPositionX+199, lowerPipeY-200),
                width: 1,
                height: 200,
                z: 1
            }}
        />

        <GameObject
            name={"lowerPipe"}
            image={pipe}
            active={true}
            components={[VelocityComponent, DebuggerComponent, CollisionComponent]}
            transform={{
                position: new Vector2D(startingPositionX, lowerPipeY),
                width: 100,
                height: 400,
                z: 1,
            }}
        />
    </Fragment>);
}


let audioSwapNeeded: boolean = false;
let audio: HTMLAudioElement;
let prevPoint: number = -1;

function Game() {
    const loop = useGameLoop();

    const [pipes, setPipes] = useState<React.FunctionComponentElement<{}>[]>([]);

    InputSystem.initialize(inputs);

    // Start the game
    useEffect(() => {
        loop.start();
        createPipePair();
        setInterval(createPipePair, 4000)
    }, []);

    const createPipePair = () => {
        pipes.push(React.createElement(pipeFactory, {}));
        setPipes([...pipes])
    }

    if (PointSystem.getPoint() != prevPoint) {
        swapAudio(PointSystem.getPoint());
        prevPoint = PointSystem.getPoint();
    }

    function swapAudio(current: number) {
        let level0: number = 0;
        let level1: number = 3;
        let level2: number = 6;

        if (current == level0 || current == level1 || current == level2) {
            audioSwapNeeded = true;
        }
        

        if (audioSwapNeeded && level0 <= current && current < level1) {
            audio = new Audio("/audio/level1.mp3");
            audio.play();
        } 

        if (audioSwapNeeded && level1 <= current && current < level2) {
            audio.pause();
            audio = new Audio("/audio/level2.mp3");
            audio.play();
        }

        if (audioSwapNeeded && level2 <= current) {
            audio.pause();
            audio = new Audio("/audio/level3.mp3");
            audio.play();
        }
        audioSwapNeeded = false;
    }






    return (
        <Fragment>
            <GameObject
                name={"Bird"}
                image={bird}
                active={true}
                //components={[PlayerController, PhysicsComponent, CollisionComponent]}
                components={[PlayerController, PhysicsComponent, DebuggerComponent, CollisionComponent]}
                transform={{
                    position: new Vector2D(150, 0),
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

            <GameObject
                name={"Score"}
                image={""}
                active={true}
                components={[ScoreBoard]}
                transform={{
                    position: new Vector2D(500, 10),
                    width: 200,
                    height: 100,
                    z: 10,
                }}
            />
        </Fragment>
    );
}

export class ScoreBoard extends GameComponent {

    public Render(position: Vector2D): JSX.Element {
        return <div
            style={{
                position: "absolute",
                fontFamily: "Comic Sans MS, Sans-Serif",
                width: `${this.gameObject.transform.width}px`,
                height: `${this.gameObject.transform.height}px`,
                left: `${this.gameObject.transform.position.x}px`,
                top: `${this.gameObject.transform.position.y}px`,
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
                zIndex: `${this.gameObject.transform.z}`,
            }} >
            {this.gameObject.name + " " + PointSystem.getPoint()}
        </div>
    }
}

export default Game;
