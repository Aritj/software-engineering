import { GameComponent } from "../superClasses/GameComponent";
import { Vector2D } from "../Vector2D";

export class PhysicsComponent extends GameComponent {
    multiplier: number = 0;

    public Update(dt: number): void {
        this.multiplier += 0.25;
        this.transform.setPosition(this.transform.position.add(Vector2D.down.multiply(this.multiplier)));
    }
}

export class CullingComponent extends GameComponent {
    public Update(dt: number): void {
        if (this.transform.position.x < 600) {
            this.enabled = false;
        }
        console.log(this.enabled)
    }
    

}

export class VelocityComponent extends GameComponent {
    multiplier: number = 2;

    public Update(dt: number): void {
        this.transform.setPosition(this.transform.position.add(Vector2D.left.multiply(this.multiplier)));
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
            transition: "0.1s",
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
            /*background: "red"*/
        }}
    />
    }
}

export class CullingComponent2 extends GameComponent {

    public Update(dt: number): void {
        if (this.transform.position.x < 400) {
        }
    }

    public Render(position: Vector2D): JSX.Element {
        // no need to render.
        return <></>;
    }
}