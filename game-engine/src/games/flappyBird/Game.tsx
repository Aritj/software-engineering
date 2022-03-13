import "../../App.css";
import { GameObject } from "../../engine/functionalComponents/GameObject";
import { Vector2D } from "../../engine/Vector2D";
import { Fragment, useEffect } from "react";

import { useGameLoop } from "../../engine/loop";
import bird from "../flappyBird/images/bird.png";
import pipe from "../flappyBird/images/pipe.png";
import background from "../flappyBird/images/background.png";
import { PlayerController } from "./PlayerController";
import { Physics } from "../../engine/components/Physics";

function Game() {
    const loop = useGameLoop();

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
                components={[PlayerController, Physics]}
                transform={{
                    position: new Vector2D(100, 100),
                    scaleX: 0.5,
                    scaleY: 0.5,
                    z: 3,
                }}
            />

            <GameObject
                name={"Pipe"}
                image={pipe}
                active={true}
                components={[PlayerController]}
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
                components={[PlayerController]}
                transform={{
                    position: new Vector2D(150, 10),
                    scaleX: 1.4,
                    scaleY: 1.3,
                    z: 0,
                }}
            />
        </Fragment>
    );
}

export default Game;
