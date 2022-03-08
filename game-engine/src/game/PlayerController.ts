import { InputSystem } from "../engine/InputSystem";
import { IGameComponent } from "../engine/interfaces/IGameComponent";

export class PlayerController implements IGameComponent {
    constructor() {}

    start(): void {
        InputSystem.add("w", this.moveUp);
        InputSystem.add("a", this.moveLeft);
        InputSystem.add("s", this.moveDown);
        InputSystem.add("d", this.moveRight);
    }

    update(): void {
        // no implementation
    }

    render(): void {
        // no implementation
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
