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

    const variable: number = 0;



    return (
    <Fragment>
        <GameObject
            name={"Pipe"}
            image={pipe}
            active={true}
            height={781*0.6}
            width={860*0.4}
            components={[VelocityComponent, CollisionComponent, BoxCollisionComponent]}
            transform={{
                position: new Vector2D(600, -400),
                scaleX: 0.4,
                scaleY: -0.6,
                z: 1,
            }}
        />

        <GameObject
            name={"Pipe"}
            image={pipe}
            active={true}
            height={781*0.6}
            width={860*0.4}
            components={[VelocityComponent, CollisionComponent, BoxCollisionComponent]}
            transform={{
                position: new Vector2D(600, 200),
                scaleX: 0.4,
                scaleY: 0.6,
                z: 1,
            }}
        />
    </Fragment>);
}

let pipeArray: any[] = [];

function Game() {
    const loop = useGameLoop();

    const [pipes, setPipes] = useState<any[]>([]);

    InputSystem.initialize(inputs);

    console.log(pipes)

    // Start the game
    useEffect(() => {
        loop.start();
        console.log("here")
        const generatePipes = () => {
            console.log(pipeArray)
            pipeArray.push(React.createElement(pipeFactory, {}));
            setPipes(pipeArray);
        }
        setInterval(generatePipes, 1000);
    }, []);


    const test = useCallback(() => {
        console.log("test")
        const generatePipes = () => {
            pipeArray.push(React.createElement(pipeFactory, {}));
            //setPipes([...pipes, React.createElement(pipeFactory, {})])
            //setPipes([...pipes, i++])//sadasd
            /*
            setPipes(current => {
                current.push(i++);
                return current;
            })
            */
            //testsetsasdfasdfs
        }
        setInterval(generatePipes, 1000);
    }, [])


    //test();llll

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

            {pipeArray.map((pipe, i) => {
                return <Fragment key={i}>{pipe}</Fragment>;
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
