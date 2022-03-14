import { GameComponent } from "../superClasses/GameComponent";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { TypeTransform } from "../types/objects/TypeTransform";
import { Vector2D } from "../Vector2D";

export class PhysicsComponent extends GameComponent {
    multiplier: number = 0;


    public Update(dt: number): void {
        this.multiplier += 0.1;
        this.transform.setPosition(this.transform.position.add(Vector2D.down.multiply(this.multiplier)));
    }
}

export class VelocityComponent extends GameComponent {
    public Update(dt: number): void {
        this.transform.setPosition(this.transform.position.add(Vector2D.left.multiply(1)));
    }
}

export class CollisionComponent extends GameComponent {
    public Render(position: Vector2D): JSX.Element {
        return <img
        src={this.gameObject.image}
        alt={this.gameObject.name}
        style={{
            position: "absolute",
            border: "3px solid green",
            transform: `translate(${this.gameObject.transform.position.x}px, ${this.gameObject.transform.position.y}px) scaleX(${this.gameObject.transform.scaleX}) scaleY(${this.gameObject.transform.scaleY})`,
            zIndex: `${this.gameObject.transform.z}`,
        }}
    />
    }
}

export class BoxCollisionComponent extends GameComponent  {
    public Render(position: Vector2D): JSX.Element {
        return <div
        style={{
            position: "absolute",
            transform: `translate(${(this.transform.position.x + (1/2*this.gameObject.width))}px, ${this.transform.position.y}px)`,
            width: this.gameObject.width,
            height: this.gameObject.height,
            background: "red"
        }}
    />
    }
}