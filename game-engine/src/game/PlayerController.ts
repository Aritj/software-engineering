import { InputSystem } from "../engine/InputSystem";
import { GameComponent } from "../engine/superClasses/GameComponent";
import { GameObject } from "../engine/functionalComponents/GameObject";
import { Vector2D } from "../engine/Vector2D";
import { Transform } from "../engine/functionalComponents/Transform";

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
        //this.transform.translate(Vector2D.right.multiply(10));
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
