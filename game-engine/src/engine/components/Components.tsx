import { PointSystem } from "../Collision/PointSystem";
import { DebuggerSystem } from "../DebuggerSystem";
import { GameComponent } from "../superClasses/GameComponent";
import { Vector2D } from "../Vector2D";

export class PhysicsComponent extends GameComponent {
    multiplier: number = 0;

    public Update(dt: number): void {
        this.multiplier += 0.25;
        this.transform.setPosition(this.transform.position.add(Vector2D.down.multiply(this.multiplier)));
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
    public active = false;

    public Update(dt: number): void {
        if (! this._subscribed) {
            DebuggerSystem.add(this);
            this._subscribed = true;
            this.active = DebuggerSystem.getDebugStatus();
        }

        if (this.active) {
            //console.log(dt);
        }
    }
    
    public Render(position: Vector2D): JSX.Element {
        if (! this.active) {
            return <></>;
        }
        
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
    private _set: boolean = false;

    public trigger() {
        if (! this._set && this.gameObject.name == "Point") {
            new PointTrigger().trigger();
            this._set = true;
        }

        if (! this._set && (this.gameObject.name == "upperPipe" || this.gameObject.name == "lowerPipe")) {
            new PipeTrigger().trigger();
            this._set = true;
        }
    }

    public Render(position: Vector2D): JSX.Element {
        return <></>;
    }
}
interface Trigger {
    trigger(): void;
}

class EmptyTrigger implements Trigger {
    private _triggered: boolean = false;

    trigger(): void {
        if (! this._triggered) {
            console.log("TRIGGER");
            this._triggered = true;
        }
    }
}

class PointTrigger implements Trigger {
    private _triggered: boolean = false;

    trigger() {
        if (! this._triggered) {
            PointSystem.increasePoint(1);
            this._triggered = true;        
        }
    }
}

class PipeTrigger implements Trigger {
    private _triggered: boolean = false;

    trigger() {
        if (! this._triggered) {
            // STOP THE GAME
            this._triggered = true;
            console.log("PIPE TRIGGER (components.tsx)");
        }
    }
}