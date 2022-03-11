import "./App.css";
import { GameComponent } from "./engine/superClasses/GameComponent";
import { GameObject } from "./engine/functionalComponents/GameObject";
import { Vector2D } from "./engine/Vector2D";
import { Fragment, useEffect } from "react";

import { useGameLoop } from "./engine/loop";
import bird from "./games/flappyBird/images/bird.png";
import pipe from "./games/flappyBird/images/pipe.png";
import background from "./games/flappyBird/images/background.png";
import { InputSystem } from "./engine/input/InputSystem";

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
                components={[PlayerController]}
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
                    position: Vector2D.setPosition(150, 10),
                    scaleX: 1.4,
                    scaleY: 1.3,
                    z: 0,
                }}
            />
        </Fragment>
    );
}

export class PlayerController extends GameComponent {
    public Start(): void {
        InputSystem.addButtonDownListener("left", this.onGoLeft.bind(this));
        InputSystem.addButtonDownListener("right", this.onGoRight.bind(this));
        
    }

    private onGoLeft() {
        this.transform.translate(Vector2D.left.multiply(8));
    }

    private onGoRight() {
        this.transform.translate(Vector2D.right.multiply(8));
    }

    public Render(position: Vector2D) {
       return <img
            src={this.gameObject.image}
            alt={this.gameObject.name}
            style={{
                position: "absolute",
                transform: `translate(${position.x}px, ${position.y}px) scaleX(${this.gameObject.transform.scaleX}) scaleY(${this.gameObject.transform.scaleY})`,
                zIndex: `${this.gameObject.transform.z}`,
            }}
        />
    
    }

}

export default Game;
