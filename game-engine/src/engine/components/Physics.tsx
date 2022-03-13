import { GameComponent } from "../superClasses/GameComponent";
import { Vector2D } from "../Vector2D";

export class Physics extends GameComponent {
    public Update(dt: number): void {        
        this.transform.translate(Vector2D.down.multiply(1))
    }
}