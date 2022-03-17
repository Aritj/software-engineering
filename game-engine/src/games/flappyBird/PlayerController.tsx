import { Vector2D } from "../../engine/Vector2D";
import { InputSystem } from "../../engine/input/InputSystem";
import { GameComponent } from "../../engine/superClasses/GameComponent";
import { PhysicsComponent } from "../../engine/components/Components";
import { DebuggerSystem } from "../../engine/DebuggerSystem";

export class PlayerController extends GameComponent {
    public Start(): void {
        InputSystem.add("w", this.onGoUp.bind(this));
        InputSystem.add("a", this.onGoLeft.bind(this));
        InputSystem.add("s", this.onGoDown.bind(this));
        InputSystem.add("d", this.onGoRight.bind(this));
        InputSystem.add("x", this.debugSwitch.bind(this));
    }

    private onGoUp() {
        this.gameObject.components.forEach(component => {
            if (component instanceof PhysicsComponent) {
                component.multiplier = 0;
            }
        })
        this.transform.position.add(Vector2D.up.multiply(64));
        new Audio("/audio/swoosh.mp3").play();
    }

    private onGoLeft() {
        this.transform.position.add(Vector2D.left.multiply(32));
    }
    
    private onGoDown() {
        this.transform.position.add(Vector2D.down.multiply(32));
    }

    private onGoRight() {
        this.transform.position.add(Vector2D.right.multiply(32));
    }

    private debugSwitch() {
        DebuggerSystem.switch();
    }


}