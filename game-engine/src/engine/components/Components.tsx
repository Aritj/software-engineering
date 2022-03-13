import { GameComponent } from "../superClasses/GameComponent";
import { Vector2D } from "../Vector2D";

export class Physics extends GameComponent {
    public Update(dt: number): void {        
        this.transform.translate(Vector2D.down.multiply(1))
    }
}

export class Velocity extends GameComponent {
    public Update(dt: number): void {        
        this.transform.translate(Vector2D.left.multiply(1))
    }
}

export class Collision extends GameComponent {
    // missing implementation
}

export class Background extends GameComponent {
    /**
     * Quick-fix for rendering the background. This class should not be necessary!!!
     */
}