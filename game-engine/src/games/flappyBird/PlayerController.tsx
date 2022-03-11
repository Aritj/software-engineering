import { Vector2D } from "../../engine/Vector2D";
import { InputSystem } from "../../engine/input/InputSystem";
import { GameComponent } from "../../engine/superClasses/GameComponent";

export class PlayerController extends GameComponent {
    public Start(): void {
        InputSystem.add("w", this.onGoUp.bind(this));
        InputSystem.add("a", this.onGoLeft.bind(this));
        InputSystem.add("s", this.onGoDown.bind(this));
        InputSystem.add("d", this.onGoRight.bind(this));
    }

    private onGoUp() {
        this.transform.translate(Vector2D.up.multiply(8));
    }

    private onGoLeft() {
        this.transform.translate(Vector2D.left.multiply(8));
    }

    private onGoDown() {
        this.transform.translate(Vector2D.down.multiply(8));
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