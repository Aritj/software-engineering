import { DebuggerSystem, DebuggerObserver } from "../DebuggerSystem";
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
        if (this.transform.position.x < -200) {
            this.gameObject.components.forEach(component => {
                component.enabled = false;
            })
            this.gameObject.setActive(false);
        }
    }
}

export class VelocityComponent extends GameComponent {
    multiplier: number = 2;

    public Update(dt: number): void {
        this.transform.setPosition(this.transform.position.add(Vector2D.left.multiply(this.multiplier)));
    }

}

export class DebuggerComponent extends GameComponent {
    private _subscribed = false;

    public Update(dt: number): void {
        if (! this._subscribed) {
            DebuggerSystem.add(this);
            this._subscribed = true;
            this.enabled = DebuggerSystem.getDebugStatus();
        }

        super.Update(dt);
    }
    
    public Render(position: Vector2D): JSX.Element {
        return <div
            style={{
                position: "absolute",
                width: `${this.gameObject.transform.width}px`,
                height: `${this.gameObject.transform.height}px`,
                border: "3px solid red",
                transition: "0.1s",
                transform: `translate(${this.gameObject.transform.position.x}px, ${this.gameObject.transform.position.y}px) rotate(${this.gameObject.transform.rotation}deg)`,
                zIndex: `${this.gameObject.transform.z}`,
            }}
        />
    }
}

export class CollisionComponent extends GameComponent {
    public Render(position: Vector2D): JSX.Element {
        return <></>;
    }
}
