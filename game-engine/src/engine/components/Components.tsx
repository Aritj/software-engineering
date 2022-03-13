import { GameComponent } from "../superClasses/GameComponent";
import { Vector2D } from "../Vector2D";

export class PhysicsComponent extends GameComponent {
    public Update(dt: number): void {
        this.transform.position.add(Vector2D.down.multiply(1));
        this.transform.translate(new Vector2D(0, 0))

    }
}

export class VelocityComponent extends GameComponent {
    public Update(dt: number): void {        
        this.transform.position.add(Vector2D.left.multiply(1))
        this.transform.translate(new Vector2D(0, 0))

    }
}

export class CollisionComponent extends GameComponent  {

    public Render(position: Vector2D): JSX.Element {
        return <img
        src={this.gameObject.image}
        alt={this.gameObject.name}
        style={{
            position: "absolute",
            border: "3px solid red",
            transform: `translate(${this.gameObject.transform.position.x}px, ${this.gameObject.transform.position.y}px) scaleX(${this.gameObject.transform.scaleX}) scaleY(${this.gameObject.transform.scaleY})`,
            zIndex: `${this.gameObject.transform.z}`,
        }}
    />
    }

}

export class BackgroundComponent extends GameComponent {


    /**
     * Quick-fix for rendering the background. This class should not be necessary!!!
     */
}